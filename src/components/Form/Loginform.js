import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../Button";
import './Loginform.css'

function Loginform() {
  return (
    <>
      <div className="login-box">
        <form className="form-container">
          <input type="email" placeholder="Email" />
          <br/>
          <input type="password" placeholder="Password" />
          <br/>
          <Button className='btns' buttonSize='btn--wide' buttonColor='light__purple'>
                      Login
                    </Button>
                    <br />
          <Link to="/" className="mutedlink">
            Forgot password?
          </Link>
        </form>
      </div>
    </>
  );
}

export default Loginform;
