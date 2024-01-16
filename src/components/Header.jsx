import React from "react";
import { NavLink, useNavigate } from "react-router-dom"
import '../styles/components/header.scss';
import {  Nav, Image, Button,ListGroup, Container } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'
import img from '../../public/img.svg'
import { hasAuthenticated } from '../services/authApi'


export default function Header() {
  let isAuthenticated = hasAuthenticated();
 
  return (
    <>
      {/* HEADER - NAVBAR */}
      <header>
        <Container fluid className='backgroundnavbar'>
          <Navbar variant="light" >
            <Navbar.Brand  className=''>
              <NavLink to="/">
                <p>s</p>
                <Image src="img.svg" width="200px"></Image>
                
              </NavLink>
            </Navbar.Brand>

            <Nav>      
                <NavLink to="/" className='nav-link-item'>Accueil</NavLink>
                <NavLink to="/products" className='nav-link-item'>Produits</NavLink>
                <NavLink to="/information" className='nav-link-item'>Informations</NavLink>
                <NavLink to="/about" className='nav-link-item'>À Propos</NavLink>
            </Nav>     
            
            {/* Items right  auth */}
            {isAuthenticated && (
              <Nav>
                <ListGroup className="nav-right">
                  <NavLink to="/panier">
                    <svg xmlns="http://www.w3.org/2000/svg" width="44" height="40" viewBox="0 0 54 50" fill="none">
                      <g clip-path="url(#clip0_720_229)">
                        <path d="M47.25 12.5H40.5C40.5 9.18479 39.0777 6.00537 36.5459 3.66116C34.0142 1.31696 30.5804 0 27 0C23.4196 0 19.9858 1.31696 17.4541 3.66116C14.9223 6.00537 13.5 9.18479 13.5 12.5H6.75C4.95979 12.5 3.2429 13.1585 1.97703 14.3306C0.711159 15.5027 0 17.0924 0 18.75L0 39.5833C0.00357268 42.345 1.18998 44.9926 3.29899 46.9454C5.40801 48.8982 8.26741 49.9967 11.25 50H42.75C45.7326 49.9967 48.592 48.8982 50.701 46.9454C52.81 44.9926 53.9964 42.345 54 39.5833V18.75C54 17.0924 53.2888 15.5027 52.023 14.3306C50.7571 13.1585 49.0402 12.5 47.25 12.5ZM27 4.16667C29.3869 4.16667 31.6761 5.04464 33.364 6.60744C35.0518 8.17025 36 10.2899 36 12.5H18C18 10.2899 18.9482 8.17025 20.636 6.60744C22.3239 5.04464 24.6131 4.16667 27 4.16667ZM49.5 39.5833C49.5 41.2409 48.7888 42.8306 47.523 44.0028C46.2571 45.1749 44.5402 45.8333 42.75 45.8333H11.25C9.45979 45.8333 7.7429 45.1749 6.47703 44.0028C5.21116 42.8306 4.5 41.2409 4.5 39.5833V18.75C4.5 18.1975 4.73705 17.6676 5.15901 17.2769C5.58097 16.8862 6.15326 16.6667 6.75 16.6667H13.5V20.8333C13.5 21.3859 13.7371 21.9158 14.159 22.3065C14.581 22.6972 15.1533 22.9167 15.75 22.9167C16.3467 22.9167 16.919 22.6972 17.341 22.3065C17.7629 21.9158 18 21.3859 18 20.8333V16.6667H36V20.8333C36 21.3859 36.2371 21.9158 36.659 22.3065C37.081 22.6972 37.6533 22.9167 38.25 22.9167C38.8467 22.9167 39.419 22.6972 39.841 22.3065C40.2629 21.9158 40.5 21.3859 40.5 20.8333V16.6667H47.25C47.8467 16.6667 48.419 16.8862 48.841 17.2769C49.2629 17.6676 49.5 18.1975 49.5 18.75V39.5833Z" fill="#374957"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_720_229">
                          <rect width="54" height="50" fill="white"/>
                        </clipPath>
                      </defs>
                    </svg>
                  </NavLink>
                  <NavLink to="/profile">
                    <svg xmlns="http://www.w3.org/2000/svg" width="44" height="40" viewBox="0 0 54 54" fill="none">
                      <g clip-path="url(#clip0_720_234)">
                        <path d="M27 26.9998C29.67 26.9998 32.2801 26.208 34.5002 24.7246C36.7203 23.2412 38.4506 21.1328 39.4724 18.666C40.4942 16.1992 40.7615 13.4848 40.2406 10.866C39.7197 8.2473 38.434 5.84183 36.5459 3.95382C34.6579 2.06581 32.2525 0.780061 29.6337 0.259161C27.015 -0.26174 24.3006 0.00560522 21.8338 1.02739C19.367 2.04917 17.2586 3.7795 15.7752 5.99956C14.2918 8.21963 13.5 10.8297 13.5 13.4998C13.5036 17.0791 14.927 20.5108 17.458 23.0418C19.989 25.5727 23.4207 26.9962 27 26.9998ZM27 4.49976C28.78 4.49976 30.5201 5.0276 32.0001 6.01654C33.4802 7.00547 34.6337 8.41108 35.3149 10.0556C35.9961 11.7001 36.1743 13.5097 35.8271 15.2556C35.4798 17.0014 34.6226 18.6051 33.364 19.8637C32.1053 21.1224 30.5016 21.9796 28.7558 22.3268C27.01 22.6741 25.2004 22.4959 23.5558 21.8147C21.9113 21.1335 20.5057 19.9799 19.5168 18.4999C18.5278 17.0199 18 15.2798 18 13.4998C18 11.1128 18.9482 8.82363 20.636 7.1358C22.3239 5.44797 24.6131 4.49976 27 4.49976Z" fill="#374957"/>
                        <path d="M27 31.5C21.6312 31.506 16.484 33.6413 12.6877 37.4377C8.89134 41.234 6.75596 46.3812 6.75 51.75C6.75 52.3467 6.98705 52.919 7.40901 53.341C7.83097 53.7629 8.40326 54 9 54C9.59674 54 10.169 53.7629 10.591 53.341C11.0129 52.919 11.25 52.3467 11.25 51.75C11.25 47.5728 12.9094 43.5668 15.8631 40.6131C18.8168 37.6594 22.8228 36 27 36C31.1772 36 35.1832 37.6594 38.1369 40.6131C41.0906 43.5668 42.75 47.5728 42.75 51.75C42.75 52.3467 42.9871 52.919 43.409 53.341C43.831 53.7629 44.4033 54 45 54C45.5967 54 46.169 53.7629 46.591 53.341C47.0129 52.919 47.25 52.3467 47.25 51.75C47.244 46.3812 45.1087 41.234 41.3123 37.4377C37.516 33.6413 32.3688 31.506 27 31.5Z" fill="#374957"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_720_234">
                          <rect width="54" height="54" fill="white"/>
                        </clipPath>
                      </defs>
                    </svg>
                  </NavLink>
                </ListGroup>
              </Nav>
            ) || (
              <Nav>
                <ListGroup className="nav-right">
                  <NavLink to="/signup">
                    <Button className="nav-btn-item">S'inscrire</Button>
                  </NavLink>
                  <NavLink to="/signin">
                    <Button className="nav-btn-item">Se connecter</Button>
                  </NavLink>
                </ListGroup>
              </Nav>
            )
            } 
          </Navbar>

        </Container>
      </header>
    </>
  );
}
