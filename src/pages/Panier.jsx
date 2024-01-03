import React, { useState, useContext, useEffect } from "react";
import Header from "../components/Header";
import ContentPage from "./ContentPage";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";

export default function Panier() {

  const [data, setData] = useState([
    'Apple', 'Banana', 'Orange', 'Pineapple', 'Strawberry', 'Watermelon'
  ]);
  const [filteredData, setFilteredData] = useState([...data]);

  const handleSearch = (searchTerm) => {
    const filtered = data.filter(item =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
  };

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
        }
      }>
        <p></p>
        <div
        style={
            {
                display: 'flex',
                paddingTop: '10px',
                paddingLeft: '30px',
                paddingRight: '30px',
                background: '#00c',
            }
        }
        >
            <div 
            style={
                {
                    width: '20%',
                    background: '#cc0'
                }
            }
            >Image</div>
            <div 
            style={
                {
                    width: '70%',
                    background: '#7fb'
                }
            }
            >
                Description : Flatus flatus vile quicquid liberis caelibes esse aestimant inanes et coluntur flatus nec sine extra orbos orbos coluntur vero potest po
                Description : Flatus flatus vile quicquid liberis caelibes esse aestimant inanes et coluntur flatus nec sine extra orbos orbos coluntur vero potest po
            </div>
            <div 
            style={
                {
                    width: '10%',
                    background: '#fa0'
                }
            }
            >dd</div>
        </div>
      </div>
    
      {/* FOOTER */}
      <Footer />

    </div>
  );
}
