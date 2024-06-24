import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Footer() {
    const navigate = useNavigate();

    return(
        <>
            <hr className="hr-footer"/>
            <footer class="footer">
                <div class="footer-left">
                    <h1>Cars Classic Autotrader</h1>
                    <p>Privacy Policies</p>
                </div>
                <div class="footer-center">
                    <p onClick={() => navigate('/Cars')}>Cars</p>
                    <p onClick={() => navigate('/How-to-rent')}>How to rent</p>
                    <p onClick={() => navigate('/About-Us')}>About Us</p>
                    <p onClick={() => navigate('/Contacts')}>Contacts</p>
                </div>
                <div class="footer-right">
                    <h1>+1 (701) 581-1331</h1>
                    <p>161 Trumpeter Ave, Soldotna, Alaska</p>
                </div>
            </footer>
            <p className="footer-p">© Cars Classic Autotrader 2024</p>
        </>
    )
}
