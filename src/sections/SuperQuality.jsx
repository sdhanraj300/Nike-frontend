import React from "react";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { shoe8 } from "../assets/images";
const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col ">
        <h2 className="font-palanquin text-4xl capitalize lg:max-w-lg font-bold">
          We provide you
          <br />
          <span className="text-coral-red">Super Quality</span> Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring premium comfort and style, we provide you with the best
          quality shoes.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to quality is what makes us stand out from the rest.
        </p>
        <div className="mt-11">
          <Button label="View Details" iconURL={arrowRight} />
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center">
      <img src={shoe8} alt="shoe8" width={570} height={522} className="object-contain"/>
      </div>
    </section>
  );
};

export default SuperQuality;
