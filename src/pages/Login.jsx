import React from "react";
import LoginForm from "../components/loginForm/LoginForm";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Login = () => {
  const props = "position-absolute bottom-0";
  const navigate = useNavigate();
  const { loading } = useSelector((state) => state.auth);
  return (
   
    <main className="d-flex justify-content-center flex-column align-items-center">
      {loading ? (<>
        <h1 className="text-center p-3 m-2 text-white border bg-black rounded-5">
         Login performing...
        </h1>
        <Footer props={props} />
        </>
      ) : (<>
          <LoginForm />
          <h3 className="text-center m-2 text-white">
            Don't you have an account?{" "}
            <span
              className="text-danger"
              role="button"
              onClick={() => navigate("/register")}
            >
              Register
            </span>
          </h3>
          <div className="empty-div"></div>
          <Footer props={props} />
          </>
          )}
    </main>
   
  );
};

export default Login;
