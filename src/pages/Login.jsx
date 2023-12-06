import React from "react";
import LoginForm from "../components/loginForm/LoginForm";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const props = "position-absolute bottom-0";
  const navigate = useNavigate();
  return (
    <main className="d-flex justify-content-center flex-column">
      <LoginForm />
      <h3 className="text-center m-2 text-white">
        Don't you have an account?{" "}
        <span
          className="text-danger"
          role="button"
          onClick={() => navigate("/register")}
        >
          Sign Up
        </span>
      </h3>
      <div className="empty-div"></div>
      <Footer props={props} />
    </main>
  );
};

export default Login;
