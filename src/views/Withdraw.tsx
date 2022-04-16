// @ts-nocheck
import { selectThemeColors } from "../utility/Utils";
import React from "react";
import ReactSelect from "react-select";
import {
  Alert,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Card,
  CardHeader,
  Col,
  Input,
  InputGroup,
  Label,
  Pagination,
  PaginationItem,
  PaginationLink,
  Row,
} from "reactstrap";
import s from "../styles/Withdraw.module.css";

import { RippleButton } from "../@core/components/ripple-button";
import TableStriped from "./tables/reactstrap/TableStriped";
import TableHover from "./tables/reactstrap/TableHover";
import WithdrawTable from "./tables/reactstrap/WithdrawTable";

const Withdraw: React.FC = ({}): JSX.Element => {
  return (
    <>
      <div className={s.page_header}>
        <Row>
          <Col>
            <div className={s.page_nav}>
              <div className={s.page_title}>Вывод средств</div>
              <Breadcrumb listClassName="breadcrumb-chevron">
                <BreadcrumbItem>
                  <a href="#">Home</a>
                </BreadcrumbItem>
                <BreadcrumbItem active>Library</BreadcrumbItem>
              </Breadcrumb>
            </div>
          </Col>
        </Row>
      </div>

      <Row>
        <Col>
          <Card>
            <div className={s.card_header}>
              <span>Запросить выплату</span>
            </div>
            <div className={s.inputs}>
              <div className={s.input_label}>Сумма</div>
              <InputGroup>
                <Input placeholder="Сумма" />
              </InputGroup>

              <div className={s.input_label}>Платежная система</div>
              <ReactSelect
                placeholder="Начните вводить название"
                className="react-select"
                classNamePrefix="select"
                options={[
                  { value: "QIWI Bank 1", label: "QIWI Bank 1" },
                  { value: "QIWI Bank 2", label: "QIWI Bank 2" },
                  { value: "QIWI Bank 3", label: "QIWI Bank 3" },
                ]}
                theme={selectThemeColors}
              />

              <div className={s.input_label}>Реквизиты / Номер счёта</div>
              <InputGroup>
                <Input placeholder="(703) 687-3352" />
              </InputGroup>

              <div className={s.button_wrap}>
                <RippleButton color="relief-primary">
                  Запроси выплату
                </RippleButton>
              </div>
            </div>
          </Card>
        </Col>

        <Col>
          <Row>
            <Col>
              <Alert color="primary">
                <h4 className="alert-heading">Внимание!</h4>
                <p className={s.alert_set}>
                  При переводе может взиматься коммисия системы или банка, по
                  этой причине просим сначала ознакомиться с условиями перевода
                  средств вашей платёжной системы или банка.
                </p>
              </Alert>
            </Col>
          </Row>
          <Row>
            <Col>
              <Alert color="primary">
                <h4 className="alert-heading">Вывод средств</h4>
                <p className={s.alert_set}>
                  Выплаты происходят в течение 72 часов после подачи заявки.
                </p>
              </Alert>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row>
        <Col>
          <Card>
            <CardHeader>
              <span className={s.table_header}>История выплат</span>
            </CardHeader>
            <WithdrawTable />
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          <Pagination aria-label="Page navigation example">
            <PaginationItem disabled>
              <PaginationLink first href="#" />
            </PaginationItem>
            <PaginationItem disabled>
              <PaginationLink href="#" previous />
            </PaginationItem>
            <PaginationItem active>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">4</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">5</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" next />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" last />
            </PaginationItem>
          </Pagination>
        </Col>
      </Row>
    </>
  );
};

export default Withdraw;
