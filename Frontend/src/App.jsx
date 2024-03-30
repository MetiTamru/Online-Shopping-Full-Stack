import "./App.css";
import Navbar from './Components/Navbar';
import SellerNav from './Components/SellerNav';
import BuyerNav from './Components/BuyerNav';
import Home from './Components/Home';
import Create from './Components/Create';
import About from './Components/About';
import { Route, Routes, Navigate } from 'react-router-dom';
import Footer from "./Components/Footer";

import ViewItems from "./Components/ViewItems";
import EditItem from "./Components/EditItem";
import Delete from "./Components/Delete";
import SignUp from "./Components/SignUp";
import AboutUs from "./Components/AboutUs";
import Contact from "./Components/Contact";
import BuyerorSeller from "./Components/BuyerorSeller";
import View from "./Components/BuyerSide/View";
import AddtoCart from "./Components/BuyerSide/AddtoCart";
import { useState } from "react";
import BuyersHome from "./Components/BuyerSide/BuyersHome";
import BuyersLogin from "./Components/BuyerSide/BuyersLogin";
import SellersLogin from "./Components/SellersLogin";



const userType = {
  Public: "Public",
  Buyer: "Buyer",
  Seller: "Seller"
};

 
function App() {
  const [currentUser, setCurrentUser] = useState(userType.Public);

  return (
    
      <>
        <Routes>
          <Route path='/' element={<BuyerorSeller setCurrentUser={setCurrentUser} />}/>
          <Route path='/addtocart/:id' element={
            currentUser === userType.Buyer ?
              <><BuyerNav/><AddtoCart/></> :
              <Navigate to='/' replace/>
          }/>
          <Route path='/buyershome' element={
            currentUser === userType.Buyer ?
              <><BuyerNav/><BuyersHome/></> :
              <Navigate to='/' replace/>
          }/>
          <Route path='/buyerview' element={
            currentUser === userType.Buyer ?
              <><BuyerNav/><View/></> :
              <Navigate to='/' replace/>
          }/>
          <Route path='/home' element={<><SellerNav/><Home/></>}/>
          <Route path='/create' element={
            currentUser === userType.Seller ?
              <><SellerNav/><Create/></> :
              <Navigate to='/' replace/>
          }/>
          <Route path='/view' element={
            currentUser === userType.Seller ?
              <><SellerNav/><ViewItems/></> :
              <Navigate to='/' replace/>
          }/>
          <Route path='/About' element={<><Navbar/><About/></>}/>
          <Route path='/buyerslogin' element={<BuyersLogin/>}/>
          <Route path='/sellerslogin' element={<SellersLogin/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/edit/:id' element={<><SellerNav/><EditItem/></>}/>
          <Route path='/delete/:id' element={<><SellerNav/><Delete/></>}/>
          
          <Route path='/aboutus' element={<><Navbar/><AboutUs/></>}/>
          <Route path='/contact' element={<><Navbar/><Contact/></>}/>
        </Routes>
      </>
  );
}




export default App;
