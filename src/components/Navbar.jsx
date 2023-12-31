import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import useAuthCalls from "../hooks/useAuthCalls";

const Navbar = () => {

  const {user} = useSelector((state)=>state.auth)
  const { logout } = useAuthCalls()

  // console.log(user);
  return (
    <nav className="navbar navbar-expand-lg bg-black py-3">
    <div className="container-fluid align-items-end">
      <NavLink className="navbar-brand text-white fs-2 " to="/">
        Turkel's Restaurant
      </NavLink>
      <button
        className="navbar-toggler bg-white"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>     
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav w-100 px-5">
            
            <NavLink className="nav-link text-white fs-4" aria-current="page" to="/restaurants">
            Our Restaurants 
          </NavLink> 
          <NavLink className="nav-link text-white fs-4" to="/create-reservation">
            Create Reservation 
          </NavLink>

          {user&&<NavLink className="nav-link text-white fs-4" to="/my-reservations">
            My Reservations
          </NavLink> }
               
          {!user? <NavLink className="nav-link text-white fs-4 " to="/login">
            Login
          </NavLink> :<NavLink className="nav-link text-white fs-4 " onClick={()=>logout()}>
            Logout
          </NavLink>}   
         
          
        </div>
      </div>
    </div>
  </nav>
  
  )
}

export default Navbar