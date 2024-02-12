import React, { useState, useContext, useEffect } from "react";
import Header from "../components/Header";
import ContentPage from "./ContentPage";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import CardPanier from "../components/CardPanier";
import dataApi from "../services/dataApi";

export default function Panier() {

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


  const [posts, setPosts] = useState([]);

  useEffect(() => {
    dataApi.getAllPosts().then((response) => {
      setPosts(response.data.result);
    })
  }, []);


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
        <CardPanier orders={posts} />
      </div>

      {/* FOOTER */}
      <Footer />

    </div>
  );
}
