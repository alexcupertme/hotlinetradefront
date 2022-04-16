import React, { useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Col,
  Row,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import s from "../../../styles/Settings.module.css";
import { User, Home } from "ts-react-feather-icons";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";

import { Link } from "react-router-dom";

import Social from "./Social";
import Security from "./Security";
import Common from "./Common";
import Billing from "./Billing";
import Notifications from "./Notifications";

export const Navbar: React.FC = ({}): JSX.Element => {
  const [active, setActive] = useState("1");

  const toggle = (tab) => {
    setActive(tab);
  };
  return (
    <Row>
      <Col>
        <Nav pills>
          <NavItem>
            <NavLink
              tag={Link}
              to="/user/settings"
              active={active === "1"}
              onClick={() => {
                toggle("1");
              }}
            >
              <User size={16} />
              Основное
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              tag={Link}
              to="/user/settings/security"
              active={active === "2"}
              onClick={() => {
                toggle("2");
              }}
            >
              <User size={16} />
              Безопасность
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              tag={Link}
              to="/user/settings/billing"
              active={active === "3"}
              onClick={() => {
                toggle("3");
              }}
            >
              <User size={16} />
              Billings & Plans
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              tag={Link}
              to="/user/settings/notifications"
              active={active === "4"}
              onClick={() => {
                toggle("4");
              }}
            >
              <User size={16} />
              Notifications
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              tag={Link}
              to="/user/settings/socials"
              active={active === "5"}
              onClick={() => {
                toggle("5");
              }}
            >
              <a>
                <User size={16} />
                Интеграции{" "}
              </a>
            </NavLink>
          </NavItem>
        </Nav>
      </Col>
    </Row>
  );
};
