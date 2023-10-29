import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const baseURL='http://192.168.0.19:8080/api';

const motoApi=axios.create({
    baseURL
})
motoApi.interceptors.request.use(
    async(config)=>{
        const token=await AsyncStorage.getItem('token');
        if(token){
            config.headers['X-token']=token
        }
        return config;
    }
)

export default motoApi;