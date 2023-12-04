import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Restaurants from "../pages/Restaurants";
import Reservation from "../pages/Reservation";
import Login from "../pages/Login";
import MyReservations from "../pages/MyReservations";

const AppRouter = () => {
  return (
    <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurants" element={<Restaurants />} />
      <Route path="/create-reservation" element={<Reservation />} />
      <Route path="/my-reservations" element={<MyReservations />} />
      <Route path="/login" element={<Login />} />
    </Routes>
    <Footer />
  </Router>
  )
}

export default AppRouter