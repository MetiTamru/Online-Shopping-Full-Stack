import prof from './assets/addphoto.jpg';
import { useRef, useState, useEffect } from 'react';
import AxiosInstance from './Axios';
import { useParams, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import './Style.css';

function EditItem() {
  const navigate = useNavigate();
  const { id } = useParams();
  const inputRef = useRef(null);
  const [image, setImage] = useState(null);
  const [existingImage, setExistingImage] = useState(null);

  const schema = yup.object().shape({
    title: yup.string().required('Title is required'),
    description: yup.string().required('Description is required'),
    unit: yup.string().required('Unit of Measure is required'),
    price: yup
      .number()
      .positive('Price must be positive')
      .min(0.1, 'Price must be greater than or equal to 0.1')
      .required('Price is required'),
    quantity: yup
      .number()
      .positive('Quantity must be positive')
      .min(1, 'Quantity must be at least 1')
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
    setExistingImage(URL.createObjectURL(file));
  };

  const onSubmit = (data) => {
    const formData = new FormData();
    if (image) {
      formData.append('image', image);
    }
    formData.append('name', data.title);
    formData.append('description', data.description);
    formData.append('quantity', data.quantity);
    formData.append('price', data.price);
    formData.append('unit_of_measure', data.unit);

    AxiosInstance.put(`Items/${id}/`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then((response) => {
        navigate('/view');
        console.log('Item updated successfully:', response);
      })
      .catch((err) => console.log('Error updating item:', err));
  };

  return (
    <div className='container'>
      <div className="card-container">
        <h3>Edit Your Product Here</h3>
        <div className="cardcontainer">
          <div
            className="image-container"
            style={{ cursor: 'pointer' }}
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
              <label>Item Name</label>
              <input
                type="text"
                className="input"
                placeholder="Name"
                {...register('title')}
              />
              {errors.title && (
                <p className="error-message">{errors.title.message}</p>
              )}

              <label>Description</label>
              <textarea
                placeholder="Description"
                {...register('description')}
              ></textarea>
              {errors.description && (
                <p className="error-message">{errors.description.message}</p>
              )}

              <label>Available</label>
              <input
                type="number"
                className="input"
                placeholder="Quantity"
                {...register('quantity')}
              />
              {errors.quantity && (
                <p className="error-message">{errors.quantity.message}</p>
              )}

            <label>Unit Of Measure</label>
              <select
                placeholder="Add Unit"
                className="input"
                {...register('unit')}
              >
                <option value="ltr">ltr</option>
                <option value="kg">kg</option>
                <option value="pcs">pcs</option>
              </select>
              {errors.unit && (
                <p className="error-message">{errors.unit.message}</p>
              )}
              
              <label>Price</label>
              <input
                type="number"
                className="input"
                placeholder="Price"
                {...register('price')}
              />
              {errors.price && (
                <p className="error-message">{errors.price.message}</p>
              )}

            
              
              <div className="btn">
              <button className="submit">Submit Change</button>
        </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditItem;
