// @ts-nocheck
import { kFormatter } from "../../../utility/Utils";
import React, { useContext, useEffect, useState } from "react";
import { Card, CardHeader, Col, Row } from "reactstrap";
import {
  CreditCard,
  Package,
  ShoppingCart,
  Users,
} from "ts-react-feather-icons";
import StatsAreaPage from "../components/StatsAreaPage";
import { ThemeColors } from "../../../utility/context/ThemeColors";
import AdminStoresTable from "../components/AdminStoresTable";

const Stores: React.FC = ({}): JSX.Element => {
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
      <Row>
        <Col>
          <StatsAreaPage
            icon={<Users size={21} />}
            color="primary"
            warning={colors.primary.main}
            stats={kFormatter(data.analyticsData.subscribers)}
            statTitle="Общее кол-во пользователей"
            series={data.series}
          />
        </Col>
        <Col>
          <StatsAreaPage
            icon={<CreditCard size={21} />}
            color="success"
            warning={colors.success.main}
            stats={kFormatter(data.analyticsData.subscribers)}
            statTitle="Общая прибыль"
            series={data.series}
          />
        </Col>
        <Col>
          <StatsAreaPage
            icon={<ShoppingCart size={21} />}
            color="danger"
            warning={colors.danger.main}
            stats={kFormatter(data.analyticsData.subscribers)}
            statTitle="Общее кол-во транзакций"
            series={data.series}
          />
        </Col>
        <Col>
          <StatsAreaPage
            icon={<Package size={21} />}
            color="warning"
            warning={colors.warning.main}
            statTitle="Общее кол-во продаж"
            stats={kFormatter(data.analyticsData.subscribers)}
            series={data.series}
          />
        </Col>
      </Row>

      <Row>
        <Col>
          <Card>
            <CardHeader>
              <h4 style={{margin: '0'}}>Магазины</h4>
            </CardHeader>
            <AdminStoresTable />
          </Card>
        </Col>
      </Row>
    </>
  ) : null;
};

export default Stores;
