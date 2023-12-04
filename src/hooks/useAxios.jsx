
import axios from "axios"

const useAxios = () => {
  

  const axiosSimple = axios.create({
    baseURL: `${import.meta.env.VITE_BASE_URL}`
  })

  return { axiosSimple}
}

export default useAxios