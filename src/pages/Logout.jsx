import React from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import dataApi from '../services/dataApi'
import { useEffect, useState } from 'react';
import { hasAuthenticated } from '../services/authApi'

export default function Logout() {
    const [isAuthenticated, setIsAuthenticated] = useState(hasAuthenticated);
    const navigate = useNavigate();
    useEffect(() => {
        dataApi.logout()
        .then((response) => {
          if (response.status === 200) {
            const token = response.data.access_token;
            // remove token
            Cookies.remove("token");
            setIsAuthenticated(false);
            // refresh la page
            navigate('/');
          }
        })
        .catch((error) => {
            // Traitement des erreurs
            console.error("Une erreur s'est produite lors de la déconnexion :", error);
        });
    }, []);

  return (
    <div>
      
    </div>
  )
}
