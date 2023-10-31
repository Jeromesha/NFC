import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../Components/nfc.css";
import OTPInput from "otp-input-react";
import { Form } from "antd";
import { Link } from "react-router-dom";
import { RxDoubleArrowLeft } from "react-icons/rx";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ForgotPasswordForm({
  setComponentName,
  handleSubmit,
  register,
  errors,
  onSubmit,
}) {
  return (
    <Row>
      <Col className="NfcLogin" sm={12} mg={12} lg={12} xl={12}>
        <form className="form_outline" onSubmit={handleSubmit(onSubmit)}>
          <label className="formP_label" htmlFor="Email">
            Email
          </label>
          <input
            className="loginPageInput"
            placeholder="Enter Your Email"
            type="email"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="Stud-personal-error" style={{ color: "red" }}>
              E-mail is required
            </span>
          )}
          <div
            // className="loginPage_button_backIcon"
            style={{
              marginTop: "10px",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Link
              to="/form"
              style={{
                fontSize: "14px",
                display: "flex",
                color: "white",
                textDecoration: "none",
                cursor: "pointer",
                alignItems:"baseline"
              }}
            >
              <span style={{ fontSize: "24px" }}>
                <RxDoubleArrowLeft style={{ paddingRight: "5px" }} />
              </span>
              Back to Login
            </Link>
          </div>

          <div className="ForgotPassword_emailSend_container">
            <button
              className="ForgotPassword_emailSend"
              type="submit"
              onClick={() => setComponentName("Otpinput")}
            >
              Send Otp
            </button>
          </div>
        </form>
      </Col>
    </Row>
  );
}

function Otp({ setComponentName }) {
  const [forgototpnumber, setforgototpnumber] = useState("");

  return (
    <Row>
      <Col className="NfcLogin" sm={12} mg={12} lg={12} xl={12}>
        <Form layout="vertical">
          <OTPInput
            className="otp_input"
            OTPLength={4}
            otpType="number"
            value={forgototpnumber}
            onChange={setforgototpnumber}
          />
          {/* <div style={{ marginTop: "15px", marginRight: "50px", display: "flex", justifyContent: "end" }}>
        <button onClick={() => setComponentName("Changepassword")} className="loginBackgroundStyle">Verify</button>
      </div> */}
          <center>
            <div
              // className="loginPage_button_backIcon"
              style={{
                marginTop: "10px",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Link
                onClick={() => setComponentName("ForgotPassword")}
                style={{
                  fontSize: "16px",
                  display: "flex",
                  textAlign: "center",
                  color:"white",
                  textDecoration:"none",
                  cursor: "pointer",
                  alignItems:"baseline"
  
                  
                }}
              >
                <span style={{ fontSize: "24px" }}>
                  <RxDoubleArrowLeft style={{ paddingRight: "5px" }} />
                </span>
                Back
              </Link>
            </div>
            <div className="loginPage_button">
              <button
                className="ForgotPassword_emailSend"
                onClick={() => setComponentName("Changepassword")}
              >
                verify
              </button>
            </div>
          </center>
        </Form>
      </Col>
    </Row>
  );
}
function ChangePassword({
  setComponentName,
  handleSubmit,
  register,
  errors,
  onSubmit,
}) 
{
  let [passwordShown, setpasswordShown] = useState(false);
const [showPassword, setShowPassword] = useState(false);

const togglePasswordVisiblity = () => {
  setpasswordShown(!passwordShown);
};
const togglePasswordVisiblitys = () => {
  setShowPassword(!showPassword);
};

  return (
    <Row>
      <Col className="NfcLogin" sm={12} mg={12} lg={12} xl={12}>
        <form className="form_outline" onSubmit={handleSubmit(onSubmit)}>
          <label className="formP_label" htmlFor="Email">
            New Password
          </label>
          <div style={{width:"100%"}}>
          <input
            className="loginPageInput"
            placeholder="Enter Your New Password"
            type={showPassword?"text":"password"}
            {...register("NewPassword", { required: true })}
          />
           <FontAwesomeIcon
                icon={showPassword ? faEye : faEyeSlash}
                onClick={togglePasswordVisiblitys}
                style={{
                  cursor: "pointer",
                  color: "black",
                  marginLeft: "-25px",
                }}
              />
          {errors.NewPassword && (
            <span className="Stud-personal-error" style={{ color: "red" }}>
              NewPassword is required
            </span>
          )}
          
          </div>
          <label className="formP_label" htmlFor="Email">
            Confirm Password
          </label>
          <div style={{width:"100%"}}>
          <input
            className="loginPageInput"
            placeholder="Enter Your Confirm Password"
            type={passwordShown?"text":"password"}
            {...register("ConfirmPassword", { required: true })}
          />
          <FontAwesomeIcon
                icon={passwordShown ? faEye : faEyeSlash}
                onClick={togglePasswordVisiblity}
                style={{
                  cursor: "pointer",
                  color: "black",
                  marginLeft: "-25px",
                }}
              />
          {errors.ConfirmPassword && (
            <span className="Stud-personal-error" style={{ color: "red" }}>
              Confirm Password is required
            </span>
          )}
          </div>
         <div
              // className="loginPage_button_backIcon"
              style={{
                marginTop: "10px",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Link
                onClick={() => setComponentName("ForgotPassword")}
                style={{
                  fontSize: "16px",
                  display: "flex",
                  textAlign: "center",
                  color:"white",
                  textDecoration:"none",
                  cursor: "pointer",
                  alignItems:"baseline"
  
                  
                }}
              >
                <span style={{ fontSize: "24px" }}>
                  <RxDoubleArrowLeft style={{ paddingRight: "5px" }} />
                </span>
                Back
              </Link>
            </div>

          <div className="ForgotPassword_emailSend_container">
            <button
              className="ForgotPassword_emailSend"
              type="submit"
              onClick={() => setComponentName("")}
            >
              confirm
            </button>
          </div>
        </form>
      </Col>
    </Row>
  );
}

const PageView = ({
  pageType,
  setComponentName,
  handleSubmit,
  register,
  errors,
  onSubmit,
}) => {
  switch (pageType) {
    case "ForgotPassword":
      return (
        <ForgotPasswordForm
          setComponentName={setComponentName}
          handleSubmit={handleSubmit}
          register={register}
          errors={errors}
          onSubmit={onSubmit}
        />
      );
    case "Otpinput":
      return (
        <Otp
          setComponentName={setComponentName}
          handleSubmit={handleSubmit}
          register={register}
          errors={errors}
          onSubmit={onSubmit}
        />
      );
    case "Changepassword":
      return (
        <ChangePassword
          handleSubmit={handleSubmit}
          register={register}
          errors={errors}
          onSubmit={onSubmit}
        />
      );
    default:
      return (
        <ForgotPasswordForm
          setComponentName={setComponentName}
          handleSubmit={handleSubmit}
          register={register}
          errors={errors}
          onSubmit={onSubmit}
        />
      );
  }
};

const ForgotPassword = () => {
  const [componentName, setComponentName] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    toast.success("Form submitted successfully", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 2000,
    });
  };

  return (
    <div className="loginPage_nfc">
      <ToastContainer />
      <div className="Form_A">
        <PageView
          pageType={componentName}
          setComponentName={setComponentName}
          handleSubmit={handleSubmit}
          register={register}
          errors={errors}
          onSubmit={onSubmit}
        />
      </div>
    </div>
  );
};

export default ForgotPassword;
