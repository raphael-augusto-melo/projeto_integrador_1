import React from "react";
import { Group } from "../../components_pagamentos/Group";
import { IconBolInactive } from "../../components_pagamentos/IconBolInactive";
import { PixIconInactive } from "../../components_pagamentos/PixIconInactive";
import "./style_pagamentos.css";

export const TelaPagamentos = () => {
  return (
    <div className="tela-pagamentos">
      <div className="div-2">
        <div className="overlap">
          <div className="text-wrapper-2">Pagamentos</div>
          <Group className="group-29" property1="default" />
        </div>
        <p className="p">Selecione a forma que deseja realizar o pagamento</p>
        <div className="overlap-2">
          <PixIconInactive
            className="button-icon-pix"
            divClassName="button-icon-pix-2"
            image="https://c.animaapp.com/7cEc4kU9/img/image-9-1@2x.png"
            imageClassName="design-component-instance-node"
            overlapGroupClassName="pix-icon-inactive-instance"
          />
          <IconBolInactive className="button-icon-bol" />
        </div>
      </div>
    </div>
  );
};

export default TelaPagamentos;