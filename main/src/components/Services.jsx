export default function Services() {
    return(
        <>
            <nav className="services_nav">
                <h1>Services</h1>
                <button>Submit your application</button>
            </nav>
            <div>
                <ul className="services-list">
                    <li>
                        <img src="/img/shipping.png"/>
                        <h4>01 / SHIPPING</h4>
                    </li>
                    <li>
                        <img src="/img/warranty.png"/>
                        <h4>02 / WARRANTY PURCHASE</h4>
                    </li>
                    <li>
                        <img src="/img/financing.png"/>
                        <h4>03 / FINANCING</h4>
                    </li>
                </ul>
            </div>
        </>
    )
}