import axios from 'axios'

// const USER_BASE_REST_API_URL = "url";
const REST_API_URL = "http://localhost:8000/api/";

// define the default configuration for axios
axios.defaults.headers.get['Accept'] = 'application/json';


class dataApi{

// REQUESTS FOR AUTHENTIFICATION
login(params){      
    return axios.post(REST_API_URL + 'login', params)
}   


// REQUESTS TEST DATA POSTS    
getAllPosts(){
    return axios.get(REST_API_URL + 'posts')
}
    
}



export default new dataApi();
