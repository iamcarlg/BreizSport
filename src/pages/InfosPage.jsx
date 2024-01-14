import React from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";

export default function AboutPage() {
  // Vous devez définir handleSearch si vous avez l'intention de l'utiliser
  const handleSearch = (searchTerm) => {
    // Logique de recherche ici
  };

  return (
    <div>
      {/* HEADER */}
      <Header />
      <div style={{ marginTop: 15 }}>
        <SearchBar onSearch={handleSearch} />
      </div>

      <div style={{ width: '80%', height: 550, background: 'white', borderRadius: 10, position: 'relative', top:50, left:130, padding:80}}>
        <div style={{width: '100%', height: '100%', textAlign: 'center', color: 'black', fontSize: 20, fontFamily: 'Inter', fontWeight: '400', textTransform: 'capitalize', wordWrap: 'break-word'}}>
          <h2>Offre Produits</h2>
          
          <p>BreizhSport propose une large sélection d'articles sportifs pour répondre aux besoins de tous les sportifs, des débutants aux athlètes expérimentés. Notre catalogue comprend des équipements pour :</p>

        </div>
      </div>
    </div>
  );
}
