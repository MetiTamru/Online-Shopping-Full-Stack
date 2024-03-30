import React, { useState, useEffect } from 'react';
import AxiosInstance from './Axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const ViewItems = () => {
  const [search, setSearch] = useState('');
  const [items, setItems] = useState([]);

 

  const handleEditClick = (item) => {
    setSelectedItem(item.id);
    console.log('Edit:', item);
  };

  const handleDeleteClick = (item) => {
    setSelectedItem(item.id);
    console.log('Delete:', item);
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
            <div className="name">{item.name}</div>
            <div className="description">{item.description}</div>
            <div className="price">${item.price}</div>
            <div className="quantity">{item.quantity} {item.unit_of_measure}</div>
            <div className='controles'>
              <Link to={`/edit/${item.id}`} style={{ textDecoration: "none" }}>
                <button className='edit-btn' onClick={() => handleEditClick(item)}>
                  <FontAwesomeIcon className='icons' icon={faEdit} />
                  <span>Edit</span>
                </button>
              </Link>
              <Link to={`/delete/${item.id}`} style={{ textDecoration: "none" }} >
                <button onClick={() => handleDeleteClick(item)} className='delete-btn'>
                  <FontAwesomeIcon icon={faTrash} />
                  <span>Delete</span>
                </button>
              </Link>
             
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ViewItems;
