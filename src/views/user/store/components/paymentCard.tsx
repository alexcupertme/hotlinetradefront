import React, { useState } from "react";
import s from "./.module.css";
import { Badge, Card, Col, Row } from "reactstrap";

import image from "../../../../assets/images/payments/1.png";
import { RippleButton } from "../../../../@core/components/ripple-button";
import PaymentModal from "./PaymentModal";

const PaymentCard: React.FC = ({}): JSX.Element => {
  const [active, setActive] = useState(false);

  return (
    <>
      <Card>
        <Row className="d-flex justify-content-between align-items-center">
          <Col style={{ maxWidth: "27%" }}>
            <img src={image} alt="" />
          </Col>
          <Col style={{ width: "40%", borderRight: "1px solid #EBE9F1" }}>
            <h5>Встроенная платежная система</h5>
            <p>WWW.HOTLINETRADE.RU</p>
            <p>
              Встроенная платежная система для вашего сайта с игровым донатом.
              ПС доступа по умолчанию и не требует никаких дополнительных
              настроек.
            </p>
          </Col>
          <Col
            className="d-flex flex-column align-items-center justify-content-center p-3"
            style={{ maxWidth: "23%" }}
          >
            <div className="d-flex mb-2" style={{ width: "100%" }}>
              <Badge color="light-warning" className="me-75">
                4.5%
              </Badge>
              <Badge color="light-success">Функционирует</Badge>
            </div>
            {/* @ts-ignore  */}
            <RippleButton
              className="mb-50"
              style={{ width: "100%" }}
              color="relief-secondary"
              onClick={() => setActive(true)}
            >
              Бонусная система
            </RippleButton>
            {/* @ts-ignore  */}
            <RippleButton
              style={{ width: "100%" }}
              color="relief-primary"
              onClick={() => setActive(true)}
            >
              Настройки
            </RippleButton>
          </Col>
        </Row>
      </Card>
      <PaymentModal active={active} setActive={setActive} />
    </>
  );
};

export default PaymentCard;
