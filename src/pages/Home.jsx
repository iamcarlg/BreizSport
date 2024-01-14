import React, { useState, useContext, useEffect } from "react";
import Header from "../components/Header";
import ContentPage from "./ContentPage";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";

export default function Home() {

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
        {/* <ul>
          {filteredData.map((item, index) => (
            <li key={index}>{item}</li>
            ))}
        </ul> */}
      </div>
      {/* CONTENU PRINCIPAL */}
      <ContentPage />
    
      {/* FOOTER */}
      <Footer />

    </div>
  );
}
