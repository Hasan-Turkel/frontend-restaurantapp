import React from "react";
import LoginForm from "../components/loginForm/LoginForm";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const props = "position-absolute bottom-0";
  const navigate = useNavigate();
  return (
    <>
      <LoginForm />
      <p className="text-center">
        Don't you have an account?{" "}
        <span
          className="text-danger"
          role="button"
          onClick={() => navigate("/register")}
        >
          Sign Up
        </span>
      </p>
      <div className="empty-div"></div>
      <Footer props={props} />
    </>
  );
};

export default Login;
