import { hash, compare } from 'bcrypt';
import User from '../model/UserModel.js';
import jwt from 'jsonwebtoken';
const nodemailer = require('nodemailer');

export async function signup(req, res) {
    
  try {
    const { name, email, phoneNumber, password, confirmPassword } = req.body;

    
    if (password !== confirmPassword) {
      return res.status(400).json({ message: 'Passwords do not match' });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
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
      expiresIn: '1h', 
    });

    res.status(201).json({ message: 'User registered successfully', token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
}


export async function login(req, res) {
  try {
    const { email, password } = req.body;

  
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

   
    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

   
    const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, {
      expiresIn: '1h', 
    });

    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
}



const users = new Map();


function generateOTP() {
  return Math.floor(1000 + Math.random() * 9000).toString();
}


function storeOTP(email, otp) {
  const expirationTime = new Date();
  expirationTime.setMinutes(expirationTime.getMinutes() + 15); 
  users.set(email, { otp, expirationTime });
}


export async function  sendOTPByEmail(email, otp) {
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'itzz.siva@gmail.com',
      pass: 'sivanandhaa',
    },
  });

  const mailOptions = {
    from: 'itzz.siva@gmail.com',
    to: email,
    subject: 'Password Reset OTP',
    text: `Your OTP for password reset is: ${otp}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    }
  });
};


export async function otp (req, res) {
  const { email } = req.body;

  const user = users.get(email);
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  const otp = generateOTP();
  storeOTP(email, otp);
  sendOTPByEmail(email, otp);

  res.json({ message: 'OTP sent successfully' });
};


export async function verifyotp(req, res)  {
  const { email, otp } = req.body;
  const user = users.get(email);

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  if (otp === user.otp && new Date() < user.expirationTime) {
    res.json({ message: 'OTP verified successfully' });
  } else {
    res.status(401).json({ message: 'Invalid or expired OTP' });
  }
};

export async function updatepassword (req, res) {
  const { email, otp, newPassword } = req.body;
  const user = users.get(email);

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  if (otp !== user.otp || new Date() >= user.expirationTime) {
    return res.status(401).json({ message: 'Invalid or expired OTP' });
  }

  
  const updatedUser = {
    ...user,
    password: newPassword, 
  };

  users.set(email, updatedUser);

 
  users.delete(email);

  res.json({ message: 'Password reset successful' });
};

export async function update (req, res) {
  try {
    const { email, currentPassword, newPassword } = req.body;

  
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

   
    const passwordMatch = await compare(currentPassword, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid current password' });
    }

   
    const hashedPassword = await hash(newPassword, 10);


    user.password = hashedPassword;
    await user.save();

    
    const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, {
      expiresIn: '1h',
    });

    res.status(200).json({ message: 'Password updated successfully', token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
}