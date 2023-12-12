import React from "react";
import Header from "../components/Header";
import ContentPage from "./ContentPage";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>

      {/* HEADER */}
      <Header />

      {/* CONTENU PRINCIPAL */}
      <ContentPage />

      {/* FOOTER */}
      <Footer />

    </div>
  );
}
