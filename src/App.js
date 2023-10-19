import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Home from "./components/Home/Home";
import OurCollection from "./components/Our Collection/OurCollection";
import Aboutus from "./components/About/Aboutus";
import Product from "./components/Productdetails/Product";
import Blogs from "./components/Blogs/Blogs";
import Checkout from "./components/Checkout/Checkout";

function App() {

  

  return (
    <>
      
      <BrowserRouter>
          <Routes>
            <Route path = "/" element={<Home/>}/> 
            <Route path="/ourcollection" element={<OurCollection/>} />
            <Route path="/aboutus" element={<Aboutus/>} />
            <Route path="/product" element={<Product/>} />
            <Route path="/blogs" element={<Blogs/>} />
            <Route path="/checkout" element={<Checkout/>} />
          </Routes>
        

      </BrowserRouter>
    </>
  );
}

export default App;
