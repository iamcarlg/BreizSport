import React, { useState, useContext, useEffect } from "react";
import Header from "../components/Header";
import ContentPage from "./ContentPage";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";

export default function Home() {

  return (
    <div>

      {/* HEADER */}
      <Header />
      <div style={
        {
          marginTop:15,
        }
      }>
      </div>
      {/* CONTENU PRINCIPAL */}
      <ContentPage />
    
      {/* FOOTER */}
      <Footer />

    </div>
  );
}
