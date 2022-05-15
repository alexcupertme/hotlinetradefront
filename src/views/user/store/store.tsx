import React from "react";
import { Col, Row } from "reactstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import s from "./.module.css";
import { UserStoreNav } from "../../../components/UserStoreNav";
import Main from "./store/main";
import Category from "./store/category";
import Analytics from "./store/analytics";
import Staff from "./store/staff";
import Servers from "./store/servers";
import Links from "./store/links";
import Promo from "./store/promo";
import Transactions from "./store/transactions";
import Users from "./store/users";
import Sale from "./store/sale";
import Advanced from "./store/advanced";
import Parameters from "./store/parameters";
import Appearance from "./store/appearance";

const Store: React.FC = ({}): JSX.Element => {
  return (
    <>
      <Row className="mb-75">
        <Col className="d-flex align-items-end">
          <h2 style={{ margin: "0" }} className="me-75">
            SHOP NAME
          </h2>
          <span style={{ opacity: ".7" }}>name.dayzshop.ru</span>
        </Col>
      </Row>

      <Row>
        <Col>
          <Router>
            <Switch>
              <Route path="/store/main">
                <UserStoreNav curState="1" />
                <Main />
              </Route>
              <Route path="/store/category">
                <UserStoreNav curState="2" />
                <Category />
              </Route>
              <Route path="/store/analytics">
                <UserStoreNav curState="3" />
                <Analytics />
              </Route>
              <Route path="/store/staff">
                <UserStoreNav curState="4" />
                <Staff />
              </Route>
              <Route path="/store/servers">
                <UserStoreNav curState="5" />
                <Servers />
              </Route>
              <Route path="/store/links">
                <UserStoreNav curState="6" />
                <Links />
              </Route>
              <Route path="/store/promo">
                <UserStoreNav curState="7" />
                <Promo />
              </Route>
              <Route path="/store/transactions">
                <UserStoreNav curState="8" />
                <Transactions />
              </Route>
              <Route path="/store/users">
                <UserStoreNav curState="9" />
                <Users />
              </Route>
              <Route path="/store/sale">
                <UserStoreNav curState="10" />
                <Sale />
              </Route>
              <Route path="/store/advanced">
                <UserStoreNav curState="11" />
                <Advanced />
              </Route>
              <Route path="/store/parameters">
                <UserStoreNav curState="12" />
                <Parameters />
              </Route>
              <Route path="/store/appearance">
                <UserStoreNav curState="13" />
                <Appearance />
              </Route>
            </Switch>
          </Router>
        </Col>
      </Row>
    </>
  );
};

export default Store;
