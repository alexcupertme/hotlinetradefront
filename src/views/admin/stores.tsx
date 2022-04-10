import React from "react";
import { Col, Row } from "reactstrap";
import StoresTable from "../tables/data-tables/advance/StoresTable";
import s from "./.module.css";

const Stores: React.FC = ({}): JSX.Element => {
  return (
    <>
      <Row>
        <Col>
          <StoresTable />
        </Col>
      </Row>
    </>
  );
};

export default Stores;
