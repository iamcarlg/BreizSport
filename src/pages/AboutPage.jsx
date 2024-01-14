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
        <div style={{ width: '100%', height: '100%', textAlign: 'center', color: 'black', fontSize: 20, fontFamily: 'Inter', fontWeight: '400', textTransform: 'capitalize', wordWrap: 'break-word' }}>
          BreizhSport est bien plus qu'un simple site d'e-commerce, c'est un portail dynamique dédié aux passionnés de sport en Bretagne et au-delà. Fondé sur la passion pour le sport, BreizhSport offre une vaste gamme de produits et d'équipements pour une multitude de disciplines sportives.
          <br /><br /><br /><br />
          Mission<br />
          Notre mission chez BreizhSport est de faciliter l'accès aux équipements sportifs de qualité, d'encourager l'activité physique et de soutenir les sportifs dans leur quête de performance.
        </div>
      </div>
    </div>
  );
}
