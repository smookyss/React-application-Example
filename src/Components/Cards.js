import React from "react";
import "./Cards.css";
import CardItems from "./CardItems";

import srcImage from "./../images/img-1.jpg";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these Epic Destinations!!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItems
              src={srcImage} //"/images/img-1.jpg"
              text="Explore the hidden waterfall deep inside the Amazon"
              label="Adventure"
              path="/services"
            />
            <CardItems
              src="/images/img-2.jpg"
              text="Travel Through the Island with a private Cruise"
              label="Luxury"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItems
              src="/images/img-3.jpg"
              text="Travel throught the Desert"
              label="Adventure"
              path="/services"
            />
            <CardItems
              src="/images/img-4.jpg"
              text="Travel for Activities"
              label="Activities"
              path="/services"
            />

            <CardItems
              src="/images/img-5.jpg"
              text="Travel for Activities"
              label="Activities"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
