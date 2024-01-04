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
              padding: '15px',
          }
        } 
      >
        {/*  Card */}
        <div
          style={
              {
                  display: 'flex',
                  paddingTop: '10px',
                  paddingLeft: '10px',
                  marginBottom: '10px',
                  background: '#dbdbdb',
                  
                  color: '#000',
              }
          }
        >
            <div 
            style={
                {
                    width: '20%',
                    background: '#fff',
                    marginBottom: '10px',
                    borderRadius: '10px',
                    display: 'flex',
                    justifyContent: 'center',
                }
            }
            >
            <img src="vite.svg" alt="" width={80} height={80} style={{
                margin: 'auto',
            }} />
            </div>
            <div 
            style={
                {
                    width: '70%',
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
                    marginTop: '-10px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                }
            }
            >
              <span
              style={
                {
                  display: 'flex',
                  justifyContent: 'right',
                  padding: '5px',
                  
                }
              }
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                  <path d="M25 2.63531L22.3647 0L12.5 9.86469L2.63531 0L0 2.63531L9.86469 12.5L0 22.3647L2.63531 25L12.5 15.1353L22.3647 25L25 22.3647L15.1353 12.5L25 2.63531Z" fill="#A3ADB5"/>
                </svg>
              </span>

              <p style={{
                fontSize: "20px",
                fontWeight: "550",
                textTransform: "capitalize",
              }}>1 QTE</p>

            </div>
        </div>
      
        {/*  Button valide panier */}
        <div>
          <a href="/payment">
            <button 
              style={{
                borderRadius: '10px',
                background: '#2D9DB6',
                width: '30%',
              }}
              >
              Valider Panier
            </button>
            
          </a>
        </div>
      
      </div>
    
      {/* FOOTER */}
      <Footer />

    </div>
  );
}
