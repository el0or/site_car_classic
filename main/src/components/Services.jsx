import { useNavigate } from "react-router-dom"

export default function Services() {
    const navigate = useNavigate();

    return(
        <>
            <nav className="services_nav">
                <h1>Services</h1>
                <button>Submit your application</button>
            </nav>
            <div>
                <ul className="services-list">
                    <li>
                        <img src="/img/shipping.png" onClick={() => navigate('/Shipping')} />
                        <h4>01 / SHIPPING</h4>
                    </li>
                    <li>
                        <img src="/img/warranty.png" onClick={() => navigate('/WarPur')} />
                        <h4>02 / WARRANTY PURCHASE</h4>
                    </li>
                    <li>
                        <img src="/img/financing.png" onClick={() => navigate('/Financing')} />
                        <h4>03 / FINANCING</h4>
                    </li>
                </ul>
            </div>
        </>
    )
}