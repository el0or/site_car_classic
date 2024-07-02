import { useState } from "react"

export default function Contact() {
    let [btnOpen, setBtnOpen] = useState(false);
    
    return(
        <main>
            <div className="contact">
                <h1>
                    Contacts
                </h1>
            </div>
            <div className="hpb">
                <h3>+1 (701) 581-1331</h3>
                <p>161 Trumpeter Ave, Soldotna, Alaska</p>
                <button onClick={() => setBtnOpen(!btnOpen)} className={`contact-button ${btnOpen && 'active'}`}>Submit your application</button>

                {btnOpen && (
                    // <div class="contact-form">
                    //     <>
                    //         <div class="form-header">
                    //             <h1>Connect with us</h1>
                    //         </div>
                    //         <form action="#" method="post">
                    //             <div class="form-group">
                    //                 <label for="name">Name</label>
                    //                 <input type="text" id="name" name="name" required/>
                    //                 <label for="surname">Surname</label>
                    //                 <input type="text" id="surname" name="surname" required/>
                    //             </div>
                    //             <div class="form-group">
                    //                 <label for="phone">Phone</label>
                    //                 <div class="phone-input">
                    //                     <span class="flag">🇺🇸</span>
                    //                     <input type="text" id="phone" name="phone" required/>
                    //                 </div>
                    //                 <label for="email">E-mail</label>
                    //                 <input type="email" id="email" name="email" required/>
                    //             </div>
                    //             <div class="form-group">
                    //                 <label for="comment">Comment</label>
                    //                 <textarea id="comment" name="comment" rows="4" required></textarea>
                    //             </div>
                    //             <div class="form-group">
                    //                 <button type="submit" class="btn">Contact me</button>
                    //                 <div class="checkbox-group">
                    //                     <input type="checkbox" id="privacy" name="privacy" required/>
                    //                     <label for="privacy">I agree with the privacy policy</label>
                    //                 </div>
                    //             </div>
                    //         </form>
                    //     </>
                    // </div>

                    <div class="contact-form">
                        <div class="form-header">
                            <h2>Connect with us</h2>
                        </div>
                        <form>
                            <div class="form-group">
                                <input type="text" id="name" name="name" placeholder="Name" required/>
                                <input type="text" id="surname" name="surname" placeholder="Surname" required/>
                            </div>
                            <div class="form-group">
                                <div class="phone-container">
                                    <img src="us-flag.png" alt="US Flag" class="flag-icon"/>
                                    <input type="tel" id="phone" name="phone" placeholder="+1" required/>
                                </div>
                                <input type="email" id="email" name="email" placeholder="E-mail" required/>
                            </div>
                            <div class="form-group">
                                <textarea id="comment" name="comment" rows="4" placeholder="Comment" required></textarea>
                            </div>
                            <div class="form-group form-footer">
                                <button type="submit" class="submit-button">Contact me</button>
                                <div class="privacy-policy">
                                    <input type="checkbox" id="privacy-policy" name="privacy-policy" required/>
                                    <label for="privacy-policy">I agree with the <a href="#">privacy policy</a></label>
                                </div>
                            </div>
                        </form>
                    </div>
                )}
            </div>
            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A48c90b3d00393717b1707a5aedfa9c9383e260050c81ee83c071058b956d399e&amp;source=constructor" width="1280" height="684" frameborder="0">
            </iframe>
        </main>
    )
}