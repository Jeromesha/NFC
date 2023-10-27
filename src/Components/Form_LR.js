import React, { useState } from "react";
import "../Components/nfc.css";
import { Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function Form_LR() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/dashroute`;
    navigate(path);
  };

  const Login = () => {
    return (
      <Row>
        <Col className="NfcLogin" sm={12} mg={12} lg={12} xl={12}>
          <form onSubmit={handleSubmit(onSubmit)} className="form_outline">
            <label className="formP_label" htmlFor="UserName">
              UserName
            </label>
            <input
              type="text"
              className="form-control"
              {...register("UserName", {
                required: true,
                maxLength: 20,
              })}
            />
            {errors?.UserName?.type === "required" && (
              <p className="form_error">Username Required</p>
            )}
            <label className="formP_label" htmlFor="Password">
              Password
            </label>
            <input
              type="password" // Changed to password type
              className="form-control"
              {...register("Password", {
                pattern:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,20}$/,
                required: true,
                maxLength: 20,
              })}
            />
            {errors?.Password?.type === "required" && (
              <p className="form_error">Password Required</p>
            )}
            {errors?.Password?.type === "maxLength" && (
              <p>Max length is 20 characters</p>
            )}
            {errors?.Password?.type === "pattern" && (
              <p className="form_error">
                Password should contain at least one lowercase letter, one
                uppercase letter, one digit, and one special character.
              </p>
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
              type="submit"
              className="form_login_style"
              onClick={routeChange}
            >
              Submit
            </button>
          </form>
        </Col>
      </Row>
    );
  };

  const Register = () => {
    return (
      <div role="tablePanel">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form_outline">
            <label className="formP_label" htmlFor="userName">
              UserName
            </label>
            <input
              {...register("userName", {
                required: true,
                maxLength: 20,
              })}
              type="text"
              className="form-control"
            />
            {errors.userName?.type === "required" && (
              <p className="form_error">This field is required</p>
            )}
          </div>
          <div className="form_outline">
            <label className="formP_label" htmlFor="registerEmail">
              Email
            </label>
            <input type="email" id="registerEmail" className="form-control" />
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
              {...register("passwordrepeat", {
                required: true,
                validate: (value) => {
                  const { password } = getValues();
                  return password === value || "Passwords do not match";
                },
              })}
            />
            {errors.passwordrepeat && (
              <p className="form_error">Passwords do not match</p>
            )}
          </div>
          <br />
          <div
            className="form-check"
          >
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
