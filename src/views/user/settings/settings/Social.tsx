import React from "react";
import {
  Badge,
  Breadcrumb,
  BreadcrumbItem,
  Col,
  Nav,
  NavItem,
  NavLink,
  Row,
} from "reactstrap";



import { Home, User } from "ts-react-feather-icons";
import s from "../../../styles/Social.module.css";
import Connections from "../../../../supercomponents/apps/user/view/Connections";

const Social: React.FC = ({}): JSX.Element => {
  return (
    <>
      <Row>
        <Col>
          <Connections />
        </Col>
      </Row>
    </>
  );
};

export default Social;
