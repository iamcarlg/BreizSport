import React, { useState, useContext, useEffect } from "react";
import Header from "../components/Header";
import ContentPage from "./ContentPage";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import CardPayment from "../components/CardPayment";
import CardProfile from "../components/CardProfile";

export default function Profile() {

  const [data, setData] = useState([
    'Apple', 'Banana', 'Orange', 'Pineapple', 'Strawberry', 'Watermelon'
  ]);

  const [filteredData, setFilteredData] = useState([...data]);
  
  // Code SearchBar 
  const handleSearch = (searchTerm) => {
    const filtered = data.filter(item =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
  };


  // Code Modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      {/* HEADER */}
      <Header />
      
      <div style={
        {
          marginTop:15,
        }
      }>
        <SearchBar  onSearch={handleSearch}/>

      </div>
       
      {/* CONTENU PRINCIPAL */}
      <div 
        style={
          {
              width: '80%',
              minHeight: '500px',
              height: 'auto',
              background: '#FFF',
              margin: '0 auto',
              borderRadius: '10px',
              marginBottom: '25px',
              padding: '15px',
          }
        } 
      >
        {/* Card Panier */}
        <CardProfile />
      </div>

      {/* FOOTER */}
      <Footer />

    </div>
  );
}
