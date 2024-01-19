import Cookies from 'js-cookie';

export function hasAuthenticated () {
    // si l'utilisateur est connecté on retourne true
    if (Cookies.get('token') != null){
        return true;
    }
    // sinon on retourne false
    else{
        return false;
    }
}
