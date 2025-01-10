import React from 'react';
import './SignIn.css';

const SignIn = () => {
  return (
    <div className="signin-container">
      <div className="signin-form">
        <label htmlFor="email">Your email</label>
        <input type="email" id="email" name="email" required />
        
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" required />
        
        <button type="submit">Log In</button>
        <a href="/forgot-password">Forgot password?</a>
        
        <p>Don't have an account? <a href="/sign-up">Sign Up</a></p>
      </div>
    </div>
  );
};

export default SignIn;
