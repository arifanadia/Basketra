import { HOST } from "@/utils/constant";
import axios from "axios";


const axiosPublic = axios.create({
    baseURL: HOST
})

const useAxios = () => {
    return axiosPublic
}
export default useAxios;