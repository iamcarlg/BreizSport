import React, { Component } from "react";

export default function Footer() {
  const styles = {};
  
  return (
      <div style={styles.body}>

        {/* FOOTER */}
        <footer 
        style={
          {
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',            
          }
        }>
          <a href="#">A propos</a>
          <a href="#">Top produits</a>
          <a href="#">Informations</a>
        </footer>

      </div>
    );
}
