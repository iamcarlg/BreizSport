import React, { useState } from "react";
import Header from "../components/Header";
import dataApi from "../services/dataApi";

export default function PasswordForm() {
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e, setPassword) => {
    setPassword(e.target.value);
    // Vérifier si les mots de passe correspondent
    if (password2 !== "" && e.target.value !== password2) {
      setPasswordsMatch(false);
    } else {
      setPasswordsMatch(true);
    }
  };

  const params = {
    "username" : email,
    "password" : password1
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Vérifier si les mots de passe correspondent lors de la soumission du formulaire
    if (password1 === password2) {
      console.log("Les mots de passe correspondent :", password1);
      console.log("Email :", email);
      // Effectuez ici l'action de soumission du formulaire
      setFormSubmitted(true); // Mettre à jour l'état pour indiquer que le formulaire a été soumis

      dataApi.signup(params)
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
      
    } else {
      console.log("Les mots de passe ne correspondent pas.");
      setPasswordsMatch(false); // Mettre à jour l'état pour afficher le message d'erreur
    }
  };

  return (
    <div>
      {/* HEADER */}
      <Header />
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email :</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div>
          <label>Mot de passe :</label>
          <input
            type="password"
            value={password1}
            onChange={(e) => handlePasswordChange(e, setPassword1)}
          />
        </div>
        <div>
          <label>Confirmer le mot de passe :</label>
          <input
            type="password"
            value={password2}
            onChange={(e) => handlePasswordChange(e, setPassword2)}
          />
        </div>
        {!passwordsMatch && (
          <p style={{ color: "red" }}></p>
        )}
        {formSubmitted && <p style={{ color: "green" }}>Formulaire soumis avec succès !</p>}
        <button type="submit">Soumettre</button>
      </form>
    </div>
  );
}
