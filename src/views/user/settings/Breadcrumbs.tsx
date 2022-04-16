import React from "react";

import { Breadcrumb, BreadcrumbItem, Col, Row } from "reactstrap";

import { User, Home } from "ts-react-feather-icons";

import s from "../../../styles/Settings.module.css";

export const Breadcrumbs: React.FC = ({}): JSX.Element => {
  return (
    <div className={s.page_header}>
      <Row>
        <Col>
          <div className={s.page_nav}>
            <div className={s.page_title}>Аккаунт</div>
            <Breadcrumb listClassName="breadcrumb-chevron">
              <BreadcrumbItem>
                <Home color="#7367F0" size={18} />
              </BreadcrumbItem>
              <BreadcrumbItem>
                <a href="/admin">Home</a>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <a href="/user/settings">User</a>
              </BreadcrumbItem>
              <BreadcrumbItem active>Настройки аккаунта</BreadcrumbItem>
            </Breadcrumb>
          </div>
        </Col>
      </Row>
    </div>
  );
};
