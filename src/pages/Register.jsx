
import Footer from '../components/Footer';
import RegisterForm from '../components/RegisterForm'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const props = "position-absolute bottom-0";

  const navigate = useNavigate()
  return (<>
   <RegisterForm/>
   <p className='text-center mt-3'>Do you already have an account? <span className='text-danger' role='button' onClick={()=>navigate("/login")}>Sign In</span></p>
   <div className='empty-div'></div>

   <Footer props={props} />
  
  </>
   
  )
}

export default Register