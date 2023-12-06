
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import CancelModal from "../components/CancelModal";
import UpdateModal from "../components/UpdateModal";
import Footer from "../components/Footer";

const MyBlogs = () => {

  const navigate = useNavigate()
  const {axiosToken} = useAxios()
 
  const [item, setItem] = useState("");
  const [reservations, setReservations] = useState([]);
  const getMyReservations = async () => {
    try {
      const { data } = await axiosToken(`/reservations`);
      setReservations(data.data);
      // console.log(data);
    } catch (error) {
      // console.log(error);
    }
  };

  useEffect(() => {
    getMyReservations();
  }, []);

  return (
    <div className="absolute">
      {!reservations?.length ? (
        <main className="d-flex justify-content-center align-items-center">
          <h3 className="bg-black p-3 rounded-5">

            <span className="text-white">No Reservations! </span>
            <span className="text-danger" role="button" onClick={()=>navigate("/create-reservation")}>
              Do you want to add?
            </span>
          </h3>
        </main>
      ) : (
        <div className="p-3">
        {reservations?.map((item)=>(
        <div key={item._id} className="mx-5 mb-3 p-3 border rounded-5 shadow-lg bg-white" style={{width:"18rem"}}>  
          <img src="/restaurant.jpg" alt="restaurant" width={150} />
          <h4>
            Restaurant: <span className="fs-5">{item.branchId.branchName}</span>
          </h4>
          <h4>
            Date: <span className="fs-5">{item.date.slice(0, 10)}</span>
          </h4>
          <h4>
            Time: <span className="fs-5">{item.hour}</span>
          </h4>
          <h4>
            Situation: <span className={new Date(item.date)<new Date() || item.situation =="canceled"?"fs-5 text-danger":"fs-5"}>{new Date(item.date)<new Date()? "OUT of DATE":item.situation.toUpperCase()}</span>
          </h4>

           {item.situation=="reserved"&&new Date(item.date)>new Date()&&<div>
            <button className="btn btn-primary m-4" data-bs-toggle="modal"
      data-bs-target="#update" onClick={()=>setItem(item)}>Update</button>

    <button className="btn btn-danger m-4"  data-bs-toggle="modal"
      data-bs-target="#del" onClick={()=>setItem(item)}>Cancel</button></div>}
        </div>   ))}
    <UpdateModal id={item._id} getMyReservations={getMyReservations}/>
    <CancelModal id ={item._id} getMyReservations={getMyReservations}/>
      </div>
      )}

      <Footer props={!reservations?.length && "position-absolute bottom-0"}/>
    </div>
  );
};

export default MyBlogs;
