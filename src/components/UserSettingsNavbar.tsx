import React, { useState } from "react";
import {
  Col,
  Row,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

import { User, Home } from "ts-react-feather-icons";

import { Link } from "react-router-dom";

type TProps = {
  curState: string
}

export const UserSettingsNavbar: React.FC<TProps> = ({curState}): JSX.Element => {
  const [active, setActive] = useState(curState);

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
              to="/user/settings/socials"
              active={active === "3"}
              onClick={() => {
                toggle("3");
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
