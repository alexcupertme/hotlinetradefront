// ** React Imports
import { Fragment } from "react";

// ** Reactstrap Imports
import { Alert, Button, Input, ListGroup, ListGroupItem } from "reactstrap";

// ** Icons Imports
import {
  Briefcase,
  ShoppingCart,
  Award,
  ArrowLeft,
  ArrowRight,
} from "react-feather";

const DetailsStep = ({ stepper }) => {
  return (
    <Fragment>
      <h5>Название магазина</h5>
      <div style={{ height: "289px", overflow: "auto" }}>
        <Input placeholder="Requiem Project" />
        <h5 style={{ marginTop: "25px" }}>Заголовок магазина</h5>
        <Input placeholder="Игровой магазин" />
        <div style={{ margin: "25px 0" }}>
          <Alert>
            <h4 className="alert-heading">Внимание</h4>
            <p style={{ padding: "15px" }}>
              Введеные данные могут быть изменены вами в будущем, через панель
              управления магазином.
            </p>
          </Alert>
        </div>
      </div>
      <div
        // style={{ marginBottom: "25px" }}
        className="d-flex justify-content-between mt-2"
      >
        <Button color="secondary" outline disabled>
          <ArrowLeft
            size={14}
            className="rotate-rtl align-middle me-sm-50 me-0"
          />
          <div className="align-middle d-sm-inline-block d-none">Назад</div>
        </Button>
        <Button color="primary" onClick={() => stepper.next()}>
          <div className="align-middle d-sm-inline-block d-none">Вперед</div>
          <ArrowRight
            size={14}
            className="rotate-rtl align-middle ms-sm-50 ms-0"
          />
        </Button>
      </div>
    </Fragment>
  );
};

export default DetailsStep;
