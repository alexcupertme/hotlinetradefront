//@ts-nocheck
// ** React Imports
import { useEffect, useState } from "react";

// ** Third Party Components
import axios from "axios";
import Chart from "react-apexcharts";

import s from "./SupportTracker.module.css";

// ** Reactstrap Imports
import {
  Row,
  Col,
  Card,
  CardBody,
  CardText,
  CardTitle,
  CardHeader,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";

const SupportTracker = (props) => {
  // ** State
  const [data, setData] = useState(null);

  const db_data = {
    support_tracker: {
      title: "Техническая поддержка",
      last_days: ["Последние 28 дней", "Последний месяц", "Последний год"],
      totalTicket: 163,
      newTicket: 29,
      openTicket: 63,
      responseTime: 1,
    },
  };

  useEffect(() => {
    setData(db_data.support_tracker);
  }, []);

  const options = {
      plotOptions: {
        radialBar: {
          size: 150,
          offsetY: 20,
          startAngle: -150,
          endAngle: 150,
          hollow: {
            size: "65%",
          },
          track: {
            background: "#fff",
            strokeWidth: "100%",
          },
          dataLabels: {
            name: {
              offsetY: -5,
              fontFamily: "Montserrat",
              fontSize: "1rem",
            },
            value: {
              offsetY: 15,
              fontFamily: "Montserrat",
              fontSize: "1.714rem",
            },
          },
        },
      },
      colors: [props.danger],
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          type: "horizontal",
          shadeIntensity: 0.5,
          gradientToColors: [props.primary],
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100],
        },
      },
      stroke: {
        dashArray: 8,
      },
      labels: ["Completed Tickets"],
    },
    series = [83];

  return data !== null ? (
    <Card>
      <CardHeader className="pb-0">
        <CardTitle tag="h4">{data.title}</CardTitle>
        <UncontrolledDropdown className="chart-dropdown">
          <DropdownToggle
            color=""
            className="bg-transparent btn-sm border-0 p-50"
          >
            Последние 7 дней
          </DropdownToggle>
          <DropdownMenu end>
            {data.last_days.map((item) => (
              <DropdownItem className="w-100" key={item}>
                {item}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </UncontrolledDropdown>
      </CardHeader>
      <CardBody>
        <Row>
          <Col>
            <div className={s.cust_tickets}>
              <div className={s.ticket_wrapper}>
                <h1 className="font-large-2 fw-bolder mt-2 mb-0">
                  {data.totalTicket}
                </h1>
                <CardText>Заявок</CardText>
              </div>
            </div>
          </Col>
        </Row>
        <div className="d-flex justify-content-between mt-1">
          <div className="text-center">
            <CardText className="mb-50">Новых заявок</CardText>
            <span className="font-large-1 fw-bold">{data.newTicket}</span>
          </div>
          <div className="text-center">
            <CardText className="mb-50">Открытых заявок</CardText>
            <span className="font-large-1 fw-bold">{data.openTicket}</span>
          </div>
          <div className="text-center">
            <CardText className="mb-50">Время ответа</CardText>
            <span className="font-large-1 fw-bold">{data.responseTime}д</span>
          </div>
        </div>
      </CardBody>
    </Card>
  ) : null;
};
export default SupportTracker;
