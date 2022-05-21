// @ts-nocheck
import { RippleButton } from "../../../@core/components/ripple-button";
import React, { useState } from "react";
import { CardHeader, Col, Row, Card } from "reactstrap";
import s from "./.module.css";
import RefTable from "./components/RefTable";
import ReferEarnModal from "../../../supercomponents/modals/ReferEarn";

const Ref: React.FC = ({}): JSX.Element => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Row>
        <Col>
          <h2>Список приглашенных</h2>
        </Col>
        <Col className="d-flex justify-content-end">
          <RippleButton color="relief-primary" onClick={() => setShow(true)}>Получить ссылку</RippleButton>
        </Col>
      </Row>

      <ReferEarnModal show={show} setShow={setShow} />

      <Row className="mt-2">
        <Col>
          <Card>
            <CardHeader>
              <h4 style={{ margin: "0" }}>Платежные системы</h4>
            </CardHeader>
            <RefTable />
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Ref;
