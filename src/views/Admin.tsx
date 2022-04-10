// @ts-nocheck
import { ThemeColors } from "../utility/context/ThemeColors";
import React, { useContext } from "react";
import s from "./.module.css";
import Avatar from "../@core/components/avatar";
import AvatarGroup from "../@core/components/avatar-group";
import { Col, Row } from "reactstrap";

import CardCongratulations from "./ui-elements/cards/advance/CardCongratulations";
import SubscribersGained from "./ui-elements/cards/statistics/SubscribersGained";
import { kFormatter } from "../utility/Utils";
import OrdersReceived from "./ui-elements/cards/statistics/OrdersReceived";
import AvgSessions from "./ui-elements/cards/analytics/AvgSessions";
import SupportTracker from "./ui-elements/cards/analytics/SupportTracker";

// ** Images
import jsonImg from "../assets/images/icons/json.png";
import ceo from "../assets/images/portrait/small/avatar-s-9.jpg";
import Earnings from "./ui-elements/cards/analytics/Earnings";
import InvoiceList from "./apps/invoice/list";

const Admin: React.FC = ({}): JSX.Element => {
  // ** Context

  const { colors } = useContext(ThemeColors);

  // ** Vars
  const avatarGroupArr = [
    {
      imgWidth: 33,
      imgHeight: 33,
      title: "Billy Hopkins",
      placement: "bottom",
      img: require("../assets/images/portrait/small/avatar-s-9.jpg").default,
    },
    {
      imgWidth: 33,
      imgHeight: 33,
      title: "Amy Carson",
      placement: "bottom",
      img: require("../assets/images/portrait/small/avatar-s-6.jpg").default,
    },
    {
      imgWidth: 33,
      imgHeight: 33,
      title: "Brandon Miles",
      placement: "bottom",
      img: require("../assets/images/portrait/small/avatar-s-8.jpg").default,
    },
    {
      imgWidth: 33,
      imgHeight: 33,
      title: "Daisy Weber",
      placement: "bottom",
      img: require("../assets/images/portrait/small/avatar-s-7.jpg").default,
    },
    {
      imgWidth: 33,
      imgHeight: 33,
      title: "Jenny Looper",
      placement: "bottom",
      img: require("../assets/images/portrait/small/avatar-s-20.jpg").default,
    },
  ];
  const data = [
    {
      title: "12 Invoices have been paid",
      content: "Invoices have been paid to the company.",
      meta: "",
      metaClassName: "me-1",
      customContent: (
        <div className="d-flex align-items-center">
          <img className="me-1" src={jsonImg} alt="data.json" height="23" />
          <span>data.json</span>
        </div>
      ),
    },
    {
      title: "Client Meeting",
      content: "Project meeting with john @10:15am.",
      meta: "",
      metaClassName: "me-1",
      color: "warning",
      customContent: (
        <div className="d-flex align-items-center">
          <Avatar img={ceo} />
          <div className="ms-50">
            <h6 className="mb-0">John Doe (Client)</h6>
            <span>CEO of Infibeam</span>
          </div>
        </div>
      ),
    },
    {
      title: "Create a new project for client",
      content: "Add files to new design folder",
      color: "info",
      meta: "",
      metaClassName: "me-1",
      customContent: <AvatarGroup data={avatarGroupArr} />,
    },
    {
      title: "Create a new project for client",
      content: "Add files to new design folder",
      color: "danger",
      meta: "",
      metaClassName: "me-1",
    },
  ];

  return (
    <div id="dashboard-analytics">
      <Row className="match-height">
        <Col lg="6" sm="12">
          <CardCongratulations />
        </Col>
        <Col lg="3" sm="6">
          <SubscribersGained
            kFormatter={kFormatter}
            warning={colors.primary.main}
          />
        </Col>
        <Col lg="3" sm="6">
          <OrdersReceived
            kFormatter={kFormatter}
            warning={colors.warning.main}
          />
        </Col>
      </Row>
      <Row className="match-height">
        <Col lg="6" xs="12">
          <AvgSessions primary={colors.primary.main} />
        </Col>
        <Col lg="6" xs="12">
          <Row>
            <Col>
              <Earnings success={colors.success.main} />
            </Col>
          </Row>
          <Row>
            <Col>
              <SupportTracker
                primary={colors.primary.main}
                danger={colors.danger.main}
              />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col xs="12">
          <InvoiceList />
        </Col>
      </Row>
    </div>
  );
};

export default Admin;
