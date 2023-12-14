
import Footer from '../components/Footer';
import RegisterForm from '../components/RegisterForm'
import { useNavigate } from 'react-router-dom'
import { useSelector } from "react-redux";

const Register = () => {
  const props = "position-absolute bottom-0";
  const { loading } = useSelector((state) => state.auth)
  const navigate = useNavigate()
  return (
    <main className="d-flex justify-content-center flex-column align-items-center">
    {loading ? (<>
      <h1 className="text-center p-3 m-2 text-white border bg-black rounded-5">
       Register performing...
      </h1>
      <Footer props={props} />
      </>
    ) : (<>
        <RegisterForm />
        <h3 className="text-center mb-2 text-white">
          Have an account?{" "}
          <span
            className="text-danger"
            role="button"
            onClick={() => navigate("/register")}
          >
            Login
          </span>
        </h3>
        <Footer props={props} />
        </>
        )}
  </main>
   
  )
}

export default Register