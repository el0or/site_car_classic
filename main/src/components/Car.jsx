const itemsList = [
    {
      id: 1,
      title: '1957 Chevrolet Corvette',
      img: '/img/corvette.png',
      price: '$39 000',
      button: '14,900 miles',
    },
    {
      id: 2,
      title: '1960 Toyota 2000GT',
      img: '/img/toyota.png',
      price: '$66 700',
      button: '14,900 miles',
    },
    {
      id: 3,
      title: '1969 Dodge Charger',
      img: '/img/charger.png',
      price: '$39 000',
      button: '14,900 miles',
    },
    {
      id: 4,
      title: '1967 Toyota 2000GT',
      img: '/img/daytona.png',
      price: '$66 700',
      button: '14,900 miles',
    },
    {
      id: 5,
      title: '1967 Toyota 2000GT',
      img: '/img/pontiac.png',
      price: '$66 700',
      button: '14,900 miles',
    },
    {
      id: 6,
      img: '/img/more_car.png',
      button: '29 more cars',
    },
  ];

export default function Car() {
    return(
        <div class="container">
            <header>
                <h1>1967 Toyota 2000GT</h1>
            </header>
            <section class="main-content">
                <div class="car-images">
                    <img src={itemsList[1].img} alt={itemsList[1].title} />
                    <div class="small-images" >
                    {itemsList.slice(1, -1).map((item) => (
                        <img key={item.id} src={item.img} alt={item.title} style={{width: '500px', height: '300px'}}/>
                    ))}
                    </div>
                </div>
                <div class="car-details">
                    <div class="details-left">
                        <h2>1967 Toyota 2000GT</h2>
                        <button className="btn-price">$66 700</button>
                        <div className="spec-list">
                          <ul>
                              <li>Make: <strong>Chevrolet</strong></li>
                              <li>Model: <strong>Chevelle SS</strong></li>
                              <li>Transmission: <strong>4-speed manual</strong></li>
                              <li>VIN: <strong>138178A142952</strong></li>
                              <li>Body Color: <strong>Red</strong></li>
                          </ul>
                          <ul>
                              <li>Mileage: <strong>28,432 miles</strong></li>
                              <li>Engine Size: <strong>427ci</strong></li>
                              <li>Year: <strong>1966</strong></li>
                              <li>Type: <strong>Hardtop</strong></li>
                              <li>nterior Color: <strong>Red</strong></li>
                          </ul>
                        </div>
                        <button className="btnWAW">Rent</button>
                    </div>
                    <div class="details-right">
                        <h2>About the car</h2>
                        <p>1966 Chevrolet Chevelle SS - STL 29101</p> <br />
                        <p>
                            1966 Chevrolet Chevelle SS – STK 2801
                            The 1966 Chevelle SS396 captivated onlookers with its striking appearance. The revamped Fisher body ushered in a new era for the mid-size Chevy, establishing it as a performance icon. In this iteration, the SS396 evolved into a distinct model within the Chevelle lineup, showcasing numerous styling upgrades and an unwavering focus on performance. <br /> <br />
                            This ‘138’ code Chevelle SS396 underwent an impressive frame-off restoration in 2013, emerging as a visual masterpiece. A professional application of Bolero Red paint revitalized the exterior, complemented by a meticulous restoration of the interior in original red vinyl. Every authentic detail, including the Muncie ‘hypodermic’ shifter, was thoughtfully recreated. The cabin features a complete set of SunPro gauges alongside a column-mounted tachometer, tinted windows, and an aftermarket AM/FM/cassette stereo system. <br /> <br />
                            Under the hood, the original 396ci ‘Rat’ powerplant gave way to a robust 427ci big-block. This powerhouse, meticulously rebuilt, boasts an aluminum intake, dual-line Holley carburetor, and a street-savvy cam. Paired with a 4-speed manual transmission, the throaty exhaust note resonates with power. (Trivia: A few years later, Don Yenko Chevrolet in Pittsburgh adopted a similar drivetrain package for their COPO Chevelles.) <br /> <br />
                            GM Rally wheels with trim rings and centers embrace sturdy 15” BFG Radial T/A tires. Steering is managed manually, while power disc/drum brakes, a front sway bar, and HD shocks contribute to a balanced driving experience. <br />
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}