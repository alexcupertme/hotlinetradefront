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
} from "reactstrap";

// ** Styles
import "../../../../@core/scss/react/libs/flatpickr/flatpickr.scss";
import NumberInput from "./NumberInputSize";

type TProps = {
  active: boolean;
  setActive: React.Dispatch<SetStateAction<boolean>>;
};

const PaymentModal: React.FC<TProps> = ({ active, setActive }): JSX.Element => {
  // ** State
  const [Picker, setPicker] = useState(new Date());
  const [limit, setLimit] = useState(false);

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
            <Label
              for="limit"
              check
            >
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
