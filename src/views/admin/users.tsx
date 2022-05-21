import React, { useState } from "react";
import { Col, Row } from "reactstrap";

import StatsHorizontal from "../../@core/components/widgets/stats/StatsHorizontal";
import { User, UserCheck, UserPlus, UserX } from "ts-react-feather-icons";
import UsersTable from "../../supercomponents/tables/data-tables/advance/UsersTable";

const Users: React.FC = ({}): JSX.Element => {
  const [centeredModal, setCenteredModal] = useState(false);
  return (
    <>
      <Row>
        <Col>
          <StatsHorizontal
            icon={<User size={21} />}
            color="primary"
            stats="21,459"
            statTitle="Всего пользователей"
          />
        </Col>
        <Col>
          <StatsHorizontal
            icon={<UserPlus size={21} />}
            color="danger"
            stats="4,567"
            statTitle="Не подтвержденных"
          />
        </Col>
        <Col>
          <StatsHorizontal
            icon={<UserCheck size={21} />}
            color="success"
            stats="19,860"
            statTitle="Активных"
          />
        </Col>
        <Col>
          <StatsHorizontal
            icon={<UserX size={21} />}
            color="warning"
            stats="237"
            statTitle="Заблокированных"
          />
        </Col>
      </Row>

      <Row>
        <Col>
          <UsersTable />
        </Col>
      </Row>
    </>
  );
};

export default Users;
