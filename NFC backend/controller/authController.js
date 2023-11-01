import { hash, compare } from "bcrypt";
import User from "../model/UserModel.js";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";
import bcrypt from "bcryptjs";

export async function signup(req, res) {
  try {
    const { name, email, phoneNumber, password, confirmPassword } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await hash(password, 10);

    const user = new User({
      name,
      email,
      phoneNumber,
      password: hashedPassword,
    });

    await user.save();

    const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, {
      expiresIn: "1h",
    });

    res
      .status(201)
      .json({ message: "User registered successfully", token, user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
}

export async function login(req, res) {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    console.log("user", user);

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, {
      expiresIn: "1h",
    });

    res.status(200).json({ message: "Login successful", token, user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
}

export async function otp(req, res, next) {
  try {
    const data = req.body;
    console.log("data.email", data.email);

    const otp = Math.floor(Math.random() * 9000 + 1000);
    console.log(otp);

    const checkEmail = await User.findOne({ email: data.email });
    console.log(checkEmail, "dsd");
    if (checkEmail) {
      var transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: "asajithkumar17@gmail.com",
          pass: "yszfzogykciywlid",
        },
      });

      var mailOptions = {
        from: "asajithkumar17@gmail.com",
        to: data.email,
        subject: "verifcation code",
        text: `${otp}`,
      };

      transporter.sendMail(mailOptions, async function (error, info) {
        if (error) {
          console.log(error);
        } else {
          const updateCode = await User.findByIdAndUpdate(
            checkEmail._id,
            {
              forgetPasswordCode: otp,
            },
            { new: true }
          );
          res.status(200).json({
            message: "code send successfully",
            id: checkEmail._id,
          });
        }
      });
    } else {
      res.status(400).json({
        message: "Email does not exist",
      });
    }
  } catch (err) {
    console.log(err);
    next();
  }
}

export async function verifyotp(req, res, next) {
  try {
    const data = req.body;

    const code = JSON.parse(data.code);
    const checkEmail = await User.findOne({ email: data.email });
    if (checkEmail) {
      const matchVerificationCode = checkEmail.forgetPasswordCode === code;
      if (matchVerificationCode) {
        res.status(200).json({
          message: "verification code matched",
        });
      } else {
        res.status(400).json({
          message: "verification code mismatched",
        });
      }
    } else {
      res.status(400).json({
        message: "Email doesnot exist try again !!!",
      });
    }
  } catch (err) {
    console.log(err);
    next();
  }
}

export async function updatepassword(req, res, next) {
  const salt = await bcrypt.genSaltSync(10);
  const passwordDetails = req.body;
  console.log("passwordDetails", passwordDetails);
  const id = req.params.id;
  if (id) {
    await User.findByIdAndUpdate(id, {
      password: bcrypt.hashSync(passwordDetails.userDetails.password, salt),
    });
    res.status(201).json({
      message: "password changed successfully",
    });
  } else {
    res.status(400).json({
      message: "Try again later",
    });
  }
}
