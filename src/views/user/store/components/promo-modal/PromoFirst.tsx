// @ts-nocheck
import React from "react";
import {
  ArrowLeft,
  ChevronRight,
  DollarSign,
  Package,
} from "ts-react-feather-icons";
import { Col, Input, Row } from "reactstrap";
import s from "./.module.css";
import { RippleButton } from "../../../../../@core/components/ripple-button";

const PromoFirst: React.FC = ({stepper, promoType, setPromoType}): JSX.Element => {

  console.log(stepper)

  return (
    <div>
      <p className="text-center">
        Необходимо выбрать вид промокода, для дальнейшей настройки.
      </p>

      <Row className="custom-options-checkable mt-2">
        <Input
          type="radio"
          defaultChecked
          id="moneyPromo"
          name="addressRadio"
          value="homeAddress"
          className="custom-option-item-check"
        />
        <label className="custom-option-item px-2 py-1" htmlFor="moneyPromo" onClick={() => setPromoType('money')}>
          <span className="d-flex align-items-center mb-50">
            <DollarSign className="font-medium-4 me-50" />
            <span className="custom-option-item-title h4 fw-bolder mb-0">
              Средства
            </span>
          </span>
          <span className="d-block">
            После активации, пользователю на баланс зачисляется указанная вами
            сумма.
          </span>
        </label>
      </Row>

      <Row className="custom-options-checkable mt-75">
        <Input
          type="radio"
          id="productPromo"
          name="addressRadio"
          value="homeAddress"
          className="custom-option-item-check"
        />
        <label className="custom-option-item px-2 py-1" htmlFor="productPromo" onClick={() => setPromoType('product')}>
          <span className="d-flex align-items-center mb-50">
            <Package className="font-medium-4 me-50" />
            <span className="custom-option-item-title h4 fw-bolder mb-0">
              Товар
            </span>
          </span>
          <span className="d-block">
            После активации, пользователю в корзину начисляется выбранный вами
            товар
          </span>
        </label>
      </Row>

      <Row className="mt-3 d-flex justify-content-end">
        <RippleButton
          onClick={() => stepper.next()}
          style={{ maxWidth: "170px" }}
          type="submit"
          color="relief-primary"
        >
          Продолжить
          <ChevronRight size={16} />
        </RippleButton>
      </Row>
    </div>
  );
};

export default PromoFirst;
