import React, { Component } from "react";
import imgFoot from "../assets/img/imgFoot.jpg";
import imgFoot2 from "../assets/img/imgFoot2.jpg";
import imgFoot3 from "../assets/img/imgFoot3.jpg";

export default function Footer() {
  const styles = {};
  
  return (
      <div style={{
        
      }}>

        {/* FOOTER */}

        <div style={{width: '100%', height: '100%', position: 'relative', marginBottom: '20px'}}>
          <div style={{width: '30%', height: 288, left: 15, top: 500, position: 'absolute', background: `url(${imgFoot})`, borderRadius: 10}} />
          <div style={{width: '30%', height: 288, left: '35%', top: 500, position: 'absolute', background: `url(${imgFoot2})`, borderRadius: 10}} />
          <div style={{width: '30%', height: 288, left: '69%', top: 500, position: 'absolute', background: `url(${imgFoot3})`, borderRadius: 10}} />
        </div>


      </div>
    );
}
