import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";

function ProductDetail() {
  const { id } = useParams();

  // This is a placeholder for the product details. You would fetch real data here.
  const productDetails = {
    id,
    name: "Sample Product",
    description: "This is a sample product description.",
    price: "100",
  };

  return (
    <div>
      <Header />
      <div>
        <h2>Product Details</h2>
        <p>ID: {productDetails.id}</p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '70% 30%',
            width: '70%',
            height: '50vh',
            margin: '0 auto',
            background: 'white',
            borderRadius: 10,
            padding: '20px',
          }}
        >
            {/* IMAGE */}
          <div style={{ borderRadius: '10px', overflow: 'hidden' }}>
            <div style={{ borderRadius: '10px', backgroundColor: 'gray', width: '98%', height:'100%'}}>IMAGE ICI</div>
          </div>

          {/* TEXTE DESCRIPTION A GAUCHE */}
          <div style={{ borderRadius: '10px', backgroundColor: 'rgba(0, 0, 0, 0.2)', width: '100%', height:'100%'}}>
            <h2>Description</h2>
            <p>{productDetails.description}</p>
            {/* CTA en bas de la description */}
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            <div style={{paddingTop:"30px", borderRadius: '10px', width: '100%', height: '30%', background: '#BCD0D8', position: 'relative', top: 0, right: 0}}>
                <p>Prix: {productDetails.price}€</p>
                <div style={{width: '100%', height: '100%', position: 'relative', top: 41, left:120}}>
                    <div style={{width: 142, height: 28, left: 0, top: 0, position: 'absolute', background: '#2D9DB6', borderRadius: 10}} />
                    <div style={{width: 122.19, left: 9.91, top: 2, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 20, fontFamily: 'Inter', fontWeight: '400', textTransform: 'capitalize', wordWrap: 'break-word'}}>Ajouter</div>
                </div>

            </div>
          </div>


        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
