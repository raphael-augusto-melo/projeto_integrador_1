/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const PixIconInactive = ({ className, image = "https://c.animaapp.com/v0SxTu3L/img/image-9.png" }) => {
  return (
    <div className={`pix-icon-inactive ${className}`}>
      <div className="overlap-group">
        <img className="image" alt="Image" src={image} />
      </div>
      <div className="div">Pix</div>
    </div>
  );
};

PixIconInactive.propTypes = {
  image: PropTypes.string,
};
