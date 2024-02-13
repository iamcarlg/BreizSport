import React from "react";
import sportImage from "../assets/img/sport.jpg";

export default function ContentPage() {
  return (
    <div>
      {/* CONTENU PRINCIPAL */}
      <div style={{ width: '100%', height: '100%', position: 'relative' }}>
        {/* Utilisez la propriété backgroundImage pour définir l'image de fond */}
        <div style={{ 
          width: '98%', 
          height: 450, 
          left: 20, 
          top: 0, 
          position: 'absolute', 
          backgroundImage: `url(${sportImage})`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          borderRadius: 10 
        }} />
      </div>
    </div>
  );
}
