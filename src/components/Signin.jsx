import React from 'react'
import Header from './Header'

const Signin = () => {
  return (
    <>
     <Header/>
     <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card mt-5">
            <div className="card-header bg-secondary text-white">
              <h3>Login</h3>
            </div>
            <div className="card-body">
              <form >
                <div className="form-group">
                  <label htmlFor="username">Email</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                   
                   
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    
                   
                    required
                  />
                </div>
                <button type="submit" className="btn btn-outline-secondary my-3">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Signin
