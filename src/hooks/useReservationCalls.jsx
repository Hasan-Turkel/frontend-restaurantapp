
import { useNavigate } from "react-router-dom";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify"
import useAxios from "./useAxios"
const useReservationCalls = () => {

    const navigate= useNavigate()
    const { axiosToken } = useAxios()
 
  
  const updateReservation = async (values) => {
   
    try {
        const { data } = await axiosToken.put(`/reservations/${values.id}/`,values,
        );
      toastSuccessNotify("The reservation has been updated.")
     
      console.log(values);
      // console.log(id);
      
    } catch (error) {
    //   console.log(error.message);
      // console.log(id);
    
      toastErrorNotify(error.response.data.messsage)
    }
  };

  const cancelReservation = async (id) => {
   
    try {
        const { data } = await axiosToken.put(`/reservations/${id}/`,{situation:"canceled"},
        );
      toastSuccessNotify("The reservation has been canceled.")
     
      // console.log(data);
      // console.log(id);
      
    } catch (error) {
    //   console.log(error.message);
      // console.log(id);
    
      toastErrorNotify(error.response.data.messsage)
    }
  };


  const sendReservation = async (values) => {

    try {
      const { data } = await axiosToken.post(`/reservations`, values, 
      );
      toastSuccessNotify("The reservation has been created.")
      navigate("/my-reservations")
      // console.log(data);
    } catch (error) {
      // console.log(error.message);
      toastErrorNotify(error.response.data.messsage)
    }
  };


  return { updateReservation, sendReservation, cancelReservation };
};

export default useReservationCalls;
