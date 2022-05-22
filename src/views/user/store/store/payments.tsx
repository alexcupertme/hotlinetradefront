import React from "react";
import { Badge, Card, Col, Row } from "reactstrap";

import image from "../../../../assets/images/payments/1.png";
import { RippleButton } from "../../../../@core/components/ripple-button";
import PaymentCard from "../components/paymentCard";

const Payments: React.FC = ({}): JSX.Element => {
  return (
    <>
      <Row>
        <Col>
          <PaymentCard />
          <PaymentCard />
          <PaymentCard />
        </Col>
      </Row>
    </>
  );
};

export default Payments;
