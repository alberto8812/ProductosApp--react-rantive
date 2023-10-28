import axios from "axios";

const baseURL='http://192.168.0.19:8080/api';

const motoApi=axios.create({
    baseURL
})

export default motoApi;