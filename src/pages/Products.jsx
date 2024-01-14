import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";

const Product = ({ price, index }) => {
  const columnIndex = index % 4;
  const rowIndex = Math.floor(index / 4);
  const marginLeft = columnIndex > 0 ? 20 : 0;
  const marginTop = rowIndex > 0 ? 20 : 0;

  return (
    <div key={index} style={{ 
      width: 259, 
      height: 273, 
      position: 'absolute', 
      top: 230 + (300 + 20) * rowIndex + marginTop,
      left: 190 + (350 + 20) * columnIndex, 
      marginLeft,
    }}>
      <div style={{ width: 259, height: 273, position: 'absolute', background: 'white', borderRadius: 10 }}>
        <div style={{ width: 259, height: 70, position: 'absolute', top: 205, background: '#D9D9D9', borderBottomLeftRadius: 10, borderTopRightRadius: 10 }} />
        <div style={{ left: 201, top: 205, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 24, fontFamily: 'Inter', fontWeight: '400', textTransform: 'capitalize', wordWrap: 'break-word' }}>{price}€</div>
      </div>
      <div style={{ width: 86, height: 28, left: 86, top: 238, position: 'absolute' }}>
        <div style={{ width: 86, height: 28, position: 'absolute', background: '#2D9DB6', borderRadius: 10 }} />
        <div style={{ width: 74, left: 6, top: 2, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 20, fontFamily: 'Inter', fontWeight: '400', textTransform: 'capitalize', wordWrap: 'break-word' }}>Ajouter</div>
      </div>
    </div>
  );
};

export default function ProductsPage() {
  const [data, setData] = useState(['Apple', 'Banana', 'Orange', 'Pineapple', 'Strawberry', 'Watermelon', 'Mango', 'Grapes']);
  const [filteredData, setFilteredData] = useState([...data]);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 8;
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handleSearch = (searchTerm) => {
    const filtered = data.filter(item => item.toLowerCase().includes(searchTerm.toLowerCase()));
    setFilteredData(filtered);
    setCurrentPage(1); // Reset to the first page when the search term changes
  };

  const handleClickPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderPagination = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <span 
          key={i} 
          onClick={() => handleClickPage(i)} 
          style={{ cursor: 'pointer', marginRight: '5px', textDecoration: currentPage === i ? 'underline' : 'none' }}
        >
          {i}
        </span>
      );
    }
    return pages;
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleProducts = filteredData.slice(startIndex, endIndex);

  return (
    <div>
      {/* HEADER */}
      <Header />
      <div style={{ marginTop: 15 }}>
        <SearchBar onSearch={handleSearch} />
      </div>
      {/* TOUS LES PRODUITS */}
      {visibleProducts.map((product, index) => (
        <Product key={startIndex + index} price="100" index={startIndex + index} />
      ))}
      {/* PAGINATION */}
      <div style={{ marginTop: '20px' }}>
        {renderPagination()}
      </div>
    </div>
  );
}
