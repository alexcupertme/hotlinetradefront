// @ts-nocheck
// ** React Imports
import {
  Dispatch,
  Fragment,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";

// ** Reactstrap Imports
import { Modal, ModalBody, ModalHeader } from "reactstrap";

import { Package } from "ts-react-feather-icons";

// ** Steps
import PromoFirst from "./promo-modal/PromoFirst";
import PromoMoney from "./promo-modal/PromoMoney";
import PromoProduct from "./promo-modal/PromoProduct";

// ** Styles
import "../../../../@core/scss/react/pages/modal-create-app.scss";
import Wizard from "../../../../@core/components/wizard";

const defaultValues = {
  cardNumber: "",
};

type TProps = {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
};

const PromoModal: React.FC<TProps> = ({ show, setShow }): JSX.Element => {
  // ** Ref
  const ref = useRef(null);

  const [stepper, setStepper] = useState(null);
  const [promoType, setPromoType] = useState("money");

  const stepsMoney = [
    {
      id: "promoFirst",
      title: "Детали",
      subtitle: "Сбор информации",
      icon: <Package className="font-medium-3" />,
      content: (
        <PromoFirst
          stepper={stepper}
          promoType={promoType}
          setPromoType={setPromoType}
        />
      ),
    },
    {
      id: "promoMoney",
      title: "Детали",
      subtitle: "Сбор информации",
      icon: <Package className="font-medium-3" />,
      content: <PromoMoney stepper={stepper} />,
    },
  ];

  const stepsProduct = [
    {
      id: "promoFirst",
      title: "Детали",
      subtitle: "Сбор информации",
      icon: <Package className="font-medium-3" />,
      content: (
        <PromoFirst
          stepper={stepper}
          promoType={promoType}
          setPromoType={setPromoType}
        />
      ),
    },
    {
      id: "promoProduct",
      title: "Детали",
      subtitle: "Сбор информации",
      icon: <Package className="font-medium-3" />,
      content: <PromoProduct stepper={stepper} />,
    },
  ];

  let steps = promoType === "money" ? stepsMoney : stepsProduct;

  useEffect(() => {
    steps = promoType === "money" ? stepsMoney : stepsProduct;
  }, [promoType]);

  return (
    <Fragment>
      <Modal
        isOpen={show}
        toggle={() => setShow(!show)}
        style={{ maxWidth: "600px" }}
        className="modal-dialog-centered"
        onClosed={() => setCardType("")}
      >
        <ModalHeader
          className="bg-transparent"
          toggle={() => setShow(!show)}
        ></ModalHeader>
        <ModalBody className="px-sm-3">
          <h1 className="text-center mb-1">Добавление промо-кода</h1>
          <Wizard
            ref={ref}
            steps={steps}
            type="horizontal"
            headerClassName="border-0 d-none"
            options={{ linear: false }}
            instance={(el) => setStepper(el)}
            contentClassName="shadow-none"
            className="bg-transparent create-app-wizard shadow-none"
          />
        </ModalBody>
      </Modal>
    </Fragment>
  );
};

export default PromoModal;
