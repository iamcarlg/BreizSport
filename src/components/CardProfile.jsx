import React, {useState, useEffect }from 'react';
import dataApi from '../services/dataApi';
import { useNavigate } from 'react-router-dom';
import { Button,Modal } from 'react-bootstrap';
function CardProfile() {


 
   
    const [value, setValue] = useState("");
    const [value2, setValue2] = useState("");
    const [value3, setValue3] = useState("");
    const [value4, setValue4] = useState("");
    const [value5, setValue5] = useState("");
    // Changez mot de passe
    const [passwordCurrent, setPasswordCurrent] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmNewPassword, setConfirmNewPassword] = useState("");
    const [verifyPassword, setVerifyPassword] = useState("");

    const [ValidateAddress, setValidateAddress] = useState("");
    const [ValidateCpl, setValidateCpl] = useState("");
    const [ValidateAddress2, setValidateAddress2] = useState("");
    const [ValidateCity, setValidateCity] = useState("");

    const navigate = useNavigate();
   
    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false);
        setVerifyPassword("");
    }

    const handleShow = () => setShow(true);
  

    const handleSubmit = () => {
        // Vérifie si les champs sont remplis

        if (ValidateAddress === "" && (ValidateAddress2 === "" || ValidateCity === "" || ValidateCp === "")) {
            setVerifySend("Veuillez entrer une adresse de livraison");
            
        } 
       
    };
    const handleSubmitPassword = () => {
        // Vérifie si les champs sont remplis

        if (passwordCurrent === "" || newPassword === "" || confirmNewPassword === "") {
            setVerifyPassword("Veuillez entrer un mot de passe correct");
            
        }else{
            setShow(false);
            setVerifyPassword("");
        } 

       
    };


    const handleChangePasswordCurrent = (event) => {
        setPasswordCurrent(event.target.value);
    };

    const handleChangeNewPassword = (event) => {
        setNewPassword(event.target.value);
    };

    const handleChangeConfirmNewPassword = (event) => {
        setConfirmNewPassword(event.target.value);
    };


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
                        <div>
                            <h2 
                                style={
                                    {
                                        fontSize:'30px',
                                        fontWeight:'500',
                                    }
                                }
                                >
                                    Modification Profile
                            </h2>
                            <div className='div-form'>
                                <div className='container text-center '>
                                    <label>Nom : </label>
                                    <input className="inputAddress" type='text' onChange={handleChangeValidateAddress2} readOnly={ValidateAddress} value={ValidateAddress2}/>
                                </div>
                                <div className='container text-center dd'>
                                    <label>Prenom : </label>
                                    <input className="" type="text" readOnly={ValidateAddress} onChange={handleChangeValidateCpl} value={ValidateCpl}/>
                                </div>
                                <div className='container text-center dd'>
                                    <label>Email : </label>
                                    <input className="inputCity" type='text' onChange={handleChangeValidateCity} readOnly={ValidateAddress} value={ValidateCity}/>
                                </div>

                                {/* bouton modal modification de mot de passe */}
                                <button style={
                                    {
                                        width: '100%',
                                        height: '30px',
                                        padding: '0px',
                                        background: '#525252'
                                    }
                                } onClick={handleShow}>
                                    Modifier mot de passe
                                </button>
                            </div>
                        </div>
                    </div>


                    {/* Button Validation */}
                    <button style={
                        {
                            width: '20%',
                            height: '50px',
                            margin: 'auto',
                            background: '#2D9DB6'
                        }
                    } onClick={handleSubmit}>
                        Valider
                    </button>
                </div>
            </div>
        </div>

        {/* Affichage du modal  */}
        <Modal show={show} className='modal' onHide={handleClose}>
                    <div style={
                        {
                            color: '#fff',
                            display: 'flex',
                            justifyContent: 'center',
                            flexDirection: 'column',
                            position: 'relative',
                        }
                    }>
                        <h2
                        style={
                            {
                                margin:'auto',
                            }
                        }
                        >Changez votre mot de passe</h2>

                        <div className='div-form'
                        style={
                            {
                                padding: 50,
                                margin: 'auto',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 10,

                            }
                        }
                        >
                                <div className=' '>
                                <label>Mot de passe actuel : </label>
                                    <input className="inputPasswordCurrent" type='password' onChange={handleChangePasswordCurrent}  value={passwordCurrent}/>
                                </div>

                                <div className='container text-center '>
                                <label>Nouveau mot de passe : </label>
                                    <input className="inputPasswordCurrent" type='password' onChange={handleChangeNewPassword}  value={newPassword}/>
                                </div>

                                <div className='container text-center '>
                                    <label>Confirmez nouveau mot de passe : </label>
                                    <input className="inputPasswordCurrent" type='password' onChange={handleChangeConfirmNewPassword}  value={confirmNewPassword}/>
                                </div>
                        </div>

                        <div style={
                            {
                                display: 'flex',
                                justifyContent:'center',
                            }
                        }>

                            {/* button fermer */}
                            <button style={
                                {
                                    width: '20%',
                                    height: '50px',
                                    margin: 'auto',
                                    background: '#2D9DB6'
                                }
                            } onClick={handleClose}>
                                Fermer
                            </button>

                            {/* button validation */}
                            <button style={
                                {
                                    width: '20%',
                                    height: '50px',
                                    margin: 'auto',
                                    background: '#2D9DB6'
                                }
                            } onClick={handleSubmitPassword}>
                                Valider
                            </button>
                        </div>
                            <span
                            style={
                                {
                                    textAlign: 'center',
                                    marginTop: '20px',
                                    color: 'red',
                                    fontWeight: 'bold',
                                }
                            }
                            >{verifyPassword}</span>
                    </div>


        </Modal>
    </>
  );
}

export default CardProfile;