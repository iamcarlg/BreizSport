import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import dataApi from '../services/dataApi';
import Header from '../components/Header';

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordAgain, setPasswordAgain] = useState('');
  const [error, setError] = useState(null);

  const Navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const params = {
      email: email,
      password: password,
    };

    try {
      const response = await dataApi.signup(params);
      if (response.status === 201) {
        // Inscription réussie
        // Rediriger vers la page de connexion ou toute autre page appropriée
        history.push('/login');
      }
    } catch (error) {
      setError("Une erreur s'est produite lors de l'inscription. Veuillez réessayer.");
    }
  };

  return (
    <div>
      {/* HEADER */}
      <Header />

      <div className="generalContent">
        <h1 className="text-center">S'inscrire</h1>

        <center>
          <img src="icon_hamburger.svg" className="mx-3 my-4" alt="Hamburger Icon" />
        </center>

        <form onSubmit={handleSubmit} className="formContent" method="post">
          {error && <p className="text-danger">{error}</p>}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              className="form-control"
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Mot de passe</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            S'inscrire
          </button>
        </form>
      </div>
    </div>
  );
}
