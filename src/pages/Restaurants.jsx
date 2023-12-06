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
      // console.log(error);
    }
  };

  useEffect(() => {
    getRestaurants();
  }, []);

  return (

    <>
    <div className="d-flex flex-column absolute ">
      {!restaurants?.length ? (
        <main className="d-flex justify-content-center align-items-center">
          <h3 className="bg-black p-3 rounded-5 text-white">
            Please wait. Our restaurants are loading...
          </h3>
        </main>
      ) :restaurants.map((item) => (
        <div key={item.branchName} className=" p-3 mx-5 my-4 border rounded-5 shadow-lg bg-white" style={{width:"18rem"}}>
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
    <Footer props={!restaurants?.length && "position-absolute bottom-0"}/>
    </>
  );
};

export default Restaurants;
