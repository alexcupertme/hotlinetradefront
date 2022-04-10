// @ts-nocheck
import React, { useState } from "react";
import {
  Button,
  Col,
  Input,
  InputGroup,
  InputGroupText,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
} from "reactstrap";
import TableStriped from "../tables/reactstrap/TableStriped";
import s from "../../styles/Payments.module.css";
import { RippleButton } from "../../@core/components/ripple-button";

import SliderScalePips from "../extensions/sliders/SliderScalePips";

const Payments: React.FC = ({}): JSX.Element => {
  const [centeredModal, setCenteredModal] = useState(false);
  // @ts-nocheck
  return (
    <>
      <Row>
        <div className={s.head_content}>
          <div className={s.payments_title}>Редактирование ПС на вывод</div>
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
          <TableStriped />
        </Col>
      </Row>
    </>
  );
};

export default Payments;
