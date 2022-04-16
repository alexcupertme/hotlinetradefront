// ** React Imports
import { Fragment } from "react";

// ** Reactstrap Imports
import { Button, Input, ListGroup, ListGroupItem } from "reactstrap";

// ** Icons Imports
import { ArrowLeft, ArrowRight } from "react-feather";

// ** Images
import vueLogo from "../../../assets/images/icons/technology/vue.png";
import laravelLogo from "../../../assets/images/icons/technology/laravel.png";
import angularLogo from "../../../assets/images/icons/technology/angular.png";
import reactNativeLogo from "../../../assets/images/icons/technology/react.png";

const FrameworkStep = ({ stepper }) => {
  return (
    <Fragment>
      <h5>Выберите игру</h5>
      <div style={{height: '289px', overflow: 'auto'}}>
        <ListGroup flush>
          <ListGroupItem className="border-0 px-0">
            <label htmlFor="reactNative" className="d-flex cursor-pointer">
              <span className="avatar avatar-tag bg-light-info me-1">
                <img src={reactNativeLogo} alt="reactNative" height="25" />
              </span>
              <span className="d-flex align-items-center justify-content-between flex-grow-1">
                <div className="me-1">
                  <h5 className="d-block fw-bolder">DayZ</h5>
                  <span>Версия 1.17 (License)</span>
                </div>
                <span>
                  <Input
                    defaultChecked
                    type="radio"
                    id="reactNative"
                    name="frameworkRadio"
                  />
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

export default FrameworkStep;
