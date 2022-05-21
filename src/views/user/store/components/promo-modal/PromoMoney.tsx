// @ts-nocheck
import React, { useContext, useState } from "react";
import { ArrowLeft, DollarSign, Package } from "ts-react-feather-icons";
import { Col, Input, Label, Row } from "reactstrap";
import s from "./.module.css";
import { RippleButton } from "../../../../../@core/components/ripple-button";
import Select from "react-select";
import PickerRange from "../PickerRange";
import { selectThemeColors } from "../../../../../utility/Utils";
import NumberInput from "../NumberInputSize";

const PromoMoney: React.FC = ({ stepper }): JSX.Element => {
  const [saleTimer, setSaleTimer] = useState(false);
  const [saleType, setSaleType] = useState("");

  return (
    <>
      <h5
        style={{ fontWeight: "400", marginTop: "-15px" }}
        className="text-center"
      >
        Необходимо заполнить все поля
      </h5>

      <Row className="mt-75">
        <Col>
          <Label for="promoCode">Промо-код</Label>
          <Input id="promoCode" placeholder="GDRF-232G-G" />
        </Col>
      </Row>

      <Row
        className="mt-2 mb-2 d-flex justify-content-evenly"
        style={{ margin: "0 auto" }}
        sm={2}
      >
        <Col>
          <NumberInput size="large" label="Лимит акт." />
        </Col>
        <Col sm={4}>
          <NumberInput size="large" label="Сумма" isRoubles/>
        </Col>
      </Row>
      <Row className="mt-3">
        <div className="d-flex align-items-center">
          <div className="form-switch form-check-primary">
            <Input
              type="switch"
              id="switch-primary"
              name="primary"
              onChange={(e) => setSaleTimer(e.target.checked)}
            />
          </div>
          <Label for="switch-primary" className="form-check-label">
            Временный промо-код
          </Label>
        </div>
      </Row>
      {saleTimer ? (
        <Row className="mb-75 mt-1">
          <Col>
            <PickerRange />
          </Col>
        </Row>
      ) : null}
      <Col className="text-center mt-3" xs={12}>
        <RippleButton type="submit" className="me-1" color="relief-primary">
          Добавить
        </RippleButton>
        <RippleButton
          color="relief-danger"
          onClick={() => {
            stepper.previous();
          }}
        >
          Назад
        </RippleButton>
      </Col>
    </>
  );
};

export default PromoMoney;
