import React from "react";

export default function ContentPage() {
  return (
    <div style={styles.body}>

      {/* CONTENU PRINCIPAL */}
      <main style={styles.main}>
        <section style={styles.section}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e2/Logo_Breizh_Sport.png/1200px-Logo_Breizh_Sport.png" alt="Logo Breizh Sport" style={styles.img} />
          <h2 style={styles.h2}>Breizh Sport</h2>
          <p style={styles.p}>
            Breizh Sport est une entreprise spécialisée dans la vente de matériel de sport. Nous proposons une large gamme de produits, des chaussures aux vêtements, en passant par les accessoires.
          </p>
        </section>
        <section style={styles.section}>
          <h2 style={styles.h2}>Nouveautés</h2>
          <ul style={styles.ul}>
            <li style={styles.ulLi}>
              <a style={styles.ulLiA} href="#">Les dernières chaussures de running</a>
            </li>
            <li style={styles.ulLi}>
              <a style={styles.ulLiA} href="#">La nouvelle collection de vêtements de sport</a>
            </li>
            <li style={styles.ulLi}>
              <a style={styles.ulLiA} href="#">Les accessoires indispensables pour les sportifs</a>
            </li>
          </ul>
        </section>
      </main>

    </div>
  );
}
