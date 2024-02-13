import React, {useState} from 'react'

export default function CardPanier(props) {

  // filtre les orders id
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
  const orders = props.orders.filter(order => cart.includes(order.id))

  console.log(orders)
  return (


    <div>
       {/*  Card */}

       {
        orders.map((order) => (
          <>
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
            }>
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
                {order.name}
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
          </>
        )) 
       }

      

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
  )
}
