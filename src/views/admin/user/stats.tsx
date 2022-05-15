// @ts-nocheck
import CardTransactions from "../../../supercomponents/ui-elements/cards/advance/CardTransactions";
import React, { useContext, useEffect, useState } from "react";
import { Col, Row, } from "reactstrap";
import {
  Package,
} from "ts-react-feather-icons";

import { kFormatter } from "../../../utility/Utils";
import { ThemeColors } from "../../../utility/context/ThemeColors";
import StatsAreaPage from "../components/StatsAreaPage";

import ProfileHeader from "../components/ProfileHeader";

const Stats: React.FC = ({}): JSX.Element => {
  const [data, setData] = useState(null);

  const { colors } = useContext(ThemeColors);

  const db_data = {
    subs: {
      series: [
        {
          name: "Subscribers",
          data: [28, 40, 36, 52, 38, 60, 55],
        },
      ],
      analyticsData: {
        subscribers: 92600,
      },
    },
  };

  useEffect(() => {
    setData(db_data.subs);
  }, []);

  return data !== null ? (
    <>
      <ProfileHeader />

      <Row>
        <Col>
          <CardTransactions />
        </Col>
        <Col>
          <StatsAreaPage
            icon={<Package size={21} />}
            color="danger"
            warning={colors.danger.main}
            stats={kFormatter(data.analyticsData.subscribers)}
            statTitle="От всех продаж на сервисе"
            series={data.series}
          />
        </Col>
        <Col>
          <StatsAreaPage
            icon={<Package size={21} />}
            color="success"
            warning={colors.success.main}
            stats={kFormatter(data.analyticsData.subscribers)}
            statTitle="От всего оборота на сервисе"
            series={data.series}
            // options={options}
          />
        </Col>
        <Col>
          <StatsAreaPage
            icon={<Package size={21} />}
            color="warning"
            warning={colors.warning.main}
            statTitle="От всех продаж на сервисе"
            stats={kFormatter(data.analyticsData.subscribers)}
            statTitle="Пожертвовано"
            series={data.series}
            // options={options}
          />
        </Col>
      </Row>
    </>
  ) : null;
};

export default Stats;
