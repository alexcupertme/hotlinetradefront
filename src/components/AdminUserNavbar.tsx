import React, { useState } from "react";
import { Col, Row, Nav, NavItem, NavLink } from "reactstrap";

import { User, Home } from "ts-react-feather-icons";

import { Link } from "react-router-dom";

type TProps = {
  curState: string
}

export const AdminUserNavbar: React.FC<TProps> = ({curState}): JSX.Element => {
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
              to="/admin/user/settings"
              active={active === "1"}
              onClick={() => {
                toggle("1");
              }}
            >
              <User size={16} />
              Аналитика
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              tag={Link}
              to="/admin/user/settings/security"
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
              to="/admin/user/settings/stores"
              active={active === "3"}
              onClick={() => {
                toggle("3");
              }}
            >
              <a>
                <User size={16} />
                Магазины{" "}
              </a>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              tag={Link}
              to="/admin/user/settings/socials"
              active={active === "4"}
              onClick={() => {
                toggle("4");
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
