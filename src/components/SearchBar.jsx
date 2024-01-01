import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    // Passes the search term to the parent component or function for handling the search
    onSearch(searchTerm);
  };

  return (
    <div style={
        {
            display: 'flex',
            justifyContent: 'center',
            gap: '10px',
        }
    }>
      <input
        type="text"
        placeholder="Rechercher..."
        value={searchTerm}
        style={
            {
                width: '50%',
                height: '25px',
                padding: '5px',
                fontSize: '1.2rem',
                border: '1px solid #ddd',
                borderRadius: '10px',
                background: '#FFF',
                color: '#333',
                marginBottom: '10px'
            }
        }
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch} 
        style={
            {
                width: '50px',
                height: '35px',
                padding: '5px',
                border: '1px solid #ddd',
                borderRadius: '10px',
                background: '#FFF',
            }
        }
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 29" fill="none">
            <g clip-path="url(#clip0_720_201)">
                <path d="M23.7068 26.5092L17.7378 19.5454C19.3644 17.2244 20.1642 14.2628 19.9716 11.2732C19.7791 8.28359 18.609 5.49468 16.7034 3.48333C14.7977 1.47198 12.3024 0.392096 9.73342 0.467034C7.16447 0.541971 4.71849 1.766 2.9014 3.88594C1.08431 6.00588 0.0351379 8.85953 -0.029094 11.8566C-0.0933258 14.8537 0.832293 17.765 2.5563 19.9882C4.28031 22.2115 6.67081 23.5766 9.23334 23.8012C11.7959 24.0258 14.3344 23.0928 16.3238 21.1951L22.2928 28.1589C22.4814 28.3714 22.734 28.489 22.9962 28.4863C23.2584 28.4837 23.5092 28.361 23.6946 28.1447C23.88 27.9284 23.9852 27.6358 23.9875 27.3299C23.9897 27.024 23.8889 26.7293 23.7068 26.5092ZM9.99978 21.5007C8.41753 21.5007 6.87081 20.9533 5.55522 19.9278C4.23963 18.9022 3.21425 17.4445 2.60875 15.7391C2.00324 14.0337 1.84482 12.157 2.1535 10.3465C2.46218 8.53606 3.22411 6.87302 4.34293 5.56773C5.46175 4.26244 6.88721 3.37352 8.43906 3.01339C9.99091 2.65326 11.5994 2.83809 13.0613 3.54451C14.5231 4.25093 15.7725 5.44721 16.6515 6.98207C17.5306 8.51693 17.9998 10.3214 17.9998 12.1674C17.9974 14.6419 17.1538 17.0142 15.654 18.764C14.1542 20.5137 12.1208 21.4979 9.99978 21.5007Z" fill="#374957"/>
            </g>
            <defs>
                <clipPath id="clip0_720_201">
                <rect width="24" height="28" fill="white" transform="translate(0 0.5)"/>
                </clipPath>
            </defs>
        </svg>
      </button>
    </div>
  );
};

export default SearchBar;
