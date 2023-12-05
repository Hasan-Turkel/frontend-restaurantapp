
import { useNavigate } from "react-router-dom";
// import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify"
import useAxios from "./useAxios"
const useReservationCalls = () => {

    const navigate= useNavigate()
    const { axiosToken } = useAxios()
 
  
  const updateReservation = async (values) => {
   
    try {
        const { data } = await axiosToken.put(`/reservations/${values.id}/`,values,
        );
    //   toastSuccessNotify("The blog has been updated.")
     
    //   console.log(data);
      // console.log(id);
      
    } catch (error) {
    //   console.log(error.message);
      // console.log(id);
    
    //   toastErrorNotify("Update failed.")
    }
  };


  const sendReservation = async (values) => {

    try {
      const { data } = await axiosToken.post(`/reservations`, values, 
      );
    //   toastSuccessNotify("The blog has been created.")
      navigate("/my-reservations")
      // console.log(data);
    } catch (error) {
      // console.log(error.message);
    //   toastErrorNotify("Creating blog failed.")
    }
  };


  return { updateReservation, sendReservation };
};

export default useReservationCalls;
