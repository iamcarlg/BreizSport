export function hasAuthenticated () {
    // si l'utilisateur est connecté on retourne true
    if (localStorage.getItem('token')) {
        return true;
    }
    // sinon on retourne false
    else{
        return false;
    }
}
