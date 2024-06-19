export default function DescriptionUs() {
    return(
        <div>
            <div className="DescriptionUs">
                <span>About us <br /> in numbers</span>
                <p>From acquisition to restoration, we 
                    specialize in iconic automobiles, ensuring 
                    each drive is a celebration of timeless style. 
                    Elevate your journey with our passion for 
                    preserving automotive heritage.
                </p>
            </div>
            <div className="group_circles">
                <div className="circles">
                    <h1>32</h1>
                    <p>Retro car</p>
                </div>
                <div className="circles">
                    <h1>400</h1>
                    <p>Satisfied clients</p>
                </div>
                <div className="circles">
                    <h1>5 years</h1>
                    <p>Delighting our clients</p>
                </div>
            </div>
            <center>
                <img src="/img/car.png" className="descriptionImg"/>
            </center>
        </div>
    )
}