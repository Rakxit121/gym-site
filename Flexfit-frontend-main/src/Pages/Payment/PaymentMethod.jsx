import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Esewa_logo from '../../images/pricing/esewa.png';
import './PaymentMethod.css';
import './Popup.css';


const PaymentMethod = () => {
    const [contact, setContact] = useState('jhonsmith93@gmail.com');
    const [paymentMethod, setPaymentMethod] = useState('');
    const [membershipType, setMembershipType] = useState('monthly');
    const [showPopup, setShowPopup] = useState(false);
    const [showQrPopup, setShowQrPopup] = useState(false);
    const [email, setEmail] = useState('example@example.com');
    const [editMode, setEditMode] = useState(false);
    const [newEmail, setNewEmail] = useState('');

    const handlePayment = () => {
        // Implement payment logic based on paymentMethod
        if (paymentMethod === 'esewa') {
            setShowQrPopup(true);
        } else if (paymentMethod === 'visa' || paymentMethod === 'offline') {
            setShowPopup(true);
        }
    };

    const handleEdit = () => {
        setEditMode(true);
        setNewEmail(email);
    };

    const handleSave = () => {
        setEmail(newEmail);
        setEditMode(false);
    };

    const handleCancel = () => {
        setEditMode(false);
    };

    const handleChange = (e) => {
        setNewEmail(e.target.value);
    };

    const closeQrPopup = () => {
        setShowQrPopup(false);
    };


    const membershipCost = () => {
        switch (membershipType) {
            case 'monthly':
                return 39;
            case 'annually':
                return 25;
            case 'couple':
                return 245;
            default:
                return 0;
        }
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
                    <div className="payment-container" style={{width:'70%'}}>
                        <div className="card card-shadow d-flex justify-content p-5" style={{width:'50%'}}>
                            <div className="payment-form">
                                <div className="contact-info">
                                    <label>Contact</label>
                                    <div className="contact-value">
                                        {editMode ? (
                                            <>
                                                <input
                                                    type="email"
                                                    value={newEmail}
                                                    onChange={handleChange}
                                                />
                                                <button onClick={handleSave}>Save</button>
                                                <button onClick={handleCancel}>Cancel</button>
                                            </>
                                        ) : (
                                            <>
                                                <span>{email}</span>
                                                <button className="edit-button" onClick={handleEdit}>
                                                    Edit
                                                </button>
                                            </>
                                        )}
                                    </div>
                                </div>
                                <div className="payment-options">
                                <div className="option esewa">
                                    <div className='method-title'>

                                        <input
                                            type="radio"
                                            name="payment-method"
                                            id="esewa"
                                            value="esewa"
                                            onChange={(e) => setPaymentMethod(e.target.value)}
                                        />
                                        <label htmlFor="esewa">
                                            Esewa
                                            <img
                                                src="https://th.bing.com/th/id/R.a07701bc517fa35f74753172101c7673?rik=CJOCI60GSZpjHg&riu=http%3a%2f%2fdeveloper.esewa.com.np%2fassets%2fimg%2fesewa_logo.png&ehk=xAOLpkEDcaixWAmXI%2bHWdKDKycOUG6YPNUy95GwQOQg%3d&risl=&pid=ImgRaw&r=0"
                                                alt="Esewa"
                                            />
                                        </label>
                                        </div>
                                        {paymentMethod === 'esewa' && (
                                            <div className="dropdown">
                                                <p>Display QR code or Esewa payment details here.</p>
                                                <button className="pay-button" onClick={handlePayment}>
                                                    Pay with Esewa
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                    <div className="option visa">
                                        <div className='method-title'>
                                        <input
                                            type="radio"
                                            name="payment-method"
                                            id="visa"
                                            value="visa"
                                            onChange={(e) => setPaymentMethod(e.target.value)}
                                        />
                                        <label htmlFor="visa">
                                            Visa
                                            <div className="icons">
                                                <img
                                                    src="https://i.imgur.com/2ISgYja.png"
                                                    width="20"
                                                    alt="Credit card"
                                                />
                                                <img
                                                    src="https://i.imgur.com/W1vtnOV.png"
                                                    width="20"
                                                    alt="Credit card"
                                                />
                                            </div>
                                        </label>
                                        </div>
                                        {paymentMethod === 'visa' && (
                                            <div className="dropdown">
                                                <div className="card-details ">
                                                    <input type="text " placeholder="Card Number" style={{ width: '80%', height: '35px' }}/>
                                                    <input type="text" placeholder="MM / YY" style={{ width: '80%', height: '35px' }}/>
                                                    <input type="text" placeholder="CVV" style={{ width: '80%', height: '35px' }}/>
                                                    <input type="text" placeholder="Country" style={{ width: '80%', height: '35px' }}/>
                                                    <input type="text" placeholder="Zip Code" style={{ width: '80%', height: '35px' }}/>
                                                </div>
                                                <button className="pay-button m-4" onClick={handlePayment}>
                                                    Pay with Visa
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                    <div className="option offline">
                                        <div className='method-title'>
                                        <input
                                            type="radio"
                                            name="payment-method"
                                            id="offline"
                                            value="offline"
                                            onChange={(e) => setPaymentMethod(e.target.value)}
                                        />
                                        <label htmlFor="offline">
                                            Offline
                                            <img
                                                width="48"
                                                height="48"
                                                src="https://img.icons8.com/color/48/cash-in-hand.png"
                                                alt="cash-in-hand"
                                            />
                                        </label>
                                        </div>
                                        {paymentMethod === 'offline' && (
                                            <div className="dropdown">
                                                <input type="text" placeholder="Phone No." style={{ width: '80%', height: '35px' }}/>
                                                <button className="pay-button m-3" onClick={handlePayment}>
                                                     Pay Offline
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card membership-info">
                            <h3>Membership Type</h3>
                            <div className="membership-type">
                                <input
                                    type="radio"
                                    name="membership-type"
                                    id="monthly"
                                    value="monthly"
                                    checked={membershipType === 'monthly'}
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
                                <input
                                    type="radio"
                                    name="membership-type"
                                    id="couple"
                                    value="couple"
                                    onChange={(e) => setMembershipType(e.target.value)}
                                />
                                <label htmlFor="couple">$245 / Month Per Member</label>
                            </div>
                            <p className="terms">
                                By continuing, you agree to our <a href="#">terms and conditions</a>.
                            </p>
                            <p className="total">{`$${membershipCost()} / Month`}</p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
            {showPopup && (
                <div className="popup">
                    <div className="popup-content">
                        <h2>Confirm Your Subscription</h2>
                        <p>
                            You're about to subscribe to our premium gym membership plan, unlocking exclusive
                            access to advanced workout programs, personalized training plans, and much more.
                        </p>
                        <p>
                            Membership Plan: {membershipType === 'annually' ? 'Annual Plan' : 'Monthly Plan'}
                            <br />
                            Monthly Fee: ${membershipCost()}
                            <br />
                            Benefits: Advanced workout programs, personalized training plans, priority booking
                            for classes, 24/7 access.
                        </p>
                        <p>Are you sure you want to proceed?</p>
                        <div className="popup-buttons">
                            <Link to="/payment-success">
                            <button className="confirm-button" >
                                Confirm
                            </button>
                            </Link>
                            <button className="cancel-button" onClick={() => setShowPopup(false)}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
            {showQrPopup && (
                <div className="popup">
                    <div className="popup-content">
                        <button className="close-button" onClick={closeQrPopup}>
                            X
                        </button>
                        <img src={Esewa_logo} alt="QR Code" className="qr-image d-flex center p-4"/>
                        <Link to="/payment-success">
                        <button className="pay-button">
                            Finish
                        </button>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PaymentMethod;
