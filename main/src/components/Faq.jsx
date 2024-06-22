import { useState } from "react"

export default function Faq() {

const [show, setShow] = useState(false);

function ShowDesc() {
    
};

    return(
        <main>
            <div className="faq">
                <h1>FAQ</h1>
                <button>Ask a Question</button>
            </div>
            <div className="spisok">
                <ul>
                    <li>
                        <p>Do you offer financing options for purchasing classic cars?</p>
                        <div className="on-show-desc" onClick={ShowDesc}>+</div>
                        <div className="show-desc"></div>
                        <hr />
                    </li>
                    <li>
                        <p>Are the showcased cars fully restored or in original condition?</p>
                        <div className="on-show-desc" onClick={ShowDesc}>+</div>
                        <div className="show-desc"></div>
                        <hr />
                    </li>
                    <li>
                        <p>Do you assist with shipping for purchased classic cars?</p>
                        <div className="on-show-desc" onClick={ShowDesc}>+</div>
                        <div className="show-desc"></div>
                        <hr />
                    </li>
                    <li>
                        <p>Are your vintage cars certified or inspected for authenticity?</p>
                        <div className="on-show-desc" onClick={ShowDesc}>+</div>
                        <div className="show-desc"></div>
                        <hr />
                    </li>
                    <li>
                        <p>Can I request additional photos before purchasing?</p>
                        <div className="on-show-desc" onClick={ShowDesc}>+</div>
                        <div className="show-desc"></div>
                        <hr />
                    </li>
                </ul>
            </div>
        </main>
    )
}