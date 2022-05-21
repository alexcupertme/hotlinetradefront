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

const LinksModal: React.FC<TProps> = ({ show, setShow }): JSX.Element => {
  const [cardType, setCardType] = useState("");

  // ** Hooks
  const {
    reset,
    control,
    setError,
    clearErrors,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues });

  const onSubmit = (data) => {
    if (data.cardNumber.length) {
      clearErrors();
    } else {
      setError("cardNumber", { type: "manual" });
    }
  };

  return (
    <Fragment>
      <Modal
        isOpen={show}
        toggle={() => setShow(!show)}
        className="modal-dialog-centered"
        onClosed={() => setCardType("")}
      >
        <ModalHeader
          className="bg-transparent"
          toggle={() => setShow(!show)}
        ></ModalHeader>
        <ModalBody className="px-sm-5 mx-50 pb-5">
          <h1 className="text-center mb-1">Добавление ссылки</h1>
          <p className="text-center">Необходимо заполнить все поля</p>
          <Row
            tag="form"
            className="gy-1 gx-2 mt-75"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Col xs={12}>
              <Label className="form-label" for="credit-card">
                Название
              </Label>
              <InputGroup>
                <Controller
                  name="cardNumber"
                  control={control}
                  render={({ field }) => {
                    return (
                      <Input
                        {...field}
                        id="cardNumber"
                        // value={field.value}
                        // onChange={field.onChange}
                        placeholder="ВКонтакте"
                        className={classnames("form-control", {
                          "is-invalid": errors.cardNumber,
                        })}
                        // options={{
                        //   creditCard: true,
                        //   onCreditCardTypeChanged: (type) => {
                        //     setCardType(type);
                        //   },
                        // }}
                      />
                    );
                  }}
                />

                {cardType !== "" && cardType !== "unknown" ? (
                  <InputGroupText className="p-25">
                    <span className="add-card-type">
                      <img
                        height="24"
                        alt="card-type"
                        src={cardsObj[cardType]}
                      />
                    </span>
                  </InputGroupText>
                ) : null}
              </InputGroup>
              {errors.cardNumber && (
                <FormFeedback className="d-block">
                  Введите корректное название
                </FormFeedback>
              )}
            </Col>
            <Col md={12}>
              <Label className="form-label" for="card-name">
                Ссылка
              </Label>
              <Input
                id="card-name"
                placeholder="https://vk.com"
                // options={{ delimiter: "/", blocks: [2, 2] }}
              />
            </Col>
            <Col xs={12}>
              <div className="d-flex align-items-center">
                <div className="form-switch w-100">
                  <Input
                    defaultChecked
                    type="switch"
                    name="save-card"
                    id="save-card"
                  />
                  <Label className="form-check-label" for="save-card">
                    <span className="switch-icon-left">
                      <Check size={14} />
                    </span>
                    <span className="switch-icon-right">
                      <X size={14} />
                    </span>
                  </Label>
                  <Label
                    className="form-check-label fw-bolder ms-1"
                    for="save-card"
                  >
                    Только авторизованным
                  </Label>
                </div>
              </div>
            </Col>
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
          </Row>
        </ModalBody>
      </Modal>
    </Fragment>
  );
};

export default LinksModal;
