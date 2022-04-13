import StatsWithAreaChart from "../@core/components/widgets/stats/StatsWithAreaChart";
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
  CardLink,
  Button,
  Col,
  Container,
  Row,
} from "reactstrap";
import { Users, Eye, Package } from "ts-react-feather-icons";
import { kFormatter } from "../utility/Utils";
import OrdersReceived from "./ui-elements/cards/statistics/OrdersReceived";

const data = {
  subscribers_gained: {
    series: [
      {
        name: "Subscribers",
        data: [1, 2, 3, 4, 5, 6, 7],
      },
    ],
    analyticsData: {
      subscribers: 192600,
    },
  },
  quarterlySales: {
    series: [
      {
        name: "Sales",
        data: [10, 15, 7, 12, 3, 16],
      },
    ],
    analyticsData: {
      sales: "36%",
    },
  },
  ordersRecevied: {
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
};

const Home = () => {
  const options = {
    chart: {
      id: 'revenue',
      toolbar: {
        show: false
      },
      sparkline: {
        enabled: true
      }
    },
    grid: {
      show: false
    },
    colors: ["#28a745"],
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth',
      width: 2.5
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 0.9,
        opacityFrom: 0.7,
        opacityTo: 0.5,
        stops: [0, 80, 100]
      }
    },

    xaxis: {
      labels: {
        show: false
      },
      axisBorder: {
        show: false
      }
    },
    yaxis: {
      labels: {
        show: false
      }
    },
    tooltip: {
      x: { show: false }
    }
  }

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Kick start your project</CardTitle>
        </CardHeader>
        <CardBody>
          <CardText>All the best for your new project.</CardText>
          <CardText>
            Please make sure to read our{" "}
            <CardLink
              href="https://pixinvent.com/demo/vuexy-react-admin-dashboard-template/documentation/"
              target="_blank"
            >
              Template Documentation
            </CardLink>{" "}
            to understand where to go from here and how to use our template.
          </CardText>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Want to integrate JWT? 🔒</CardTitle>
        </CardHeader>
        <CardBody>
          <CardText>
            We carefully crafted JWT flow so you can implement JWT with ease and
            with minimum efforts.
          </CardText>
          <CardText>
            Please read our{" "}
            <CardLink
              href="https://pixinvent.com/demo/vuexy-react-admin-dashboard-template/documentation/docs/development/auth"
              target="_blank"
            >
              JWT Documentation
            </CardLink>{" "}
            to get more out of JWT authentication.
          </CardText>
        </CardBody>
      </Card>
      <Container>
        <Row>
          <Col>
            {" "}
            <StatsWithAreaChart
              icon={<Package size={21} />}
              color='warning'
              stats={kFormatter(data.ordersRecevied.analyticsData.orders)}
              statTitle='Orders Received'
              options={options}
              series={data.ordersRecevied.series}
              type='area'
            />
          </Col>
          <Col>
            {" "}
            <StatsWithAreaChart
              icon={<Eye size={21} />}
              color="danger"
              options={{...options, colors: ["#FF9920", "#FFFFFF"]}}
              stats={kFormatter(
                data.subscribers_gained.analyticsData.subscribers
              )}
              statTitle={data.subscribers_gained.series[0].name}
              type="area"
              series={data.subscribers_gained.series}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
