import React from 'react';

const Login = () => {
  return (
    <>
      <main className="form-signin">
        <form>
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
          <div className="form-floating mb-3">
            <input type="email" className="form-control" name="email" placeholder='Email' required />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input type="password" className="form-control" name="password" placeholder='Password' required />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <div className="form-check text-start my-1"></div>
          <button className='btn btn-primary w-100 mb-4'>Login</button>
          <button className="btn btn-success w-100 py-2">Register</button>
        </form>
      </main>
      </>
  );
};

export default Login;
