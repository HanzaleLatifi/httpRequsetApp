import axios from "axios";

axios.defaults.baseURL = 'http://localhost:3001';

//response & requset global
axios.interceptors.response.use((res)=>{
    console.log(res)
    return res;
},(error)=>{
    return error
})

const http={
    get:axios.get ,
    post:axios.post ,
    delete:axios.delete ,
    
}
export default http;