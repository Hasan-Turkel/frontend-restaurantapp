
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import DeleteModal from "../components/DeleteModal";
// import UpdateModal from "../components/UpdateModal";

const MyBlogs = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate()
  const {axiosToken} = useAxios()

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
    <div>
      {!reservations?.length ? (
        <div className="d-flex justify-content-center align-items-center profile-div">
          <h3>
            No Reservations!{" "}
            <span className="text-danger" role="button" onClick={()=>navigate("/create-reservation")}>
              Do you want to add?
            </span>
          </h3>
        </div>
      ) : (
        <div className="m-5">
        {reservations?.map((item)=>(
        <div key={item._id} className="my-5 p-3 border rounded-5 shadow-lg" style={{width:"18rem"}}>  
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

           {item.situation=="reserved"&&<div>
            {/* <button className="btn btn-primary m-4" data-bs-toggle="modal"
      data-bs-target="#update">Update</button> */}

    <button className="btn btn-danger m-4"  data-bs-toggle="modal"
      data-bs-target="#del" >Cancel</button></div>}

    <DeleteModal id={item._id}/>
    {/* <UpdateModal id={item._id} data={reservations} getDetailCard={getMyReservations}/> */}
        </div>   ))}
      </div>
      )}
    </div>
  );
};

export default MyBlogs;
