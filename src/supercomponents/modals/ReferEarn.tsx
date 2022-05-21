// ** React Imports
import { Dispatch, Fragment, SetStateAction, useState } from "react";

// ** Reactstrap Imports
import {
  Row,
  Col,
  Card,
  Label,
  Input,
  Modal,
  Button,
  CardBody,
  CardText,
  CardTitle,
  ModalBody,
  InputGroup,
  ModalHeader,
  InputGroupText,
  Alert,
} from "reactstrap";

// ** Icons Imports
import {
  Award,
  Gift,
  MessageSquare,
  Clipboard,
  Facebook,
  Twitter,
  Linkedin,
} from "react-feather";

const data = [
  {
    icon: <MessageSquare />,
    title: "Отправь ссылку 😍",
    subtitle: "Отправь реферальную ссылку знакомому",
  },
  {
    icon: <Clipboard />,
    title: "Регистрация  📝",
    subtitle: "Позвольте им зарегистрироваться в нашем сервис",
  },
  {
    icon: <Award />,
    title: "Заработок 🎉",
    subtitle: "Начни получать средства с их вывода средств",
  },
];

type TProps = {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
};

const ReferEarnModal: React.FC<TProps> = ({ show, setShow }): JSX.Element => {
  // ** State

  return (
    <Fragment>
      <Modal
        isOpen={show}
        toggle={() => setShow(!show)}
        className="modal-dialog-centered modal-refer-earn modal-lg"
      >
        <ModalHeader
          className="bg-transparent"
          toggle={() => setShow(!show)}
        ></ModalHeader>
        <ModalBody className="pb-5 px-sm-0">
          <div className="px-sm-4 mx-50">
            <h1 className="text-center mb-1">Реферальная система</h1>
            <p className="text-center mb-5">
              Приглашате своих знакомых и зарабатывайте на их выводе средств!
            </p>
            <Row className="mb-4">
              {data.map((item, index) => {
                return (
                  <Col xs={12} lg={4} key={index}>
                    <div className="d-flex justify-content-center mb-1">
                      <div className="modal-refer-earn-step d-flex width-100 height-100 rounded-circle justify-content-center align-items-center bg-light-primary">
                        {item.icon}
                      </div>
                    </div>
                    <div className="text-center">
                      <h6 className="fw-bolder mb-1">{item.title}</h6>
                      <p>{item.subtitle}</p>
                    </div>
                  </Col>
                );
              })}
            </Row>
          </div>
          <hr />
          <div className="px-sm-5 mx-50">
            <h4 className="fw-bolder mt-4 mb-1">Пригласить друзей</h4>
            <Row
              tag="form"
              className="g-1"
              onSubmit={(e) => e.preventDefault()}
            >
              <Col lg="12">
                <Label for="referral-url" className="form-label mb-75">
                  Скопируй и отправь приглагение своему другу или знакомому!
                </Label>
                <InputGroup className="input-group-merge">
                  <Input
                    type="url"
                    id="referral-url"
                    defaultValue="https://1.envato.market/vuexy_admin"
                  />
                  <InputGroupText
                    tag="a"
                    href="/"
                    onClick={(e) => e.preventDefault()}
                  >
                    Copy Link
                  </InputGroupText>
                </InputGroup>
              </Col>
            </Row>
            <Row className="mt-75">
              <Col>
                <Alert color="primary">
                  <div className="alert-body">
                    Вы получаете лишь 2% от каждого вывода вашего реферала!
                  </div>
                </Alert>
              </Col>
            </Row>
          </div>
        </ModalBody>
      </Modal>
    </Fragment>
  );
};

export default ReferEarnModal;
