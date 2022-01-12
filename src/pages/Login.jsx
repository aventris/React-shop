import React, { useRef } from 'react';
import '../styles/Login.scss';

const Login = () => {
  const form = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(form.current);
    const data = {
      username: formData.get('email'),
      password: formData.get('password')
    }

    console.log(data);
  }

  return (
    <div className="Login">
      <div className="Login-container">
        <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" />
        <form onSubmit={handleSubmit} className="form" ref={form}>
          <label htmlFor="email" className="label">Email address</label>
          <input type="email" name="email" placeholder="platzi@example.com" className="input input-email" required={true} />
          <label htmlFor="password" className="label">Password</label>
          <input type="password" name="password" placeholder="*********" className="input input-password" />
          <button type='submit' className="primary-button login-button">
            Log In
          </button>
          <a href="/">Forgot my password</a>
        </form>
        <button className="secondary-button signup-button">
          Sign up
        </button>
      </div>
    </div>
  );
}

export default Login;
