import prof from '../assets/addphoto.jpg';
import { useRef, useState, useEffect } from 'react';
import AxiosInstance from './Axios';
import { useParams, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import '../Style.css';

function AddtoCart() {
  const navigate = useNavigate();
  const { id } = useParams();
  const inputRef = useRef(null);
  const [image, setImage] = useState(null);
  const [existingImage, setExistingImage] = useState(null);
  const [previousQuantity, setPreviousQuantity] = useState(0); 

  const schema = yup.object().shape({
   
    quantity: yup
      .number()
      .positive('Quantity must be positive')
      .max(previousQuantity, 'No Enought Item In Stack')
      .required('Quantity is required'),
  });

  const { register, handleSubmit, formState: { errors }, setValue } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    AxiosInstance.get(`Items/${id}`)
      .then((response) => {
        const itemData = response.data;
        setExistingImage(itemData.image); 
        setValue('title', itemData.name);
        setValue('description', itemData.description);
        setValue('price', itemData.price);
        setValue('unit', itemData.unit_of_measure);
        setValue('quantity', itemData.quantity);
        setPreviousQuantity(itemData.quantity); 
      })
      .catch((error) => {
        console.error('Error fetching item:', error);
      });
  }, [id, setValue]);

  const handleImageClick = () => {
    inputRef.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  const onSubmit = (data) => {
    const newQuantity = parseInt(data.quantity);
    const updatedQuantity = previousQuantity - newQuantity; 

    const formData = new FormData();
    if (image) {
      formData.append('image', image);
    }
    formData.append('name', data.title);
    formData.append('description', data.description);
    formData.append('quantity', updatedQuantity); 
    formData.append('price', data.price);
    formData.append('unit_of_measure', data.unit);

    AxiosInstance.patch(`Items/${id}/`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then((response) => {
        navigate('/buyerview');
        console.log('Item updated successfully:', response);
      })
      .catch((err) => console.log('Error updating item:', err));
  };

  return (
    <div className='container'>
      <div className="card-container">
        
        <div className="cardcontainer">
          <div
            className="image-container"
            style={{ cursor: 'pointer',marginBottom:"30px" }}
            onClick={handleImageClick}
            title="Click to change image"
          >
            {existingImage ? ( 
              <img src={existingImage} alt="" />
            ) : (
              <img src={prof} alt="" />
            )}
            <input
              type="file"
              ref={inputRef}
              onChange={handleImageChange}
              style={{ display: 'none' }}
            />
          </div>

          <div className="Inputs">
            <form onSubmit={handleSubmit(onSubmit)}>
              
              <input
                type="text"
                {...register('title')}
                style={{display:"none"}}
              />
              

              
              <textarea
                style={{display:"none"}}
                {...register('description')}
              ></textarea>
             

             
              <label>Quantity</label>
              <input
                type="number"
                className="input"
                placeholder="Quantity"
                {...register('quantity')}
              />
              {errors.quantity && (
                <p className="error-message">{errors.quantity.message}</p>
              )}
              
              <select
               style={{display:"none"}}
              >
                <option value="ltr">ltr</option>
                <option value="kg">kg</option>
                <option value="pcs">pcs</option>
              </select>
              
              
              <input
                style={{display:"none"}}
                {...register('price')}
              />
              
            
              
              <div className="btn">
              <button className="submit">Add to Cart</button>
        </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddtoCart;
