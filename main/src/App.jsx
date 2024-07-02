import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import DescriptionUs from './components/DescriptionUs';
import Faq from './components/Faq';
import FindUs from './components/FindUs';
import Footer from './components/Footer';
import Header from './components/Header'
import Heading from './components/Heading'
import Items from './components/Items';
import Services from './components/Services';
import ServicesPage from './components/Pages/ServicesPage';
import Home from './components/Pages/Home';
import Contacts from './components/Pages/Contacts';
import AboutUs from './components/Pages/AboutUs';
import AboutCar from './components/Pages/AboutCar';
import AllCars from './components/Pages/AllCars';


export default function App(){
  return (
    <Router>
      <div className='wrapper'>
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/Cars" element={<AllCars/>}/>
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