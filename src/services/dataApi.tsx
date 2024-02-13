import axios from 'axios';
import Cookies from 'js-cookie';
// // const USER_BASE_REST_API_URL = "url";
// const REST_API_URL = "http://localhost:8000/api/";
const REST_API_URL = "http://10.192.129.121/bs_api/public/index.php/"

// define the default configuration for axios
axios.defaults.headers.get['Accept'] = 'application/json';
// Récupération du token dans les cookies
const token = Cookies.get('token');

const config = {
    headers: { Authorization: `Bearer ${token}` }
};

class dataApi{

    // REQUESTS FOR AUTHENTIFICATION
    signup(params){      
        return axios.post(REST_API_URL + 'register', params)
    }  

    login(params){      
        return axios.post(REST_API_URL + 'login-authentication', params)
    }   

    logout(){
        return axios.get(REST_API_URL + 'logout',config)
    }

    // REQUESTS TEST DATA POSTS
    getAllProducts(){
        return axios.get(REST_API_URL + 'get-product')
    }
    

    // Validation d'une commande
    validateOrder(params){
        return axios.post(REST_API_URL + 'post-command', params)
    }

}



export default new dataApi();
