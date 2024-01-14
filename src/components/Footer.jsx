import React, { Component } from "react";

export default function Footer() {
  const styles = {};
  
  return (
      <div style={{
        
      }}>

        {/* FOOTER */}

        <div style={{width: '100%', height: '100%', position: 'relative'}}>
          <div style={{width: '30%', height: 288, left: 15, top: 500, position: 'absolute', background: 'rgba(64, 60, 60, 0.80)', borderRadius: 10}} />
          <div style={{width: '30%', height: 288, left: '35%', top: 500, position: 'absolute', background: 'rgba(64, 60, 60, 0.80)', borderRadius: 10}} />
          <div style={{width: '30%', height: 288, left: '69%', top: 500, position: 'absolute', background: 'rgba(64, 60, 60, 0.80)', borderRadius: 10}} />
        </div>


      </div>
    );
}
