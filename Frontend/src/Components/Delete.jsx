import prof from './assets/addphoto.jpg';
import { useRef, useState, useEffect } from 'react';
import AxiosInstance from './Axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Style.css';

function Delete() {
  
  const navigate = useNavigate()
  const { id } = useParams(); 
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [unit, setUnit] = useState('');
  const [quantity, setQuantity] = useState('');
  
  useEffect(() => {
    AxiosInstance.get(`Items/${id}`)
      .then(response => {
        const itemData = response.data;
        setExistingImage(itemData.image);
        setTitle(itemData.name);
        setDescription(itemData.description);
        setPrice(itemData.price);
        setUnit(itemData.unit_of_measure);
        setQuantity(itemData.quantity);
        
        console.log(itemData);
      })
      .catch(error => {
        console.error('Error fetching item:', error);
      });
  }, [id]); 

  

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('image', image);
    formData.append('name', title);
    formData.append('description', description);
    formData.append('quantity', quantity);
    formData.append('price', price);
    formData.append('unit_of_measure', unit);
  
    AxiosInstance.delete(`Items/${id}/`, {})
      .then((response) => {
        navigate('/view')
        console.log('Item deleted successfully:', response);
        
      })
      .catch((err) => console.log('Error deleting item:', err));
  };

  return (
    <div className='container'>
      <div className="card-container">
        <h3>Delete Product</h3>
        <div className="cardcontainer">
          <p>Are you sure that you want to delete this item: <span className='title'>{title }</span></p>
          
        </div>
        <div className="btn">
          <button className="delete-item-btn" onClick={handleSubmit}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Delete;
