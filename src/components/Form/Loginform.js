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
          <input type="password" placeholder="Password" />
          <br />
          <Link to="/" className="mutedlink">
            forgot your password?
          </Link>
          <Button buttonSize='btn--wide' buttonColor='light__purple'>
                      Login
                    </Button>
        </form>
      </div>
    </>
  );
}

export default Loginform;
