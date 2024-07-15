import React, { useState } from 'react';
import Footer from "../../components/Footer/Footer";
import EPayment from '../../components/PaymentOptions/epayment';
import './PaymentMethod.css';
import Popup from './Popup.css';

const PaymentMethod = () => {
    const [contact, setContact] = useState('jhonsmith93@gmail.com');
    const [paymentMethod, setPaymentMethod] = useState('');
    const [membershipType, setMembershipType] = useState('annually');
    const [addons, setAddons] = useState(false);
    const [showPopup, setShowPopup] = useState(false);

    const handlePayment = async () => {
        setShowPopup(true);
        // The rest of the payment logic
    };

    return (
        <div className="payment-page">

            <section className="banner">
                <div className="container">
                    <h1>Payment</h1>
                </div>
            </section>
            <section className="payment-method">
                <div className="container">
                    <h2>Payment Method</h2>
                    <div className="payment-container">
                        <div className="payment-form">
                            <div className="contact-info">
                                <label>Contact</label>
                                <input 
                                    type="text" 
                                    value={contact} 
                                    onChange={(e) => setContact(e.target.value)} 
                                    readOnly
                                />
                                <button>Edit</button>
                            </div>
                            <div className="payment-options">
                                <div className="option">
                                    <input 
                                        type="radio" 
                                        name="payment-method" 
                                        id="esewa" 
                                        value="esewa" 
                                        onChange={(e) => setPaymentMethod(e.target.value)}
                                    />
                                    <label htmlFor="esewa">
                                        <img src="https://i.imgur.com/7kQEsHU.png" alt="Esewa" />
                                    </label>
                                </div>
                                <div className="option">
                                    <input 
                                        type="radio" 
                                        name="payment-method" 
                                        id="visa" 
                                        value="visa" 
                                        onChange={(e) => setPaymentMethod(e.target.value)}
                                    />
                                    <label htmlFor="visa">
                                    <div className="icons">
                                            <img src="https://i.imgur.com/2ISgYja.png" width="30" alt="Credit card" />
                                            <img src="https://i.imgur.com/W1vtnOV.png" width="30" alt="Credit card" />
                                            <img src="https://i.imgur.com/35tC99g.png" width="30" alt="Credit card" />
                                            <img src="https://i.imgur.com/2ISgYja.png" width="30" alt="Credit card" />
                                        </div>
                                    </label>
                                    <div className="card-details">
                                        <input type="text" placeholder="Card Number" />
                                        <input type="text" placeholder="MM / YY" />
                                        <input type="text" placeholder="CVV" />
                                        <input type="text" placeholder="Country" />
                                        <input type="text" placeholder="Zip Code" />
                                    </div>
                                </div>
                                <div className="option">
                                    <input 
                                        type="radio" 
                                        name="payment-method" 
                                        id="offline" 
                                        value="offline" 
                                        onChange={(e) => setPaymentMethod(e.target.value)}
                                    />
                                    <label htmlFor="offline">
                                        <img src="offline.png" alt="Offline Payment" />
                                    </label>
                                </div>
                            </div>
                            <button className="pay-button" onClick={handlePayment}>Pay</button>
                        </div>
                        <div className="membership-info">
                            <h3>Membership Type</h3>
                            <div className="membership-type">
                                <input 
                                    type="radio" 
                                    name="membership-type" 
                                    id="monthly" 
                                    value="monthly" 
                                    onChange={(e) => setMembershipType(e.target.value)}
                                />
                                <label htmlFor="monthly">$39 / Month Per Member</label>
                                <input 
                                    type="radio" 
                                    name="membership-type" 
                                    id="annually" 
                                    value="annually" 
                                    checked={membershipType === 'annually'}
                                    onChange={(e) => setMembershipType(e.target.value)}
                                />
                                <label htmlFor="annually">$25 / Month Per Member (Save 20%)</label>
                            </div>
                            <div className="add-ons">
                                <input 
                                    type="checkbox" 
                                    id="couple" 
                                    value="couple" 
                                    onChange={(e) => setAddons(e.target.checked)}
                                />
                                <label htmlFor="couple">$245 / Month Per Member</label>
                            </div>
                            <p className="terms">
                                By Continuing you agree to our <a href="#">terms and conditions</a>.
                            </p>
                            <p className="total">$25.00 / Month / User</p>
                        </div>
                    </div>
                </div>
            </section>


            <br /><br />
            
            <EPayment/>

            <Footer />
            {showPopup && <Popup setShowPopup={setShowPopup} />}
        </div>
    );
};

export default PaymentMethod;
