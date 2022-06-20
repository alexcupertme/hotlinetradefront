import React from "react";
import { Card, CardBody, CardHeader, Col, Input, Label, Row } from "reactstrap";
import NumberInput from "../components/NumberInputSize";
import s from "./.module.css";

// ** Styles
import "../../../../@core/scss/react/libs/input-number/input-number.scss";
import { RippleButton } from "../../../../@core/components/ripple-button";
import TransactionsTable from "../components/TransactionsTable";

const Transactions: React.FC = ({}): JSX.Element => {
  return (
    <>
      <Row>
        <Col>
          <Card>
            <CardHeader className="border-bottom">
              <h4 style={{ margin: "0" }}>Базовые параметры</h4>
            </CardHeader>
            <CardBody className="mt-75">
              <Row>
                <Col md={4} className="d-flex justify-content-center">
                  <NumberInput step={0.5} nonMinus size="large" label="Комиссия" />
                </Col>
                <Col md={4} className="d-flex justify-content-center">
                  <NumberInput size="large" label="Мин. сумма" />
                </Col>
                <Col md={4} className="d-flex justify-content-center">
                  <NumberInput size="large" label="Макс. в день" />
                </Col>
              </Row>
              <Row className="mt-3">
                <Col>
                  {/* @ts-ignore */}
                  <RippleButton
                    style={{ width: "100%" }}
                    color="relief-primary"
                  >
                    Применить
                  </RippleButton>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card>
            <CardHeader className="border-bottom">
              <h4 style={{ margin: "0" }}>Параметры работы переводов</h4>
            </CardHeader>
            <CardBody className="mt-75">
              <Row>
                <Col sm={4}>
                  <div className="form-check form-check-primary mt-75">
                    <Input
                      type="checkbox"
                      id="primary-checkbox"
                      defaultChecked
                    />
                    <Label className="form-check-label" for="primary-checkbox">
                      Перевод по STEAMID
                    </Label>
                  </div>
                </Col>
                <Col>
                  <div className="form-check form-check-primary mt-75">
                    <Input
                      type="checkbox"
                      id="primary-checkbox"
                      defaultChecked
                    />
                    <Label className="form-check-label" for="primary-checkbox">
                      Перевод по CLIENTID
                    </Label>
                  </div>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          <TransactionsTable />
        </Col>
      </Row>
    </>
  );
};

export default Transactions;
