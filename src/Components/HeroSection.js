import React from "react";
import { Button } from "./Button";
import "./HeroSection.css";
import "../../src/App.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video-2.mp4" autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for ? </p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttoStyle="btn--outline"
          buttonSize="btn--large"
        >
          Get STARTED
        </Button>
        <Button
          className="btns"
          buttoStyle="btn--primary"
          buttonSize="btn--large"
        >
          Watch Trailer <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
