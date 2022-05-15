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

const CategoryModal: React.FC<TProps> = ({ show, setShow }): JSX.Element => {
  // ** States
  const [cardType, setCardType] = useState("");

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
          <h1 className="text-center mb-1">Добавление категории</h1>
          <h4 className="text-left mt-3">Название категории</h4>
          <p className="text-left mt-75">
            После добавления категории вы сможете заносить туда товары, для
            более удобной навигации по товарам в магазине
          </p>
          <Input
            id="exampleEmail"
            name="email"
            placeholder="Оружие"
            type="email"
          />
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

export default CategoryModal;
