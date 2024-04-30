/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Component = ({ property1, className }) => {
  return (
    <div className={`component ${property1} ${className}`}>
      {property1 === "sidebar" && (
        <>
          <div className="text-wrapper-6">Conta xxxxxxxx-x</div>
          <div className="bem-vindo-usuario">
            Bem vindo, {"{"}usuario{"}"}
          </div>
          <div className="text-wrapper-7">Agência xxxx</div>
          <div className="frame">
            <img className="logout" alt="Logout" src="https://c.animaapp.com/v0SxTu3L/img/logout@2x.png" />
            <div className="text-wrapper-8">Logout</div>
          </div>
          <img className="img" alt="Male user" src="https://c.animaapp.com/v0SxTu3L/img/male-user-1@2x.png" />
          <img className="group-2" alt="Group" src="https://c.animaapp.com/v0SxTu3L/img/group-33@2x.png" />
        </>
      )}
    </div>
  );
};

Component.propTypes = {
  property1: PropTypes.oneOf(["male-user", "sidebar"]),
};
