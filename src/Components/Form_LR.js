import React, { useState } from "react";
import "../Components/nfc.css";
import { Row, Col } from "react-bootstrap";
import { Input } from "antd";
import { useForm } from "react-hook-form";
import { type } from "@testing-library/user-event/dist/type";
import { useNavigate } from "react-router-dom";
import Api from "../Api";

export default function Form_LR() {
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm();

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
  const handleFormSubmit = async (id) => {
    const Details = {
      email: getValues().email,
      password: getValues().password,
    };
    await Api.put("/auth/login", Details).then((resp) => {
      console.log("resp.data", resp.data);
    });
  };
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
              <Input
                className="loginPageInput"
                placeholder="Enter your Email"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="Stud-personal-error" style={{color:'red'}}> 
                  Email is required
                </span>
              )}

              <label className="formP_label" htmlFor="Password">
                Password
              </label>
              <Input.Password
                className="loginPageInput"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="Stud-personal-error" style={{color:'red'}}>
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
                onClick={handleSubmit}
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
    return (
      <div role="tablePanel">
        <form>
          <div className="form_outline">
            <label className="formP_label" htmlFor="userName">
              UserName
            </label>
            <input
              type="text"
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
    </div>
  );
}
