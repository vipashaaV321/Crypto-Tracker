import React from "react";

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark display-4" style={{color:"#ffff",fontFamily:"fantasy"}}>
        <div className="container">
          <h2 className="navbar-brand" style={{ fontSize:"30px"}}>
          <i class="fa fa-btc" aria-hidden="true"></i>  CryptoCurrency Tracker
          </h2>
        </div>
      </nav>
    </div>
  );
}

export default Header;
