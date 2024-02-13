import React, {useState, useEffect }from 'react';
import dataApi from '../services/dataApi';
import { useNavigate } from 'react-router-dom';
import { Button,Modal } from 'react-bootstrap';
import Cookies from 'js-cookie';
function CardPayment() {


    // heure actuelle 2023-02-09 12:25:31
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    const dateNow = year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
 
    // récupere le user dans le localstorage
    const user = localStorage.getItem('user');
   
    const [menus, setMenus] = useState([]);
    const [value, setValue] = useState("");
    const [value2, setValue2] = useState("");
    const [value3, setValue3] = useState("");
    const [value4, setValue4] = useState("");
    const [value5, setValue5] = useState("");
    const [showDiv1, setShowDiv1] = useState("col");
    const [showDiv2, setShowDiv2] = useState("none");
    const [showDiv3, setShowDiv3] = useState("none");
    const [ValidateAddress, setValidateAddress] = useState("");
    const [ValidateCpl, setValidateCpl] = useState("");
    const [ValidateAddress2, setValidateAddress2] = useState("");
    const [ValidateCity, setValidateCity] = useState("");
    const [ValidateCp, setValidateCp] = useState("");
    const [commentaire, setCommentaire] = useState("");
    const [VerifySend, setVerifySend] = useState("");
    const navigate = useNavigate();
    let totalPrice = 0;
   
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [showA, setShowA] = useState(false);
    const toggleShowA = () => setShowA(!showA);

    const userId = Cookies.get("userId");
    const email = Cookies.get("username");
    const listProductIds = localStorage.getItem("cart");    

    // covertir en array
    const listProductIdsArray = listProductIds.split(",");

    // Supprimer les crochets et les guillemets
    const resultArray = listProductIds.replace(/[\[\]"]/g, '').split(',');

console.log(resultArray)
    const params = {
        "userId":userId, 
        "email":email,
        "rib":"123456789",
        "cardNumber":"123456789",
        "expirationCardDate":"12/24",
        "price":"100",
        "listProductId":resultArray,

      }
    const handleClickPrev = () => {
        // Vérifie si les champs sont remplis
        if(showDiv1 === "col"){
            navigate(-1)
        }
        else{
            if(showDiv2 === "col"){    
                setShowDiv2("none");
                setShowDiv1("col");
            }
            if(showDiv3 === "col"){
                setShowDiv2("col");
                setShowDiv3("d-none");               
            }
        }
    };
    const handleClickRedirect = () => {
        navigate("/");
    };

    const handleClickNext = () => {
        // Vérifie si les champs sont remplis

        if (ValidateAddress === "" && (ValidateAddress2 === "" || ValidateCity === "" || ValidateCp === "")) {
            setVerifySend("Veuillez entrer une adresse de livraison");
            
        } 
        else{
            if(showDiv1 === "col"){  
                setShowDiv1("none");
                setVerifySend("");
                setShowDiv2("");
                
            }

            if(showDiv2 === ""){
                if(value === "" || value === "" || value3 === "" || value4 === "" || value5 === ""){
                    setVerifySend("Veuillez entrer vos coordonnées bancaires");
                    toggleShowA();
                }
                else{
                    console.log(ValidateAddress2 + ' ' + ValidateCity + ' ' + ValidateCp + ' ' + commentaire);
                  
                    // redirect to page d'accueil
                    dataApi.validateOrder(params)
                    .then((response) => {
                      console.log(response.data);
                      if (response.status < 300) {
                        alert("Votre commande a bien été prise en compte");
                        // refresh la page
                        navigate('/');
                      }
                    })
                    .catch(error => {
                      console.log("ERROR", error);
                      setError("Le nom d'utilisateur ou le mot de passe n'est pas correct !");
                    });
                    navigate("/"); 
                }
            }
        }
    };
    // console.log(ValidateAddress2 + ' ' + ValidateCity + ' ' + ValidateCp);
    const handleChangeValidateAddress1 = (event) => {
        // validation de l'adresse s'il est checked
        if(ValidateAddress === "on"){
            setValidateAddress("");
        }
        else if (event.target.checked) {
            setValidateAddress(event.target.value);
            setValidateAddress2("");
            setValidateCity("");
            setValidateCp("");
            setValidateCpl("");
        } 
    };
    const handleChangeValidateAddress2 = (event) => {
            setValidateAddress2(event.target.value);
    }
    const handleChangeValidateCpl = (event) => {
        setValidateCpl(event.target.value);
    }
    const handleChangeValidateCity = (event) => {
        setValidateCity(event.target.value);
    }
    const handleChangeValidateCp = (event) => {
        setValidateCp(event.target.value);
    }
    const handleChangesetCommentaire = (event) => {
        setCommentaire(event.target.value);
    }
    const handleChangeNumberCardFirst = (event) => {
        // Vérifie si la valeur entrée est un nombre
        if (!isNaN(event.target.value)) {
        setValue(event.target.value);
        }
    };
    const handleChangeNumberCardSecond = (event) => {
        // Vérifie si la valeur entrée est un nombre
        if (!isNaN(event.target.value)) {
        setValue2(event.target.value);
        }
    };
    const handleChangeNumberCardThird = (event) => {
        // Vérifie si la valeur entrée est un nombre
        if (!isNaN(event.target.value)) {
        setValue3(event.target.value);
        }
    };
    const handleChangeNumberCardFourth = (event) => {
        // Vérifie si la valeur entrée est un nombre
        if (!isNaN(event.target.value)) {
        setValue4(event.target.value);
        }
    };
    const handleChangeCode = (event) => {
        // Vérifie si la valeur entrée est un nombre
        if (!isNaN(event.target.value)) {
        setValue5(event.target.value);
        }
    };

  return (
    <>



       <div className='generalContent'>
            <div className='container'>
                <div 
                    style={
                        {
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 20,
                        }
                    }
                
                >  
                    {/* Card Address + Card CB */}                
                    <div className='contentDelivery' 
                        style={
                            {
                                display: 'flex',
                                justifyContent: 'center',
                            }
                        }
                    >
                        <div  
                            style={
                            {
                                display: showDiv1,
                            }
                            }
                        >
                            <h2 
                                style={
                                    {
                                        fontSize:'30px',
                                        fontWeight:'500',
                                    }
                                }
                                >
                                    Choisissez votre adresse de livraison
                            </h2>
                            <div className='div-form'>
                                <div className='container text-center '>
                                    <label>Adresse* : </label>
                                    <input className="inputAddress" type='text' onChange={handleChangeValidateAddress2} readOnly={ValidateAddress} value={ValidateAddress2}/>
                                </div>
                                <div className='container text-center dd'>
                                    <label>Cpl. Adresse : </label>
                                    <input className="" type="text" readOnly={ValidateAddress} onChange={handleChangeValidateCpl} value={ValidateCpl}/>
                                </div>
                                <div className='container text-center dd'>
                                    <label>Ville* : </label>
                                    <input className="inputCity" type='text' onChange={handleChangeValidateCity} readOnly={ValidateAddress} value={ValidateCity}/>
                                </div>
                                <div className='container text-center dd'>
                                    <label>Code postal* : </label>
                                    <input className="inputCp" type='text' onChange={handleChangeValidateCp} readOnly={ValidateAddress} value={ValidateCp}/>
                                </div>
                            </div>
                        </div>

                        <div 
                        style={
                            {
                                display: showDiv2,
                            }
                        }
                        >
                            <h2 
                                style={
                                    {
                                        fontSize:'30px',
                                        fontWeight:'500',
                                    }
                                }
                                >
                                    Paiement
                            </h2>
                            {/* Image */}
                            <div>
                                <img src="visa.svg" alt="" />
                                <img src="mastercard.svg" alt="" />
                            </div>

                            {/* CB */}
                            <div className='div-form-cb'>
 
 
                                <div className='container dd text-center mt-2'>
                                    <label>Nom de famille : </label>
                                    <input className="input" type='text' style={
                                        {
                                            width: '200px',
                                        }
                                    } />
                                </div>

                                <div className='container mt-2 d-flex justify-content-center gap'
                                    style={
                                        {
                                            display: 'flex',
                                            justifyContent: 'center',
                                            gap: '5px',
                                        }
                                    }
                                >
                                    <label>Numéro de cartes:</label>
                                    <input className="inputCard" type='text' maxLength="4" value={value} onChange={handleChangeNumberCardFirst}/>
                                    <input className="inputCard" type='text' maxLength="4" value={value2} onChange={handleChangeNumberCardSecond}/>
                                    <input className="inputCard" type='text' maxLength="4" value={value3} onChange={handleChangeNumberCardThird}/>
                                    <input className="inputCard" type='text' maxLength="4" value={value4} onChange={handleChangeNumberCardFourth}/>
                                </div>
                                
                                <div className='container  mt-1'
                                    style={
                                        {
                                            display: 'flex',
                                            justifyContent: 'center',
                                            gap: '10px',
                                        }
                                    }
                                >
                                    <label className="mt-2">Expiration carte : </label>
                                    <select name="month" class="selectDateCard">
                                        <option value="">Mois</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                        <option value="12">12</option>
                                    </select>
                                    <select name="years" class="selectDateCard">
                                        <option value="">Année</option>
                                        <option value="23">23</option>
                                        <option value="24">24</option>
                                        <option value="25">25</option>
                                        <option value="26">26</option>
                                        <option value="27">27</option>
                                        <option value="28">28</option>
                                        <option value="29">29</option>
                                        <option value="30">30</option>
                                        <option value="31">31</option>
                                    </select>
                                </div>
                                <div className='container' style={
                                    {
                                        display: 'flex',
                                        justifyContent: 'center',
                                        gap: '10px',
                                    }
                                }>
                                    <label>Code sécurité:</label>
                                    <input className="inputCode" type='text' maxLength="3" value={value5} onChange={handleChangeCode}/>
                                    <div className="InfoCode" style={
                                        {
                                            position: 'relative',
                                            top: '-8px',

                                        }
                                    }>
                                        <svg   xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
                                            <circle cx="22.5" cy="22.5" r="22.5" fill="#D9D9D9"/>
                                        </svg>
                                        
                                        <p style={
                                            {
                                                position: 'absolute',
                                                fontWeight: 'bold',
                                                right: '16px',
                                                top: '-27px',
                                                color : '#9AA1A9',
                                                fontSize : '28px'
                                            }
                                        }>?
                                        </p>
                                        <span className="textInfo">Le code CVC est composé des trois derniers chiffres du numéro qui apparaît dans la case signature, au dos de votre carte.</span>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>


                    {/* Button Validation */}
                    <button style={
                        {
                            width: '20%',
                            height: '50px',
                            margin: 'auto',
                        }
                    } onClick={handleClickNext}>
                        Valider
                    </button>
                </div>
            </div>
        </div> 

        {/* Modal Affichage des message */}
       <p style={
        {
            color: 'red',
        }
       }>{VerifySend}</p>       
    </>
  );
}

export default CardPayment;

























                            