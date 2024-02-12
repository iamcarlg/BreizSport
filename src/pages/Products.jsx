import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";  // Import Link from react-router-dom
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import dataApi from "../services/dataApi";

const Product = ({ price, index, name, id }) => {
  const [posts, setPosts] = useState("");


  const columnIndex = index % 4;
  const rowIndex = Math.floor(index / 4);
  const marginLeft = columnIndex > 0 ? 20 : 0;
  const marginTop = rowIndex > 0 ? 20 : 0;
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);


  const handleAddArticle = (id) => {
    console.log(cart)
    const newCart = [...cart, id];
    setCart(newCart);

    localStorage.setItem('addArticle', JSON.stringify(newCart.length));
    localStorage.setItem('cart', JSON.stringify(newCart));
  }
  

  return (
    // <Link to={`/product/${id}`} key={id}>  {/* Use Link to wrap the product */}
      <div style={{ 
        width: 259, 
        height: 273, 
        position: 'absolute', 
        top: 230 + (300 + 20) * rowIndex + marginTop,
        left: 190 + (350 + 20) * columnIndex, 
        marginLeft,
      }}>
        <div style={{ width: 259, height: 273, position: 'absolute', background: 'white', borderRadius: 10 }}>
          {name}
          <div style={{ width: 259, height: 70, position: 'absolute', top: 205, background: '#D9D9D9', borderBottomLeftRadius: 10, borderTopRightRadius: 10 }} />
          <div style={{ left: 201, top: 205, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 24, fontFamily: 'Inter', fontWeight: '400', textTransform: 'capitalize', wordWrap: 'break-word' }}>{price}€</div>
        </div>
        <div style={{ width: 86, height: 28, left: 86, top: 238, position: 'absolute' }}>
          <div style={{ width: 86, height: 28, position: 'absolute', background: '#2D9DB6', borderRadius: 10 }} />
          <div style={{ width: 74, left: 6, top: 2, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 20, fontFamily: 'Inter', fontWeight: '400', textTransform: 'capitalize', wordWrap: 'break-word' 
          , cursor: 'pointer' }}            
          onClick={() => {
            handleAddArticle(id)
          }}
          > 
            Ajouter 
            </div>
        </div>
      </div>
    // </Link>
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
    setCurrentPage(1);
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
  
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    dataApi.getAllPosts().then((response) => {
      setPosts(response.data.result);
    })
  }, []);


  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleProducts = filteredData.slice(startIndex, endIndex);
  console.log(posts)
  return (
    <div>
      {/* HEADER */}
      <Header />
      <div style={{ marginTop: 15 }}>
        <SearchBar onSearch={handleSearch} />
      </div>
      {/* TOUS LES PRODUITS */}
      {posts.map((product, index) => (
        <>
        
        <Product key={startIndex + index} price={product.forms_id} index={startIndex + index} name={product.projects_description} id={product.projects_id}  />
        </>
      ))}
      {/* PAGINATION */}
      <div style={{ marginTop: '20px' }}>
        {renderPagination()}
      </div>
    </div>
  );
}
