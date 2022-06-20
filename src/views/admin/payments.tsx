// @ts-nocheck
import React, { useState } from "react";
import {
  Col,
  Input,
  InputGroup,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
  Card,
  CardHeader,
} from "reactstrap";
import s from "../../styles/Payments.module.css";
import { RippleButton } from "../../@core/components/ripple-button";

import TableBasic from "../../supercomponents/tables/reactstrap/TableBasic";

const Payments: React.FC = ({}): JSX.Element => {
  const [centeredModal, setCenteredModal] = useState(false);
  return (
    <>
      <Row>
        <div className={s.head_content}>
          <h2 
          // className={s.payments_title}
          >Редактирование ПС на вывод</h2>
          <RippleButton
            color="relief-primary"
            onClick={() => setCenteredModal(!centeredModal)}
          >
            + Добавить
          </RippleButton>
        </div>
        <Modal
          className="modal-dialog-centered"
          isOpen={centeredModal}
          toggle={() => setCenteredModal(!centeredModal)}
        >
          <ModalHeader toggle={() => setCenteredModal(!centeredModal)}>
            Добавление платежной системы
          </ModalHeader>
          <ModalBody>
            <div className={s.input_label}>Название</div>
            <InputGroup>
              <Input placeholder="QIWI Банк" />
            </InputGroup>
            <div className={s.input_label}>Комиссия</div>
            <InputGroup>
              <Input placeholder="0.6%" />
            </InputGroup>
            <div className={s.switch_wrap}>
              <div className="form-switch form-check-primary">
                <Input
                  type="switch"
                  id="switch-primary"
                  name="primary"
                  defaultChecked
                />
              </div>
              <div className={s.label_wrap}>
                <Label for="switch-primary" className="form-check-label mb-50">
                  Активный
                </Label>
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <RippleButton
              color="relief-primary"
              onClick={() => setCenteredModal(!centeredModal)}
            >
              Добавить
            </RippleButton>
            <RippleButton
              color="relief-danger"
              onClick={() => setCenteredModal(!centeredModal)}
            >
              Отмена
            </RippleButton>
          </ModalFooter>
        </Modal>
      </Row>
      <Row>
        <Col>
          <Card>
            <CardHeader>
              <h4 className="h4" style={{margin: "0"}}>Платежные системы</h4>
            </CardHeader>
            <TableBasic />
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Payments;
