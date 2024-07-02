import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Header() {
    const navigate = useNavigate();

    return(
        <header>
            <div className="head">
                <div className="logo" onClick={() => navigate('/home')}>Cars Classic Autotrader</div>
                <ul className="nav">
                    <li onClick={() => navigate('/Cars')}>Cars</li>
                    <li onClick={() => navigate('/AboutUs')}>About Us</li>
                    <li onClick={() => navigate('/ServicesPage')}>Services</li>
                    <li onClick={() => navigate('/Contacts')}>Contacts</li>
                </ul>
                <div className="number-header"> +1 (240) 375-1288</div>
            </div>
        </header>
    )
}