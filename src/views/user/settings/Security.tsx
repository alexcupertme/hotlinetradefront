import React from "react";
import s from "./.module.css";
import { Col, Row, Nav, NavItem, NavLink } from "reactstrap";
import { User } from "react-feather";
import SecurityContent from "../../apps/user/view/SecurityContent";

const Security: React.FC = ({}): JSX.Element => {
  return (
    <>
      <Row>
        <Col>
          <SecurityContent />
        </Col>
      </Row>
    </>
  );
};

export default Security;
