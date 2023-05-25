import React, { useState, useRef, useEffect} from "react";
import "./Features.css";
import FeatureCard from "./FeatureCard";
import { FeaturesData } from "../data";
// import arrow_left from "../assets/arrow_left.svg";


const Features = () => {
  return (
    <div className="features-main">
      <div className="features-top">
          <h2>We are here to help you</h2>
          <p>At Mental care, there's no one-size-fit all approach to mental health. We tailor our care plans to fit each person's unique needs. At Mental care, there's no one-size-fit all approach to mental.</p>
      </div>
      <div className="features-bottom">
        <div className="feature-cards">
          {FeaturesData.slice().map(
            (feature, index) => (
              <FeatureCard
                key={feature.id}
                img={feature.img}
                title={feature.title}
                desc={feature.data}
              />
            )
          )}
        </div>
      
      </div>
    </div>
  );
};

export default Features;
