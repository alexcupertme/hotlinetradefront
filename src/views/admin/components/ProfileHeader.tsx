// @ts-nocheck
import Avatar from "../../../@core/components/avatar";
import { RippleButton } from "../../../@core/components/ripple-button";
import React, { useState } from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import { Activity, Check, Flag, Star, User } from "ts-react-feather-icons";
import s from "./.module.css";
import * as Icon from "react-feather";
import EditUserExample from "./EditUserModal";

const ProfileHeader: React.FC = ({}): JSX.Element => {
  const transactionsArr = [
    {
      title: "3000₽",
      color: "light-primary",
      subtitle: "Средств на счету",
      Icon: Icon["Pocket"],
      down: true,
    },
    {
      title: "990₽",
      color: "light-info",
      subtitle: "Средств на выводе",
      Icon: Icon["CreditCard"],
      down: true,
    },
  ];

  const renderTransactions = () => {
    return transactionsArr.map((item) => {
      return (
        <div key={item.title} className="transaction-item">
          <div className="d-flex">
            <Avatar
              contentStyles={{ width: "40px", height: "100%" }}
              className="rounded me-75"
              color={item.color}
              icon={<item.Icon size={18} />}
            />
            <div className="me-75">
              <div>{item.title}</div>
              <div>{item.subtitle}</div>
            </div>
          </div>
        </div>
      );
    });
  };

  const [show, setShow] = useState(false);

  return (
    <>
      <EditUserExample show={show} setShow={setShow} />

      <Row>
        <Col>
          <Card>
            <CardBody>
              <Row>
                <Col>
                  <div className="d-flex">
                    <div className="me-25">
                      <img
                        className="rounded me-50"
                        src={"https://via.placeholder.com/110"}
                        alt="Generic placeholder image"
                        height="110"
                        width="110"
                      />
                    </div>
                    <div className="d-flex align-items-center mt-75 ms-1">
                      <div className="">
                        <h4>Selina Kyle</h4>
                        <h6>irina@wayne.com</h6>
                        <RippleButton
                          className="mt-75 me-75"
                          size="md"
                          color="relief-primary"
                          onClick={() => setShow(true)}
                        >
                          Редактировать
                        </RippleButton>
                        <RippleButton
                          className="mt-75"
                          color="rounded-circle"
                          size="md"
                          outline
                          color="danger"
                        >
                          Заблокировать
                        </RippleButton>
                      </div>
                    </div>
                  </div>
                  <span
                    style={{ marginTop: "25px", minHeight: "50px" }}
                    className="d-flex"
                  >
                    {renderTransactions()}
                  </span>
                </Col>
                <Col className="d-flex justify-content-end ">
                  <div className="d-flex">
                    <div className="me-5">
                      <div className="d-flex align-items-center mb-75">
                        <span style={{ width: "300px" }}>
                          <User className="me-75" />
                          <span>Пользователь</span>
                        </span>
                        <span>
                          <span>catwomen</span>
                        </span>
                      </div>
                      <div className="d-flex align-items-center mb-75">
                        <span style={{ width: "300px" }}>
                          <Check className="me-75" />
                          <span>Статус</span>
                        </span>
                        <span>
                          <span>Активный</span>
                        </span>
                      </div>
                      <div className="d-flex align-items-center mb-75">
                        <span style={{ width: "300px" }}>
                          <Star className="me-75" />
                          <span>Роль</span>
                        </span>
                        <span>
                          <span>Пользователь</span>
                        </span>
                      </div>
                      <div className="d-flex align-items-center mb-75">
                        <span style={{ width: "300px" }}>
                          <Flag className="me-75" />
                          <span>Страна</span>
                        </span>
                        <span>
                          <span>RU</span>
                        </span>
                      </div>
                      <div className="d-flex align-items-center mb-75">
                        <span style={{ width: "300px" }}>
                          <Activity className="me-75" />
                          <span>Последнее действие</span>
                        </span>
                        <span>
                          <span>1 час 35 мин назад</span>
                        </span>
                      </div>
                    </div>
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

export default ProfileHeader;
