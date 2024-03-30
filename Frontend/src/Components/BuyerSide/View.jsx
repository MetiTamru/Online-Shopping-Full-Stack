import React from 'react'
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
import AxiosInstance from '../Axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';


function View() {
  const [search, setSearch] = useState('');
  const [items, setItems] = useState([]);

 

  const handleEditClick = (item) => {
    setSelectedItem(item.id);
    console.log('Edit:', item);
  };

 

  useEffect(() => {
    AxiosInstance.get('Items/')
      .then(response => {
        setItems(response.data);
      })
      .catch(error => {
        console.error('Error fetching items:', error);
      });
  }, []);
  return (
    <>
    <div className='search-bar-container'> 
    <input
     className='search-bar'
     type="text"
     placeholder='Search for products'
     
     value={search}
     onChange={(e) => setSearch(e.target.value)}
   />
   </div>
 <div className="app">
  
   
   {items.filter((item) => {
     return search.trim() === '' || 
       item.name.toLowerCase().includes(search.toLowerCase());
   }).map(item => (
     <div className="products" key={item.id}>
       <div className="image-view" ><img src={item.image} alt="" /></div>
       <div className="names">{item.name}</div>
       <div className="description">{item.description}</div>
       <div className="price">${item.price}</div>
       <div className="quantity">{item.quantity} {item.unit_of_measure} Available</div>
       <div className='controles'>
         <Link to={`/addtocart/${item.id}`} style={{ textDecoration: "none" }}>
           <button className='Add-to-cart-btn' onClick={() => handleEditClick(item)}>
             <FontAwesomeIcon className='icons' icon={faCartPlus} />
             <span>Add to Cart</span>
           </button>
         </Link>
        
        
       </div>
     </div>
   ))}
 </div>
</>
  )
}

export default View