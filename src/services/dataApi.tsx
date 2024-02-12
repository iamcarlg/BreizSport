import axios from 'axios';
import Cookies from 'js-cookie';
// const USER_BASE_REST_API_URL = "url";
const REST_API_URL = "http://localhost:8000/api/";


// define the default configuration for axios
axios.defaults.headers.get['Accept'] = 'application/json';
// Récupération du token dans les cookies
const token = Cookies.get('token');

const config = {
    headers: { Authorization: `Bearer ${token}` }
};

class dataApi{

// REQUESTS FOR AUTHENTIFICATION
login(params){      
    return axios.post(REST_API_URL + 'login', params)
}   

logout(){
    return axios.get(REST_API_URL + 'logout',config)
}

// REQUESTS TEST DATA POSTS    
getAllPosts(){
    return axios.get(REST_API_URL + 'posts')
}
    
}



export default new dataApi();
