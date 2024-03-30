import React from 'react';
import { Link } from 'react-router-dom';

function BuyerOrSeller({ setCurrentUser }) {
  const handleBuyerClick = () => {
    setCurrentUser('Buyer');
  };

  const handleSellerClick = () => {
    setCurrentUser('Seller');
  };

  return (
    <div className='contain' style={{margin:'0px', display:"flex"}}>
    
    <div className='background-image'>
    
      </div>
    <div className='front-container'>
      
        <div className='content'>
        <h1 className='front-title'>SHOPIT</h1>
          <h2>Welcome to Our Online Marketplace</h2>
          <p>Please select your role:</p>
          <div className='role-selection'>
            <Link to='/buyerslogin' style={{ textDecoration: 'none' }}>
              <button className='Select-btn' onClick={handleBuyerClick}>
                Buyer
              </button>
            </Link>
            <Link to='/sellerslogin' style={{ textDecoration: 'none' }}>
              <button className='Select-btn' onClick={handleSellerClick}>
                Seller
              </button>
            </Link>
          </div>
        </div>
      </div>
    
 
    </div>
     );
}

export default BuyerOrSeller;
