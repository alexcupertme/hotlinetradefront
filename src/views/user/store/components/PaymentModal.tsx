// ** React Imports
import { SetStateAction, useState } from "react";

// ** Third Party Components
import Flatpickr from "react-flatpickr";
import { User, Briefcase, Mail, Calendar, DollarSign, X } from "react-feather";

// ** Reactstrap Imports
import {
  Modal,
  Input,
  Label,
  Button,
  ModalHeader,
  ModalBody,
  InputGroup,
  InputGroupText,
  FormGroup,
  Card,
  CardBody,
} from "reactstrap";

// ** Styles
import "../../../../@core/scss/react/libs/flatpickr/flatpickr.scss";
import NumberInput from "./NumberInputSize";
import { Edit, Gift } from "ts-react-feather-icons";

type TProps = {
  active: boolean;
  setActive: React.Dispatch<SetStateAction<boolean>>;
};

const PaymentModal: React.FC<TProps> = ({ active, setActive }): JSX.Element => {
  // ** State
  const [Picker, setPicker] = useState(new Date());
  const [limit, setLimit] = useState(false);
  const [category, setCategory] = useState("params");

  const [bonus1, setBonus1] = useState(true);
  const [bonus2, setBonus2] = useState(true);
  const [bonus3, setBonus3] = useState(true);
  const [bonus4, setBonus4] = useState(true);


  // ** Custom close btn
  const CloseBtn = (
    <X className="cursor-pointer" size={15} onClick={() => setActive(false)} />
  );

  const modalHandler = () => {
    if (active) {
      setActive(false);
    } else {
      setActive(true);
    }
  };

  return (
    <Modal
      isOpen={active}
      toggle={modalHandler}
      className="sidebar-sm"
      modalClassName="modal-slide-in"
      contentClassName="pt-0"
    >
      <ModalHeader
        className="mb-1"
        toggle={modalHandler}
        close={CloseBtn}
        tag="div"
      >
        <h5 className="modal-title">Встроенная платежная система</h5>
      </ModalHeader>
      <ModalBody className="flex-grow-1">
        <div className="d-flex align-items-center mb-2">
          <div
            className="me-2 d-flex align-items-center cursor-pointer p-50"
            onClick={() => setCategory("params")}
            style={category === 'params' ? { borderBottom: '2px solid #7367F0' } : { borderBottom: '2px solid #7367F000' }}
          >
            <span className="me-50">
              <Edit size={13} color="#7367F0" />
            </span>
            <span style={{ color: "#7367F0"}} >Параметры</span>
          </div>
          <div
            className="d-flex align-items-center cursor-pointer p-50"
            onClick={() => setCategory("bonus")}
            style={category === 'bonus' ? { borderBottom: '2px solid #7367F0'} : { borderBottom: '2px solid #7367F000' }}
          >
            <span className="me-50">
              <Gift size={13} color="#7367F0" />
            </span>
            <span style={{ color: "#7367F0" }}>Бонусы</span>
          </div>
        </div>
        {category === "params" ? (
          <div style={{ maxHeight: "83%", height: '100%' }}>
            <div className="d-flex">
              <div className="me-2">
                <NumberInput size="normal" label="Мин. сумма" />
              </div>
              <NumberInput size="normal" label="Макс. сумма" />
            </div>
            <div className="mt-2 mb-1">
              <FormGroup check>
                <Input id="works" type="checkbox" />
                <Label for="works" check>
                  Платежная система доступна
                </Label>
              </FormGroup>
            </div>
            <div
              className="mb-1"
              // @ts-ignore
            >
              <FormGroup check>
                <Input
                  id="limit"
                  type="checkbox"
                  checked={limit}
                  onClick={limit ? () => setLimit(false) : () => setLimit(true)}
                />
                <Label for="limit" check>
                  Ограничение суммы оборота за 24ч
                </Label>
              </FormGroup>
            </div>
            {limit ? (
              <div className="mb-1">
                <NumberInput
                  size="large"
                  label="Максимальная сумма оборота за 24ч"
                />
              </div>
            ) : null}
          </div>
        ) : (
          <div style={{ maxHeight: "83%", height: '100%' }}>
            <Card className="p-1">
              <span className="mb-75">Список активных бонусов</span>
              <div style={{ borderRadius: "10px" }} className="p-75 border mb-75">
                <FormGroup check>
                  <Input
                    id="bonus1"
                    type="checkbox"
                    checked={bonus1}
                  onClick={bonus1 ? () => setBonus1(false) : () => setBonus1(true)}
                    
                  />
                  <Label
                    className="d-flex justify-content-between"
                    for="bonus1"
                    check
                  >
                    <div>От 500р</div>
                    <div style={{ color: "#7367F0" }}>+15%</div>
                  </Label>
                </FormGroup>
              </div>
              <div style={{ borderRadius: "10px" }} className="p-75 border mb-75">
                <FormGroup check>
                  <Input
                    id="bonus2"
                    type="checkbox"
                    checked={bonus2}
                  onClick={bonus2 ? () => setBonus2(false) : () => setBonus2(true)}
                    
                  />
                  <Label
                    className="d-flex justify-content-between"
                    for="bonus2"
                    check
                  >
                    <div>От 500р</div>
                    <div style={{ color: "#7367F0" }}>+15%</div>
                  </Label>
                </FormGroup>
              </div>
              <div style={{ borderRadius: "10px" }} className="p-75 border mb-75">
                <FormGroup check>
                  <Input
                    id="bonus3"
                    type="checkbox"
                    checked={bonus3}
                  onClick={bonus3 ? () => setBonus3(false) : () => setBonus3(true)}
                    
                  />
                  <Label
                    className="d-flex justify-content-between"
                    for="bonus3"
                    check
                  >
                    <div>От 500р</div>
                    <div style={{ color: "#7367F0" }}>+15%</div>
                  </Label>
                </FormGroup>
              </div>
              <div style={{ borderRadius: "10px" }} className="p-75 border mb-75">
                <FormGroup check>
                  <Input
                    id="bonus4"
                    type="checkbox"
                    checked={bonus4}
                  onClick={bonus4 ? () => setBonus4(false) : () => setBonus4(true)}
                    
                  />
                  <Label
                    className="d-flex justify-content-between"
                    for="bonus4"
                    check
                  >
                    <div>От 500р</div>
                    <div style={{ color: "#7367F0" }}>+15%</div>
                  </Label>
                </FormGroup>
              </div>
            </Card>
          </div>
        )}

        <Button
          className="me-1"
          color="primary"
          onClick={() => setActive(false)}
        >
          Применить
        </Button>
        <Button color="secondary" onClick={() => setActive(false)} outline>
          Отменить
        </Button>
      </ModalBody>
    </Modal>
  );
};

export default PaymentModal;
