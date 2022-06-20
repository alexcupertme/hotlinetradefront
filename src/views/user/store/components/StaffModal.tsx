// @ts-nocheck
// ** React Imports
import { Dispatch, Fragment, SetStateAction, useState } from "react";

// ** Reactstrap Imports
import {
  Row,
  Col,
  Modal,
  Label,
  Input,
  Button,
  ModalBody,
  InputGroup,
  ModalHeader,
  FormFeedback,
  InputGroupText,
  FormGroup,
} from "reactstrap";

// ** Third Party Components
import classnames from "classnames";
import Cleave from "cleave.js/react";
import { Check, X } from "react-feather";
import { useForm, Controller } from "react-hook-form";
import { RippleButton } from "../../../../@core/components/ripple-button";

const defaultValues = {
  cardNumber: "",
};

type TProps = {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
};

const StaffModal: React.FC<TProps> = ({ show, setShow }): JSX.Element => {
  // ** States
  const [cardType, setCardType] = useState("");

  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(false);
  const [checkbox3, setCheckbox3] = useState(false);
  const [checkbox4, setCheckbox4] = useState(false);
  const [checkbox5, setCheckbox5] = useState(false);
  const [checkbox6, setCheckbox6] = useState(false);
  const [checkbox7, setCheckbox7] = useState(false);
  const [checkbox8, setCheckbox8] = useState(false);
  const [checkbox9, setCheckbox9] = useState(false);
  const [checkbox10, setCheckbox10] = useState(false);

  const handleClickCheckbox = () => {
    if (checkbox1) {
      setCheckbox1(false);
      setCheckbox2(false);
      setCheckbox3(false);
      setCheckbox4(false);
      setCheckbox5(false);
      setCheckbox6(false);
      setCheckbox7(false);
      setCheckbox8(false);
      setCheckbox9(false);
      setCheckbox10(false);
    } else {
      setCheckbox1(true);
      setCheckbox2(true);
      setCheckbox3(true);
      setCheckbox4(true);
      setCheckbox5(true);
      setCheckbox6(true);
      setCheckbox7(true);
      setCheckbox8(true);
      setCheckbox9(true);
      setCheckbox10(true);
    }
  };

  return (
    <Fragment>
      <Modal
        isOpen={show}
        toggle={() => setShow(!show)}
        style={{ maxWidth: "670px" }}
        className="modal-dialog-centered"
        onClosed={() => setCardType("")}
      >
        <ModalHeader
          className="bg-transparent"
          toggle={() => setShow(!show)}
        ></ModalHeader>
        <ModalBody className="px-sm-3 mx-50 pb-2">
          <h1 className="text-center mb-1">Добавление сотрудника</h1>
          <p className="text-center">
            Просим вас не предоставлять доступ незнакомым и недоверенным
            пользователям
          </p>
          <Label for="exampleEmail">Email</Label>
          <Input
            id="exampleEmail"
            name="email"
            placeholder="d1xys@bk.ru"
            type="email"
          />
          <Row className="mt-2">
            <Col>
              <h4>Права</h4>
            </Col>
          </Row>
          <div
            className="mt-1"
            // style={{ overflowY: "scroll" }}
          >
            <div
              className="d-flex pb-75 pt-75 border-bottom"
              onClick={() => handleClickCheckbox()}
            >
              <Col md="9" onClick={handleClickCheckbox}>
                <Label
                  for="checkbox1"
                  style={{ fontSize: "14px", fontWeight: "500" }}
                  onClick={() => handleClickCheckbox()}
                >
                  Полный доступ
                </Label>
              </Col>
              <Col onClick={handleClickCheckbox}>
                <FormGroup check>
                  <Label for="checkbox1">Выбрать все</Label>
                  <Input
                    id="checkbox1"
                    checked={checkbox1}
                    onClick={() => handleClickCheckbox()}
                    type="checkbox"
                  />
                </FormGroup>
              </Col>
            </div>
            <span
              className="d-flex pb-75 pt-75 border-bottom"
              onClick={
                checkbox2 ? () => setCheckbox2(false) : () => setCheckbox2(true)
              }
            >
              <Col md="9">
                <Label
                  for="checkbox2"
                  style={{ fontSize: "14px", fontWeight: "500" }}
                >
                  Товары
                </Label>
              </Col>
              <Col>
                <FormGroup check>
                  <Label for="checkbox2" check>
                    Разрешить
                  </Label>
                  <Input checked={checkbox2} id="checkbox2" type="checkbox" />
                </FormGroup>
              </Col>
            </span>
            <span
              className="d-flex pb-75 pt-75 border-bottom"
              onClick={
                checkbox3 ? () => setCheckbox3(false) : () => setCheckbox3(true)
              }
            >
              <Col md="9">
                <Label
                  for="checkbox3"
                  style={{ fontSize: "14px", fontWeight: "500" }}
                >
                  Информация
                </Label>
              </Col>
              <Col>
                <FormGroup check>
                  <Label for="checkbox3" check>
                    Разрешить
                  </Label>
                  <Input checked={checkbox3} id="checkbox3" type="checkbox" />
                </FormGroup>
              </Col>
            </span>
            <span
              className="d-flex pb-75 pt-75 border-bottom"
              onClick={
                checkbox4 ? () => setCheckbox4(false) : () => setCheckbox4(true)
              }
            >
              <Col md="9">
                <Label
                  for="checkbox4"
                  style={{ fontSize: "14px", fontWeight: "500" }}
                >
                  Параметры
                </Label>
              </Col>
              <Col>
                <FormGroup check>
                  <Label for="checkbox4" check>
                    Разрешить
                  </Label>
                  <Input checked={checkbox4} id="checkbox4" type="checkbox" />
                </FormGroup>
              </Col>
            </span>
            <span
              className="d-flex pb-75 pt-75 border-bottom"
              onClick={
                checkbox5 ? () => setCheckbox5(false) : () => setCheckbox5(true)
              }
            >
              <Col md="9">
                <Label
                  for="checkbox5"
                  style={{ fontSize: "14px", fontWeight: "500" }}
                >
                  Внешний вид
                </Label>
              </Col>
              <Col>
                <FormGroup check>
                  <Label for="checkbox5" check>
                    Разрешить
                  </Label>
                  <Input checked={checkbox5} id="checkbox5" type="checkbox" />
                </FormGroup>
              </Col>
            </span>
            <span
              className="d-flex pb-75 pt-75 border-bottom"
              onClick={
                checkbox6 ? () => setCheckbox6(false) : () => setCheckbox6(true)
              }
            >
              <Col md="9">
                <Label
                  for="checkbox6"
                  style={{ fontSize: "14px", fontWeight: "500" }}
                >
                  Скидки
                </Label>
              </Col>
              <Col>
                <FormGroup check>
                  <Label for="checkbox6" check>
                    Разрешить
                  </Label>
                  <Input checked={checkbox6} id="checkbox6" type="checkbox" />
                </FormGroup>
              </Col>
            </span>
            <span
              className="d-flex pb-75 pt-75 border-bottom"
              onClick={
                checkbox7 ? () => setCheckbox7(false) : () => setCheckbox7(true)
              }
            >
              <Col md="9">
                <Label
                  for="checkbox7"
                  style={{ fontSize: "14px", fontWeight: "500" }}
                >
                  Категории
                </Label>
              </Col>
              <Col>
                <FormGroup check>
                  <Label for="checkbox7" check>
                    Разрешить
                  </Label>
                  <Input checked={checkbox7} id="checkbox7" type="checkbox" />
                </FormGroup>
              </Col>
            </span>
            <span
              className="d-flex pb-75 pt-75 border-bottom"
              onClick={
                checkbox8 ? () => setCheckbox8(false) : () => setCheckbox8(true)
              }
            >
              <Col md="9">
                <Label
                  for="checkbox8"
                  style={{ fontSize: "14px", fontWeight: "500" }}
                >
                  Статистика
                </Label>
              </Col>
              <Col>
                <FormGroup check>
                  <Label for="checkbox8" check>
                    Разрешить
                  </Label>
                  <Input checked={checkbox8} id="checkbox8" type="checkbox" />
                </FormGroup>
              </Col>
            </span>
            <span
              onClick={
                checkbox9 ? () => setCheckbox9(false) : () => setCheckbox9(true)
              }
              className="d-flex pb-75 pt-75 border-bottom"
            >
              <Col md="9">
                <Label
                  for="checkbox9"
                  style={{ fontSize: "14px", fontWeight: "500" }}
                >
                  Сотрудники
                </Label>
              </Col>
              <Col>
                <FormGroup check>
                  <Label for="checkbox9" check>
                    Разрешить
                  </Label>
                  <Input checked={checkbox9} id="checkbox9" type="checkbox" />
                </FormGroup>
              </Col>
            </span>
            <span
              className="d-flex pb-75 pt-75"
              onClick={
                checkbox10
                  ? () => setCheckbox10(false)
                  : () => setCheckbox10(true)
              }
            >
              <Col md="9">
                <Label
                  for="checkbox10"
                  style={{ fontSize: "14px", fontWeight: "500" }}
                >
                  Сервера
                </Label>
              </Col>
              <Col>
                <FormGroup check>
                  <Label for="checkbox10" check>
                    Разрешить
                  </Label>
                  <Input checked={checkbox10} id="checkbox10" type="checkbox" />
                </FormGroup>
              </Col>
            </span>
          </div>
          <Col className="text-center mt-1" xs={12}>
            <RippleButton type="submit" className="me-1" color="relief-primary">
              Добавить
            </RippleButton>
            <RippleButton
              color="relief-danger"
              onClick={() => {
                setShow(!show);
                reset();
              }}
            >
              Отменить
            </RippleButton>
          </Col>
        </ModalBody>
      </Modal>
    </Fragment>
  );
};

export default StaffModal;
