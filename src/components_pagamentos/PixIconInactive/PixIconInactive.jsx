/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const PixIconInactive = ({
  className,
  overlapGroupClassName,
  imageClassName,
  image = "https://c.animaapp.com/7cEc4kU9/img/image-9.png",
  divClassName,
}) => {
  return (
    <a href="/TelaPix">
      <div className={`pix-icon-inactive ${className}`}>
        <div className={`image-wrapper ${overlapGroupClassName}`}>
          <img className={`image ${imageClassName}`} alt="Image" src={image} />
        </div>
        <div className={`text-wrapper ${divClassName}`}>Pix</div>
      </div>
    </a>
  );
};

PixIconInactive.propTypes = {
  image: PropTypes.string,
};
