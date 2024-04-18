/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const IconPagInactive = ({
  className,
  barcodeClassName,
  barcode = "https://c.animaapp.com/dLRYJhiQ/img/list-view@2x.png",
}) => {
  return (
    <div className={`icon-pag-inactive ${className}`}>
      <div className="rectangle" />
      <div className="text-wrapper-2">Pagamentos</div>
      <img className={`barcode ${barcodeClassName}`} alt="Barcode" src={barcode} />
    </div>
  );
};

IconPagInactive.propTypes = {
  barcode: PropTypes.string,
};
