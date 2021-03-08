import React from "react";
import './Services.css'
import ServicesCard from "./ServicesCard";

function Service() {
  return (
    <>
    <div className="cards" id="services">
      <h1 className="services__title">Services</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
          <ServicesCard
          label ="Fast Loan" 
          Img="https://images.unsplash.com/photo-1574607383476-f517f260d30b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80" 
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
          />
           <ServicesCard
          label ="Best Interest" 
          Img="https://images.unsplash.com/photo-1614370107885-fadf37cbc42d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NzF8fGxvYW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
          />
           <ServicesCard
          label ="No Collateral" 
          Img="https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=666&q=80" 
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
          />
      
          </ul>
        </div>
      </div>
    </div>
      
    </>
  );
}

export default Service;
