import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import ServicesPage from './components/Pages/ServicesPage';
import Home from './components/Pages/Home';
import Contacts from './components/Pages/Contacts';
import AboutUs from './components/Pages/AboutUs';
import AboutCar from './components/Pages/AboutCar';
import AllCars from './components/Pages/AllCars';
import ShippingPage from './components/Pages/ShippingPage';
import WarPurPage from './components/Pages/WarPurPage';
import FinancingPage from './components/Pages/FinancingPage';


export default function App(){
  return (
    <Router>
      <div className='wrapper'>
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/Cars" element={<AllCars/>}/>
          <Route path='Shipping' element={<ShippingPage/>}/>
          <Route path='WarPur' element={<WarPurPage/>}/>
          <Route path='Financing' element={<FinancingPage/>} />
          {/* <Route path="/How-to-rent" element={<HowToRent />} /> */}
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Contacts" element={<Contacts/>} />
          <Route path="/" element={<Home/>} />
          <Route path='/ServicesPage' element={<ServicesPage/>}/>
          <Route path='/AboutCar' element={<AboutCar/>} />
        </Routes>
      </div>
    </Router>
    )
}