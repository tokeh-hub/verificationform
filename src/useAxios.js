import axios from 'axios'



const baseURL = 'https://puffpazz.herokuapp.com/'


const useAxios = () => {
    // const {authToken, setUser, setAuthToken} = useGlobalContext()
     
    const axiosInstance = axios.create({
        baseURL: baseURL,
      });
      
      axiosInstance.interceptors.request.use(function (config) {
        // Do something before request is sent
        let token = localStorage.getItem("auth");
        config.headers["Authorization"] = "Bearer " + token;
        return config;
      });
    
    return axiosInstance
}


export default useAxios;