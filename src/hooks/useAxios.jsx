import { useSelector } from "react-redux";
import axios from "axios"

const useAxios = () => {

  const {token} = useSelector((state)=>state.auth)
  

  const axiosSimple = axios.create({
    baseURL: `${import.meta.env.VITE_BASE_URL}`
  })
  const axiosToken = axios.create({
    baseURL: `${import.meta.env.VITE_BASE_URL}`,
    headers: { Authorization: `Token ${token}` },
  })

  return { axiosSimple, axiosToken}
}

export default useAxios
