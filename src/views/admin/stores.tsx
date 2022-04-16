import React from "react";
import { useLocation } from "react-router-dom";
import { Col, Row } from "reactstrap";
import CreateAppExample from "../modals/CreateApp";
import StoresTable from "../tables/data-tables/advance/StoresTable";
import s from "./.module.css";

const Stores: React.FC = ({}): JSX.Element => {
  function useQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
  }

  let query = useQuery();

  return (
    <>
      <Row>
        <Col>
          <StoresTable />
        </Col>
      </Row>

      

      {query.get("new") ? <CreateAppExample preActive={true}/> : <CreateAppExample preActive={false}/>}
    </>
  );
};

export default Stores;
