import { ThemeColors } from "../../../../utility/context/ThemeColors";
import React, { useContext } from "react";
import { Col, Row } from "reactstrap";
import ProductOrders from "../components/ProductOrders";
import s from "./.module.css";
import CardTopClients from "../components/CardTopClients";
import CardTopProducts from "../components/CardTopProducts";
import AreaChart from "../components/AreaChart";
import { kFormatter } from "../../../../utility/Utils";
import {
  CreditCard,
  Package,
  ShoppingCart,
  Users,
} from "ts-react-feather-icons";

const Analytics: React.FC = ({}): JSX.Element => {
  // @ts-ignore
  const { colors } = useContext(ThemeColors);

  const db_data = {
    storeUsers: {
      keys: {
        title: "Пользователей",
        icon: <Users size={21} />,
      },
      series: [
        {
          name: "Orders",
          data: [10, 15, 8, 15, 7, 12, 8],
        },
      ],
      analyticsData: {
        orders: 1200,
      },
    },
    storeTransactions: {
      keys: {
        title: "Транзакций",
        icon: <CreditCard size={21} />,
      },
      series: [
        {
          name: "Orders",
          data: [10, 15, 8, 15, 7, 12, 8],
        },
      ],
      analyticsData: {
        orders: 97500,
      },
    },
    storeSells: {
      keys: {
        title: "Продаж",
        icon: <ShoppingCart size={21} />,
      },
      series: [
        {
          name: "Orders",
          data: [10, 15, 8, 15, 7, 12, 8],
        },
      ],
      analyticsData: {
        orders: 97500,
      },
    },
    storeBuys: {
      keys: {
        title: "Покупают (от всех товаров)",
        icon: <Package size={21} />,
      },
      series: [
        {
          name: "Orders",
          data: [10, 15, 8, 15, 7, 12, 8],
        },
      ],
      analyticsData: {
        orders: "60%",
      },
    },
  };

  return (
    <>
      <Row>
        <Col>
          <AreaChart
            db_data={db_data.storeUsers}
            color={"primary"}
            kFormatter={kFormatter}
            warning={colors.primary.main}
          />
        </Col>
        <Col>
          <AreaChart
            db_data={db_data.storeTransactions}
            color={"success"}
            kFormatter={kFormatter}
            warning={colors.success.main}
          />
        </Col>
        <Col>
          <AreaChart
            db_data={db_data.storeSells}
            color={"danger"}
            kFormatter={kFormatter}
            warning={colors.danger.main}
          />
        </Col>
        <Col>
          <AreaChart
            db_data={db_data.storeBuys}
            color={"warning"}
            kFormatter={kFormatter}
            warning={colors.warning.main}
          />
        </Col>
      </Row>

      <Row>
        <Col>
          <CardTopClients colors={colors} trackBgColor={"#E9ECEF"} />
        </Col>
        <Col>
          <CardTopProducts colors={colors} trackBgColor={"#E9ECEF"} />
        </Col>
        <Col>
          <ProductOrders />
        </Col>
      </Row>
    </>
  );
};

export default Analytics;
