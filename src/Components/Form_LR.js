import React, { useState } from "react";
import "../Components/nfc.css";
import { Row, Col } from "react-bootstrap";
import { Input } from "antd";
import { useForm } from "react-hook-form";
import { type } from "@testing-library/user-event/dist/type";
import { useNavigate } from "react-router-dom";
import Api from "../Api";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Form_LR() {
  // const onSubmit = (data) => {
  //   console.log(data);
  //   alert(JSON.stringify(data));
  // };

  let navigate = useNavigate();
  // const routeChange = () => {
  //   let path = `/dashroute`;
  //   navigate(path);
  // };
  // const handleFormSubmit = async () => {
  //   const signupDetails = {
  //     name: getValues().name,
  //     email: getValues().email,
  //     phoneNumber: getValues().phoneNumber,
  //     password: getValues().password,
  //     confirmPassword: getValues().confirmPassword,
  //   };
  //   await Api.post("/auth/signup", signupDetails).then((res) => {
  //     console.log("res", res);
  //   });
  // };

  const onSubmite = (data) => {
    const { password, passwordrepeat } = data;

    // Add custom password validation logic here
    if (password !== passwordrepeat) {
      alert("Passwords do not match");
    } else {
      alert("Registration successful");
      // You can submit the form data to your API or take other actions here
    }
  };

  const Login = () => {
    const navigate = useNavigate();

    const {
      register,
      handleSubmit,
      formState: { errors },
      getValues,
    } = useForm();
    const handleFormSubmit = async () => {
      const Details = {
        email: getValues().email,
        password: getValues().password,
      };

      console.log("Details", Details);

      await axios
        .post("http://localhost:8080/auth/login", Details)
        .then((resp) => {
          console.log("resp.data", resp.data);

          if (resp.data.message === "Login successful") {
            // Display a success message using toast
            toast.success("Login successful", {
              position: toast.POSITION.TOP_RIGHT,
              autoClose: 1000,
            });
            localStorage.setItem("userName", resp.data.user.name);
            localStorage.setItem("userMail", resp.data.user.email);

            // Navigate to the home page after 2 seconds
            setTimeout(() => {
              // navigate("/");
            }, 2000); // 2 seconds
          } else {
            // Display an error message if login fails
            toast.error("Login failed", {
              position: toast.POSITION.TOP_RIGHT,
              autoClose: 1000,
            });
          }
        });
    };

    return (
      <div>
        <Row>
          <Col className="NfcLogin" sm={12} mg={12} lg={12} xl={12}>
            <form
              className="form_outline"
              onSubmit={handleSubmit(handleFormSubmit)}
            >
              <label className="formP_label" htmlFor="UserName">
                User Email
              </label>
              <input
                className="loginPageInput"
                placeholder="Enter your Email"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="Stud-personal-error" style={{ color: "red" }}>
                  Email is required
                </span>
              )}

              <label className="formP_label" htmlFor="Password">
                Password
              </label>
              <input
                className="loginPageInput"
                placeholder="Enter Your Password"
                type="password"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="Stud-personal-error" style={{ color: "red" }}>
                  Password is required
                </span>
              )}

              <div
                style={{
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                  margin: "3%",
                  paddingLeft: "10px",
                }}
              >
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />{" "}
                &nbsp;
                <label className="formP_label" htmlFor="exampleCheck1">
                  Check me out
                </label>
              </div>
              <button
                className="form_login_style"
                type="submit"
                // onClick={() => {
                //   navigate("/");
                // }}
              >
                Submit
              </button>
            </form>
          </Col>
        </Row>
      </div>
    );
  };

  const Register = () => {
    const {
      register,
      handleSubmit,
      formState: { errors },
      getValues,
    } = useForm();

    const handleFormSignupLogin = async () => {
      const singupDetails = {
        name: getValues().name,
        email: getValues().email,
        phoneNumber: getValues().phoneNumber,
        password: getValues().password,
        confirmPassword: getValues().confirmPassword,
      };
      console.log("Details", singupDetails);
      // await axios
      //   .post("http://localhost:8080/auth/signup", singupDetails)
      //   .then((resp) => {
      //     console.log("resp.data", resp.data);
      //   });
      await axios
        .post("http://localhost:8080/auth/signup", singupDetails)
        .then((resp) => {
          console.log("resp.data", resp.data);

          if (resp.data.message === "SignUo successful") {
            // Display a success message using toast
            toast.success("Login successful", {
              position: toast.POSITION.TOP_RIGHT,
              autoClose: 1000,
            });

            // Navigate to the home page after 2 seconds
            setTimeout(() => {
              // navigate("/");
            }, 2000); // 2 seconds
          } else {
            // Display an error message if login fails
            toast.error("Signup failed", {
              position: toast.POSITION.TOP_RIGHT,
              autoClose: 1000,
            });
          }
        });
    };

    return (
      <div role="tablePanel">
        <form onSubmit={handleSubmit(handleFormSignupLogin)}>
          {/* Form inputs and validation messages */}
          <div className="form_outline">
            <label className="formP_label" htmlFor="userName">
              UserName
            </label>
            <input
              type="text"
              placeholder="Enter Your UserName"

              className="form-control"
              {...register("name", {
                required: true,
                maxLength: 20,
              })}
            />
            {errors.name?.type === "required" && (
              <p className="form_error">This field is required</p>
            )}
          </div>
          <div className="form_outline">
            <label className="formP_label" htmlFor="registerEmail">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter Your Mail"

              id="registerEmail"
              className="form-control"
              {...register("email", {
                required: true,
                maxLength: 20,
              })}
            />
            {errors.email?.type === "required" && (
              <p className="form_error">This field is required</p>
            )}
          </div>
          <div className="form_outline">
            <label className="formP_label" htmlFor="registerPassword">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter Your Password"
              id="registerPassword"
              className="form-control"
              {...register("password", {
                required: true,
                minLength: 8,
                maxLength: 20,
                pattern:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,20}$/,
              })}
            />
            {errors.password?.type === "minLength" && (
              <p className="form_error">Minimum Length is 8 characters</p>
            )}
            {errors.password?.type === "maxLength" && (
              <p className="form_error">Maximum Length is 20 characters</p>
            )}
            {errors.password?.type === "pattern" && (
              <p className="form_error">
                Password should contain at least one lowercase letter, one
                uppercase letter, one digit, and one special character.
              </p>
            )}
          </div>
          <div className="form_outline">
            <label className="formP_label" htmlFor="registerRepeatPassword">
              Confirm password
            </label>
            <input
              type="password"
              placeholder="Enter Your ConfirmPassword"

              id="registerRepeatPassword"
              className="form-control"
              {...register("confirmPassword", {
                required: true,
                validate: (value) => {
                  const { password } = getValues();
                  return password === value || "Passwords do not match";
                },
              })}
            />
            {errors.confirmPassword && (
              <p className="form_error">Passwords do not match</p>
            )}
          </div>
          <br />
          <div className="form-check">
            <input
              className="form-check-input me-2"
              type="checkbox"
              value=""
              id="registerCheck"
              checked
              aria-describedby="registerCheckHelpText"
            />
            <label className="formP_label" htmlFor="registerCheck">
              I have read and agree to the terms
            </label>
          </div>
          <div style={{ padding: "4%" }}>
            <button type="submit" className="form_login_style">
              Sign in
            </button>
          </div>
        </form>
      </div>
    );
  };

  const [activeTable, setActiveTable] = useState("Login");

  return (
    <div className="loginPage_nfc">
      {/* <ToastContainer position="top-center" />  */}
      <div className="Form_A">
        <button
          onClick={() => setActiveTable("Login")}
          className={`button_form1 ${activeTable === "Login" ? "active" : ""}`}
        >
          Login
        </button>
        <button
          onClick={() => setActiveTable("Register")}
          className={`button_form ${
            activeTable === "Register" ? "active" : ""
          }`}
        >
          Register
        </button>
        {activeTable === "Login" && <Login />}
        {activeTable === "Register" && <Register />}
      </div>
      <ToastContainer />
    </div>
  );
}
