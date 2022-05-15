// @ts-nocheck
// ** React Imports
import { Dispatch, Fragment, SetStateAction, useEffect, useState } from "react";

// ** Reactstrap Imports
import {
  Col,
  Modal,
  Label,
  ModalBody,
  ModalHeader,
  Row,
  Input,
} from "reactstrap";

// ** Third Party Components
import classnames from "classnames";
import Cleave from "cleave.js/react";
import { Check, X } from "react-feather";
import { useForm, Controller } from "react-hook-form";
import { RippleButton } from "../../../../@core/components/ripple-button";
import Select from "react-select";
import { selectThemeColors } from "../../../../utility/Utils";
import PickerRange from "./PickerRange";

const defaultValues = {
  cardNumber: "",
};

type TProps = {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
};

const SaleModal: React.FC<TProps> = ({ show, setShow }): JSX.Element => {
  // ** States
  const [cardType, setCardType] = useState("");
  const [saleTimer, setSaleTimer] = useState(false);
  const [saleType, setSaleType] = useState("");

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
          <h1 className="text-center mb-1">Добавление скидки</h1>
          <Row>
            <Col>
              <Label for="exampleEmail">Тип скидки</Label>
              <Select
                id="exampleEmail"
                placeholder="Начните вводить название"
                theme={selectThemeColors}
                className="react-select"
                classNamePrefix="select"
                options={[
                  { value: "onCategory", label: "На категорию" },
                  { value: "onProduct", label: "На товар" },
                  { value: "anything", label: "На все" },
                ]}
                onChange={(e) => setSaleType(e.value)}
              />
            </Col>
          </Row>
          {saleType === "onCategory" ? (
            <Row className="mt-75">
              <Col>
                <Label for="exampleEmail">Категория</Label>
                <Select
                  id="exampleEmail"
                  placeholder="Выберите категорию"
                  theme={selectThemeColors}
                  className="react-select"
                  classNamePrefix="select"
                  options={[
                    { value: "onCategory", label: "Ресурсы" },
                    { value: "onItem", label: "Оружие" },
                    { value: "anything", label: "Машины" },
                  ]}
                />
              </Col>
            </Row>
          ) : saleType === "onProduct" ? (
            <Row className="mt-75">
              <Col>
                <Label for="exampleEmail">Товар</Label>
                <Select
                  id="exampleEmail"
                  placeholder="Выберите товар"
                  theme={selectThemeColors}
                  className="react-select"
                  classNamePrefix="select"
                  options={[
                    { value: "onCategory", label: "Калаш" },
                    { value: "onItem", label: "Оружие" },
                    { value: "anything", label: "Машины" },
                  ]}
                />
              </Col>
            </Row>
          ) : null}
          <Row className="mt-75">
            <Col>
              <Label for="exampleEmail">Скидка</Label>
              <Input
                id="exampleEmail"
                placeholder="120"
                theme={selectThemeColors}
              />
              <h6
                className="mt-50"
                style={{ fontWeight: "400", fontSize: "12px" }}
              >
                * Вы можете выбрать тип скидки в % или рублях
              </h6>
            </Col>
            <Col sm={4}>
              <Label for="exampleEmail">Тип скидки</Label>
              <Select
                id="exampleEmail"
                placeholder="В рублях"
                theme={selectThemeColors}
                className="react-select"
                classNamePrefix="select"
                options={[
                  { value: "tip1", label: "Тип 1" },
                  { value: "tip2", label: "Тип 2" },
                  { value: "tip3", label: "Тип 3" },
                ]}
              />
            </Col>
          </Row>
          <Row className="mb-75 mt-1">
            <Col>
              <div className="d-flex align-items-center">
                <div className="form-switch form-check-primary">
                  <Input
                    type="switch"
                    id="switch-primary"
                    name="primary"
                    onChange={(e) => setSaleTimer(e.target.checked)}
                  />
                </div>
                <Label for="switch-primary" className="form-check-label">
                  Временная скидка
                </Label>
              </div>
            </Col>
          </Row>
          {saleTimer ? (
            <Row className="mb-75 mt-1">
              <Col>
                <PickerRange />
              </Col>
            </Row>
          ) : null}
          <Row className="mt-2">
            <Col>
              <Label for="exampleEmail">
                Пользователи с доступом к скидке (SteamID или ClientID)
              </Label>
              <Select
                isMulti
                id="exampleEmail"
                placeholder="Пользователи"
                theme={selectThemeColors}
                className="react-select"
                classNamePrefix="select"
                options={[
                  { value: "user1", label: "jus1xd" },
                  { value: "user2", label: "XIII" },
                  { value: "user3", label: "Dag" },
                ]}
              />
              <h6
                className="mt-50"
                style={{ fontWeight: "400", fontSize: "12px" }}
              >
                * Оставьте пустым, если скидка для всех
              </h6>
            </Col>
          </Row>
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

export default SaleModal;
