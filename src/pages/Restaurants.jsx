import { useState, useEffect } from "react";
import useAxios from "../hooks/useAxios";
import Footer from "../components/Footer"

const Restaurants = () => {
  const { axiosSimple } = useAxios();
  const [restaurants, setRestaurants] = useState([]);

  const getRestaurants = async () => {
    try {
      const { data } = await axiosSimple.get(`restaurants`);
      setRestaurants(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRestaurants();
  }, []);

  return (

    <>
    <div className="p-5 d-flex flex-column gap-5 bg-black text-white border-top border-bottom">
      {restaurants.map((item) => (
        <div>
          <img src="/public/restaurant.jpg" alt="restaurant" width={150} />
          <h4>
            Branch: <span className="fs-5">{item.branchName}</span>
          </h4>
          <h4>
            Address: <span className="fs-5">{item.address}</span>
          </h4>
          <h4>
            Working Days: <span className="fs-5">{item.days}</span>
          </h4>
          <h4>
            Working Hours: <span className="fs-5">{item.hours}</span>
          </h4>
        </div>       
      ))}
    </div>
    <Footer/>
    </>
  );
};

export default Restaurants;
