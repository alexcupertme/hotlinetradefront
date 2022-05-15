// ** React Imports
import { Fragment } from "react";

// ** Reactstrap Imports
import { Button, Input, ListGroup, ListGroupItem } from "reactstrap";

// ** Icons Components
import { ArrowLeft, ArrowRight } from "react-feather";

// ** Images
import sqlLogo from "../../../assets/images/svg/create_store_modal/3.svg";
import amazonLogo from "../../../assets/images/svg/create_store_modal/2.svg";
import googleLogo from "../../../assets/images/svg/create_store_modal/1.svg";

const DatabaseStep = ({ stepper }) => {
  return (
    <Fragment>
      <h5 className="mt-0 pt-0">Выберите подходящий домен</h5>
      <div style={{ height: "289px", overflow: "auto" }}>
        <ListGroup flush>
          <ListGroupItem className="border-0 px-0">
            <label htmlFor="firebaseRadio" className="d-flex cursor-pointer">
              <span className="me-1">
                <img src={googleLogo} alt="googleLogo" height="50" />
              </span>
              <span className="d-flex align-items-center justify-content-between flex-grow-1">
                <div className="me-1">
                  <h5 className="d-block fw-bolder">dayzshop.ru</h5>
                  <span>yourproject.dayzshop.ru</span>
                </div>
                <span>
                  <Input type="radio" id="firebaseRadio" name="dbRadio" />
                </span>
              </span>
            </label>
          </ListGroupItem>
          <ListGroupItem className="border-0 px-0">
            <label htmlFor="amazonRadio" className="d-flex cursor-pointer">
              <span className="me-1">
                <img src={amazonLogo} alt="amazonLogo" height="50" />
              </span>
              <span className="d-flex align-items-center justify-content-between flex-grow-1">
                <div className="me-1">
                  <h5 className="d-block fw-bolder">dayzstore.ru</h5>
                  <span>yourproject.dayzstore.ru</span>
                </div>
                <span>
                  <Input
                    defaultChecked
                    type="radio"
                    id="amazonRadio"
                    name="dbRadio"
                  />
                </span>
              </span>
            </label>
          </ListGroupItem>
          <ListGroupItem className="border-0 px-0">
            <label htmlFor="mysqlRadio" className="d-flex cursor-pointer">
              <span className="me-1">
                <img src={sqlLogo} alt="sqlLogo" height="50" />
              </span>
              <span className="d-flex align-items-center justify-content-between flex-grow-1">
                <div className="me-1">
                  <h5 className="d-block fw-bolder">armapay.ru</h5>
                  <span>yourproject.armapay.ru</span>
                </div>
                <span>
                  <Input type="radio" id="mysqlRadio" name="dbRadio" />
                </span>
              </span>
            </label>
          </ListGroupItem>
        </ListGroup>
      </div>

      <div className="d-flex justify-content-between mt-2">
        <Button color="primary" onClick={() => stepper.previous()}>
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

export default DatabaseStep;
