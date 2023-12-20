import React from "react";

export default function ContentPage() {
  return (
    <div >

      {/* CONTENU PRINCIPAL */}
      <main >
        <section>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e2/Logo_Breizh_Sport.png/1200px-Logo_Breizh_Sport.png" alt="Logo Breizh Sport"  />
          <h2 >Breizh Sport</h2>
          <p >
            Breizh Sport est une entreprise spécialisée dans la vente de matériel de sport. Nous proposons une large gamme de produits, des chaussures aux vêtements, en passant par les accessoires.
          </p>
        </section>
        <section >
          <h2 >Nouveautés</h2>
          <ul >
            <li >
              <a  href="#">Les dernières chaussures de running</a>
            </li>
            <li >
              <a  href="#">La nouvelle collection de vêtements de sport</a>
            </li>
            <li >
              <a  href="#">Les accessoires indispensables pour les sportifs</a>
            </li>
          </ul>
        </section>
      </main>

    </div>
  );
}
