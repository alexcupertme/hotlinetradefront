// ** Custom Components

// ** Images
// import react from "../../../../assets/images/icons/react.svg";
// import vuejs from "../../../../assets/images/icons/vuejs.svg";
import angular from "../../../assets/images/icons/angular.svg";

// ** Icons Imports
import { MoreVertical, Edit, Trash } from "react-feather";

// ** Reactstrap Imports
import {
  Table,
  Badge,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
} from "reactstrap";


const AdminStoresTable = () => {
  return (
    <Table responsive>
      <thead>
        <tr>
          <th>МАГАЗИН</th>
          <th>ТРАНЗАКЦИй</th>
          <th>ПОЛЬЗОВАТЕЛИ</th>
          <th>СТАТУС</th>
          <th>ЗАРАБОТОК</th>
          <th>ДЕЙСТВИЕ</th>
        </tr>
      </thead>
      <tbody style={{ border: "none" }}>
        <tr>
          <td className="d-flex align-items-center">
            <img
              className="me-75"
              src={angular}
              alt="angular"
              height="30"
              width="30"
            />
            <span>
              <div className="align-middle fw-bold">Angular Project</div>
              <div style={{ fontSize: "12px" }} className="align-middle">
                Angular Project
              </div>
            </span>
          </td>
          <td>1 234 495</td>
          <td>12 945</td>
          <td>
            <Badge pill color="light-success" className="me-1">
              Действует
            </Badge>
          </td>
          <td>12 945₽</td>
          <td>
            <UncontrolledDropdown>
              <DropdownToggle
                className="icon-btn hide-arrow"
                color="transparent"
                size="sm"
                caret
              >
                <MoreVertical size={15} />
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem href="/" onClick={(e) => e.preventDefault()}>
                  <Edit className="me-50" size={15} />{" "}
                  <span className="align-middle">Edit</span>
                </DropdownItem>
                <DropdownItem href="/" onClick={(e) => e.preventDefault()}>
                  <Trash className="me-50" size={15} />{" "}
                  <span className="align-middle">Delete</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </td>
        </tr>
        <tr>
          <td className="d-flex align-items-center">
            <img
              className="me-75"
              src={angular}
              alt="angular"
              height="30"
              width="30"
            />
            <span>
              <div className="align-middle fw-bold">Angular Project</div>
              <div style={{ fontSize: "12px" }} className="align-middle">
                Angular Project
              </div>
            </span>
          </td>
          <td>1 234 495</td>
          <td>12 945</td>
          <td>
            <Badge pill color="light-success" className="me-1">
              Действует
            </Badge>
          </td>
          <td>12 945₽</td>
          <td>
            <UncontrolledDropdown>
              <DropdownToggle
                className="icon-btn hide-arrow"
                color="transparent"
                size="sm"
                caret
              >
                <MoreVertical size={15} />
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem href="/" onClick={(e) => e.preventDefault()}>
                  <Edit className="me-50" size={15} />{" "}
                  <span className="align-middle">Edit</span>
                </DropdownItem>
                <DropdownItem href="/" onClick={(e) => e.preventDefault()}>
                  <Trash className="me-50" size={15} />{" "}
                  <span className="align-middle">Delete</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </td>
        </tr>
        <tr>
          <td className="d-flex align-items-center">
            <img
              className="me-75"
              src={angular}
              alt="angular"
              height="30"
              width="30"
            />
            <span>
              <div className="align-middle fw-bold">Angular Project</div>
              <div style={{ fontSize: "12px" }} className="align-middle">
                Angular Project
              </div>
            </span>
          </td>
          <td>1 234 495</td>
          <td>12 945</td>
          <td>
            <Badge pill color="light-success" className="me-1">
              Действует
            </Badge>
          </td>
          <td>12 945₽</td>
          <td>
            <UncontrolledDropdown>
              <DropdownToggle
                className="icon-btn hide-arrow"
                color="transparent"
                size="sm"
                caret
              >
                <MoreVertical size={15} />
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem href="/" onClick={(e) => e.preventDefault()}>
                  <Edit className="me-50" size={15} />{" "}
                  <span className="align-middle">Edit</span>
                </DropdownItem>
                <DropdownItem href="/" onClick={(e) => e.preventDefault()}>
                  <Trash className="me-50" size={15} />{" "}
                  <span className="align-middle">Delete</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </td>
        </tr>
        <tr>
          <td className="d-flex align-items-center">
            <img
              className="me-75"
              src={angular}
              alt="angular"
              height="30"
              width="30"
            />
            <span>
              <div className="align-middle fw-bold">Angular Project</div>
              <div style={{ fontSize: "12px" }} className="align-middle">
                Angular Project
              </div>
            </span>
          </td>
          <td>1 234 495</td>
          <td>12 945</td>
          <td>
            <Badge pill color="light-danger" className="me-1">
              Заморожено
            </Badge>
          </td>
          <td>12 945₽</td>
          <td>
            <UncontrolledDropdown>
              <DropdownToggle
                className="icon-btn hide-arrow"
                color="transparent"
                size="sm"
                caret
              >
                <MoreVertical size={15} />
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem href="/" onClick={(e) => e.preventDefault()}>
                  <Edit className="me-50" size={15} />{" "}
                  <span className="align-middle">Edit</span>
                </DropdownItem>
                <DropdownItem href="/" onClick={(e) => e.preventDefault()}>
                  <Trash className="me-50" size={15} />{" "}
                  <span className="align-middle">Delete</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default AdminStoresTable;
