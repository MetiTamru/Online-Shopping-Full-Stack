import prof from './assets/addphoto.jpg';
import { useRef, useState } from 'react';
import AxiosInstance from './Axios';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import './Style.css';

function Create() {
  const navigate = useNavigate()
  const inputRef = useRef(null);
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [unit, setUnit] = useState('');
  const [quantity, setQuantity] = useState('');
  const [errors, setErrors] = useState({}); 

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

  const handleImageClick = () => {
    inputRef.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    schema.validate({ title, description, unit, price, quantity, image }, { abortEarly: false }) 
      .then(() => {
        const formData = new FormData();
        formData.append('image', image);
        formData.append('name', title);
        formData.append('description', description);
        formData.append('quantity', quantity);
        formData.append('price', price);
        formData.append('unit_of_measure', unit);

        AxiosInstance.post('Items/', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
          .then((response) => {
            console.log(response);
            navigate('/view');
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => {
        const validationErrors = {};
        err.inner.forEach(error => {
          validationErrors[error.path] = error.message;
        });
        setErrors(validationErrors);
      });
  };

  return (
    <div className='container'>
      <div className="card-container">
        <h3>Add Your Product Here</h3>
        <div className="cardcontainer">
          <div
            className="image-container"
            style={{ cursor: 'pointer' }}
            onClick={handleImageClick}
            title="Click to change image"
          >
            {image ? (
              <img src={URL.createObjectURL(image)} alt="" />
            ) : (
              <img src={prof} alt="" />
            )}
            <input
              type="file"
              ref={inputRef}
              onChange={handleImageChange}
              style={{ display: 'none' }}
              
            />
             {errors.image && <p className="error-message">{errors.image}</p>}

          </div>

          <div className="Inputs">
            <form>
              <label>Item Name</label>
              <input
                type="text"
                className="input"
                placeholder="Name"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
              {errors.title && <p className="error-message">{errors.title}</p>}

              <label>Description</label>
              <textarea
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              ></textarea>
              {errors.description && <p className="error-message">{errors.description}</p>}

              <label>Available</label>
              <input
                type="number"
                className="input"
                placeholder="Quantity"
                required
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
              {errors.quantity && <p className="error-message">{errors.quantity}</p>}

              <label>Price</label>
              <input
                type="number"
                className="input"
                placeholder="Price"
                required
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
              {errors.price && <p className="error-message">{errors.price}</p>}

              <label>Unit Of Measure</label>
              <select
                placeholder="Add Unit"
                className="input"
                value={unit}
                onChange={(e) => setUnit(e.target.value)}
              >
                <option value="ltr">ltr</option>
                <option value="kg">kg</option>
                <option value="pcs">pcs</option>
              </select>
              {errors.unit && <p className="error-message">{errors.unit}</p>}
            </form>
          </div>
        </div>
        <div className="btn">
          <button className="submit" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Create;
