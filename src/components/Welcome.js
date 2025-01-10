    import React from 'react';
    import './Welcome.css';
    import image from '../assets/image.png';

    const Welcome = () => {
    return (
        <div className="welcome-container">
        
        <div className='hehe1'>
        <div className='hehe2'>
        <h1>Welcome to LegalAide</h1>
        <p>Translate, summarize and simplify legal documents easily and securely</p>
        </div>
        <div className='hehe3'>
        <img src={image} alt="Welcome"></img>
        </div>
        </div>
        <div className="features-container">
            <div className="feature-box">
            <h2>1</h2>
            <p>Translate legal documents into any regional language</p>
            </div>
            <div className="feature-box">
            <h2>2</h2>
            <p>Get Simplified Versions of any legal document pertaining to your case</p>
            </div>
            <div className="feature-box">
            <h2>3</h2>
            <p>Find and view all case documents in a sorted manner</p>
            </div>
        </div>
        </div>
    );
    };

    export default Welcome;
