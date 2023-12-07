import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Navbar from "../components/Navbar";
import Restaurants from "../pages/Restaurants";
import Reservation from "../pages/Reservation";
import Login from "../pages/Login";
import MyReservations from "../pages/MyReservations";
import Register from "../pages/Register";
import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route element={<PrivateRouter />}>
        <Route path="/create-reservation" element={<Reservation />} />
        <Route path="/my-reservations" element={<MyReservations />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
