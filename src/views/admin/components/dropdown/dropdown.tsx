import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";
import { FileText, MoreVertical, Trash } from "ts-react-feather-icons";
import WithdrawModal from "../WithdrawModal";
import s from "./.module.css";

const Dropdown: React.FC = ({}): JSX.Element => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="d-flex">
        <UncontrolledDropdown>
          <DropdownToggle className="pe-1" tag="span">
            <MoreVertical size={15} />
          </DropdownToggle>
          <DropdownMenu end>
            <DropdownItem
              tag="a"
              href="/"
              className="w-100"
              onClick={(e) => e.preventDefault()}
            >
              <span>
                <FileText size={15} />
                <span
                  className="align-middle ms-50"
                  onClick={() => setShow(true)}
                >
                  Детали
                </span>
              </span>
            </DropdownItem>
            <DropdownItem
              tag="a"
              href="/"
              className="w-100"
              onClick={(e) => e.preventDefault()}
            >
              <Trash size={15} />
              <span className="align-middle ms-50">Удалить</span>
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>

      <WithdrawModal show={show} setShow={setShow} />
    </>
  );
};

export default Dropdown;
