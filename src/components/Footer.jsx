
import { AiFillGithub } from 'react-icons/ai'
import { BiLogoGmail, BiLogoLinkedin } from 'react-icons/bi'

const Footer = ({props}) => {
  return (
    <> 
    <div className='empty-div'></div>
    <footer className={'w-100 d-flex justify-content-between p-2 px-5 align-items-center bg-black ' + props}>

      <div><h2 className='text-white'>Turkel's Restaurant </h2>
      <p className='text-white'>The taste in the middle of Europe</p></div>
      
    <div className='d-flex justify-content-center gap-4'>


        <a href="https://www.linkedin.com/in/hasan-turkel/" target='blank'><BiLogoLinkedin className='fs-2 text-primary'/></a>

        <a href="https://github.com/Hasan-Turkel" target='blank'><AiFillGithub className='fs-2 text-white'/></a>

        <a href="mailto:mhturkel@gmail.com" target='blank'><BiLogoGmail className='fs-2 text-danger'/></a>
      
      
      </div>
  </footer></>
   
  )
}

export default Footer