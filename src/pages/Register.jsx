
import Footer from '../components/Footer';
import RegisterForm from '../components/RegisterForm'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const props = "position-absolute bottom-0";

  const navigate = useNavigate()
  return (<main className='d-flex justify-content-center flex-column'>
   <RegisterForm/>
   <h3 className='text-center mt- text-white'>Do you already have an account? <span className='text-danger' role='button' onClick={()=>navigate("/login")}>Sign In</span></h3>

   <Footer props={props} />
  
  </main>
   
  )
}

export default Register