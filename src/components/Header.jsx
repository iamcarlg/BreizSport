import React from "react";

export default function Header() {
    return (
      <div style={styles.body}>

        {/* HEADER - NAVBAR */}
        <header style={styles.header}>
          <h1 style={styles.h1}>Page Accueil</h1>
          <nav style={styles.nav}>
            <a href="#">Accueil</a>
            <a href="#">Nouveautés</a>
            <a href="#">Informations</a>
            <a href="#">S'inscrire</a>
            <a href="#">Se connecter</a>
          </nav>
        </header>
      </div>
    );
}
