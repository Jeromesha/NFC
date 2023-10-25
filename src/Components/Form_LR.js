import React, { useState } from "react";
import "../Components/nfc.css";
import { Row, Col } from "react-bootstrap";
import { appendErrors, useForm } from "react-hook-form";
import { type } from "@testing-library/user-event/dist/type";
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
  const routeChange = () =>{ 
    let path = `/dashroute`; 
    navigate(path);
  }

  const Login = () => {
    return (
      <Row>
        <Col sm={12} mg={12} lg={12} xl={12}>
          <form onSubmit={handleSubmit(onSubmit)} class="form_outline">
            <label className="formP_label" for="registerName">
              UserName
            </label>
            <input
              type="text"
              class="form-control"
              {...register("UserName", {
                required: true,
                maxLength: 20,
              })}
            />
            {errors?.UserName?.type === "required" && (
              <p className="form_error">Username Required</p>
            )}
            <label className="formP_label" for="registerName">
              Password
            </label>
            <input
              type="text"
              class="form-control"
              {...register("Password", {
                pattern: /^[A-Za-z]+$/i,
                required: true,
                maxLength: 20,
              })}
            />
            {errors?.Password?.type === "required" && (
              <p className="form_error">Password Requires</p>
            )}
            {errors?.Password?.type === "MaxLength" && (
              <p>Max length is 20 charecter</p>
            )}
            <div
              style={{ display: "flex", justifyContent: "start", margin: "3%" }}
            >
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />{" "}
              &nbsp;
              <label class="formP_label" for="exampleCheck1">
                Check me out
              </label>
            </div>
            <button type="submit" className="form_login_style" onClick={routeChange}>
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
          <div class="form_outline">
            <label className="formP_label" for="registerName">
              UserName
            </label>
            <input
              {...register("userName", {
                required: true,
                maxLength: 20,
              })}
              type="text"
              class="form-control"
            />  
            {errors.userName?.type === "required" && <p  className="form_error">This field is required</p>}
          </div>
          <div class="form_outline">
            <label className="formP_label" for="registerEmail">
              Email
            </label>
            <input type="email" id="registerEmail" class="form-control" />
          </div>

          <div class="form_outline">
            <label className="formP_label" for="registerPassword">
              Password
            </label>
            <input
              type="password"
              id="registerPassword"
              class="form-control"
              {...register("password", {
                required: true,
                minLength: 8,
                maxLength: 20,
                pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/,
              })}
            />
            {errors.password?.type ==='minLength' && (
              <p  className="form_error">minmum Length is 8 charecter</p>
            )}
            {errors.password?.type === 'maxLength' && (
              <p  className="form_error">maximum Length is 20 charecter</p>
            )}
            {errors.password?.type === 'pattern' && (
              <div>
              <p className="form_error">should have (0-9)</p><br/>
              <p className="form_error">At least one special character <br/>from the set !@#$%^&*_=+-.</p>
              </div>
            )}
          </div>

          <div class="form_outline">
            <label className="formP_label" for="registerRepeatPassword">
              Repeat password
            </label>
            <input
              type="password"
              id="registerRepeatPassword"
              class="form-control"
              {...register("passwordrepeat", {
                required: true,
                validate: (value) => {
                  const { password } = getValues();
                  return password == value || "password is not matching";
                },
              })}
            />
            {errors.passwordrepeat && <p  className="form_error">password is not matching</p>}
          </div>
          <br />
          <div
            class="form-check d-flex justify-content-center"
            style={{ padding: "2%" }}
          >
            <input
              class="form-check-input me-2"
              type="checkbox"
              value=""
              id="registerCheck"
              checked
              aria-describedby="registerCheckHelpText"
            />
            <label className="formP_label" for="registerCheck">
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
        <button onClick={() => setActiveTable("Login")} className="button_form">
          Login
        </button>
        <button
          onClick={() => setActiveTable("Register")}
          className="button_form"
        >
          Register
        </button>
        {activeTable === "Login" && <Login />}
        {activeTable === "Register" && <Register />}
      </div>
    </div>
  );
}
