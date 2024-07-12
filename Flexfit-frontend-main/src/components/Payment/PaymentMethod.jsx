import React, { useState } from 'react';
// import axios from 'axios';
import './PaymentMethod.css';

const PaymentMethod = () => {
    const [contact, setContact] = useState('jhonsmith93@gmail.com');
    const [paymentMethod, setPaymentMethod] = useState('');
    const [membershipType, setMembershipType] = useState('annually');
    const [addons, setAddons] = useState(false);

    const handlePayment = async () => {
        const data = {
            contact,
            paymentMethod,
            membershipType,
            addons
        };
        // try {
        //     const response = await axios.post('/api/payment', data);
        //     console.log(response.data);
        // } catch (error) {
        //     console.error('There was an error processing the payment!', error);
        // }
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
                                        <img src="esewa.png" alt="Esewa" />
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
                                        <img src="visa.png" alt="Visa" />
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
            <section className="trainer-contact">
                <div className="container">
                    <h2>Need a Fitness Trainer?</h2>
                    <p>Call us: +123-456789</p>
                    <button>Purchase Now</button>
                </div>
            </section>
            <footer>
                <div className="container">
                    <div className="footer-logo">
                        <img src="logo.png" alt="FlexFit" />
                    </div>
                    <div className="footer-content">
                        <p>Take your health and body to the next level with our comprehensive program designed to help you reach your fitness goals.</p>
                        <div className="social-links">
                            <a href="#"><img src="facebook.png" alt="Facebook" /></a>
                            <a href="#"><img src="twitter.png" alt="Twitter" /></a>
                            <a href="#"><img src="pinterest.png" alt="Pinterest" /></a>
                            <a href="#"><img src="youtube.png" alt="YouTube" /></a>
                        </div>
                        <div className="working-hours">
                            <h3>Our Classes</h3>
                            <p>Fitness Classes: Monday - Friday: 7:00am - 21:00pm</p>
                            <p>Aerobics Classes: Saturday: 7:00am - 19:00pm</p>
                            <p>Power Yoga: Sunday: Closed</p>
                            <p>Learn Machines</p>
                            <p>Full-body Strength</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default PaymentMethod;
