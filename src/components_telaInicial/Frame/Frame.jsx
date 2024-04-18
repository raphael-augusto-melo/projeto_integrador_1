/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Frame = ({
  className,
  imageClassName,
  image = "https://c.animaapp.com/dLRYJhiQ/img/list-view@2x.png",
}) => {
  return (
    <div className={`frame ${className}`}>
      <div className="rectangle-2" />
      <div className="text-wrapper-3">Poupança</div>
      <img className={`image ${imageClassName}`} alt="Image" src={image} />
    </div>
  );
};

Frame.propTypes = {
  image: PropTypes.string,
};
