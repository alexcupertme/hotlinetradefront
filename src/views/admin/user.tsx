import React, { useContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  Button,
  Col,
  Input,
  InputGroup,
  InputGroupText,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
  Card,
  CardHeader,
} from "reactstrap";
import TableStriped from "../../supercomponents/tables/reactstrap/TableStriped";
import s from "../../styles/UserPage.module.css";
import { RippleButton } from "../../@core/components/ripple-button";
import Social from "./user/social";
import Security from "./user/security";
import Stats from "./user/stats";
import { AdminUserNavbar } from "../../components/AdminUserNavbar";
import Stores from "./user/stores";

const UserPage: React.FC = ({}): JSX.Element => {
  const [active, setActive] = useState("1");

  const toggle = (tab) => {
    setActive(tab);
  };

  return (
    <>
      <Row>
        <Col>
          <Router>
            <Switch>
              <Route path="/admin/user/settings/security">
                <AdminUserNavbar curState="2" />
                <Security />
              </Route>
              <Route path="/admin/user/settings/stores">
                <AdminUserNavbar curState="3" />
                <Stores />
              </Route>
              <Route path="/admin/user/settings/socials">
                <AdminUserNavbar curState="4" />
                <Social />
              </Route>
              <Route path="/admin/user/settings/">
                <AdminUserNavbar curState="1" />
                <Stats />
              </Route>
            </Switch>
          </Router>
        </Col>
      </Row>
    </>
  );
};

export default UserPage;
