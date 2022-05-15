import React from "react";
import { Card, CardBody, CardHeader, Col, Input, Label, Row } from "reactstrap";
import NumberInput from "../components/NumberInputSize";
import s from "./.module.css";

// ** Styles
import "../../../../@core/scss/react/libs/input-number/input-number.scss";
import { RippleButton } from "../../../../@core/components/ripple-button";
import TransactionsTable from "../components/TransactionsTable";

const Parameters: React.FC = ({}): JSX.Element => {
  return (
    <>
      <Row>
        <Col>
          <Card>
            <CardHeader className="border-bottom">
              <div className="f-flex direction-column">
                <h4>Базовые параметры</h4>
                <h6 style={{ margin: "0", fontWeight: "400" }}>
                  Посредственные параметры в работе магазина
                </h6>
              </div>
            </CardHeader>
            <CardBody className="mt-75">
              <Row>
                <Col md={6} className="d-flex justify-content-center">
                  <NumberInput size="large" label="Стартовый баланс" />
                </Col>
                <Col md={6} className="d-flex justify-content-center">
                  <NumberInput size="large" label="Мин. сумма" />
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
              <div className="f-flex direction-column">
                <h4>Параметры работы переводов</h4>
                <h6 style={{ margin: "0", fontWeight: "400" }}>
                  Основные параметры в работе магазина
                </h6>
              </div>
            </CardHeader>
            <CardBody className="mt-75">
              <Row>
                <Col sm={5}>
                  <div className="form-check form-check-primary mt-75">
                    <Input
                      type="checkbox"
                      id="primary-checkbox"
                      defaultChecked
                    />
                    <Label className="form-check-label" for="primary-checkbox">
                      Требовать авторизацию
                    </Label>
                  </div>
                </Col>
                <Col>
                  <div className="form-check form-check-primary mt-75">
                    <Input
                      type="checkbox"
                      id="site-checkbox"
                      defaultChecked
                    />
                    <Label className="form-check-label" for="site-checkbox">
                      Отключить сайт
                    </Label>
                  </div>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Parameters;
