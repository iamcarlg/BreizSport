import React, { useState, useContext, useEffect } from 'react'
import { hasAuthenticated } from '../services/authApi'
import dataApi from '../services/dataApi'
import Header from '../components/Header';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';


export default function LoginPage() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(hasAuthenticated);
  const navigate = useNavigate();

  const params = {
    "email":email, 
    "password":password
  }

  const handleSubmit = async (event) => {

    event.preventDefault();
    
    console.log(params)
    dataApi.login(params)
    .then((response) => {
      console.log(response.data);
      if (response.status === 200) {
        const token = response.data.access_token;
        Cookies.set("token", token);
        setIsAuthenticated(true);
        // refresh la page
        navigate('/');
      }
    })
    .catch(error => {
      console.log("ERROR", error);
      setError("Le nom d'utilisateur ou le mot de passe n'est pas correct !");
    });
  };
  
  return (
    <div>
            {/* HEADER */}
            <Header />

          <div className="generalContent">
            <h1 className="text-center">Se connecter</h1>

            <center><img src="icon_hamburger.svg"  className="mx-3 my-4" /></center>


            <form onSubmit={handleSubmit} className="formContent" method="post">
            {error && <p className="text-danger">{error}</p>}
              <div className="form-group">
                <p htmlFor="email">Email</p>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  value={email}
                  onChange={event => setEmail(event.target.value)}
                />
              </div>
              <div className="form-group">
                <p htmlFor="password">Mot de passe</p>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  value={password}
                  onChange={event => setPassword(event.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-primary" >
                Se connecter
              </button>
            </form>
          </div>
    </div>
  )
}