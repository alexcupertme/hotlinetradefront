// ** Custom Components
import AvatarGroup from "../../../@core/components/avatar-group";

// ** Images
import react from "../../../assets/images/icons/react.svg";
import vuejs from "../../../assets/images/icons/vuejs.svg";
import angular from "../../../assets/images/icons/angular.svg";
import bootstrap from "../../../assets/images/icons/bootstrap.svg";
import avatar1 from "../../../assets/images/portrait/small/avatar-s-5.jpg";
import avatar2 from "../../../assets/images/portrait/small/avatar-s-6.jpg";
import avatar3 from "../../../assets/images/portrait/small/avatar-s-7.jpg";

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

const avatarGroupData1 = [
  {
    title: "Lilian",
    img: avatar1,
    imgHeight: 26,
    imgWidth: 26,
  },
  {
    title: "Alberto",
    img: avatar2,
    imgHeight: 26,
    imgWidth: 26,
  },
  {
    title: "Bruce",
    img: avatar3,
    imgHeight: 26,
    imgWidth: 26,
  },
];

const avatarGroupData2 = [
  {
    title: "Diana",
    img: avatar1,
    imgHeight: 26,
    imgWidth: 26,
  },
  {
    title: "Rey",
    img: avatar2,
    imgHeight: 26,
    imgWidth: 26,
  },
  {
    title: "James",
    img: avatar3,
    imgHeight: 26,
    imgWidth: 26,
  },
];

const avatarGroupData3 = [
  {
    title: "Lee",
    img: avatar1,
    imgHeight: 26,
    imgWidth: 26,
  },
  {
    title: "Mario",
    img: avatar2,
    imgHeight: 26,
    imgWidth: 26,
  },
  {
    title: "Oswald",
    img: avatar3,
    imgHeight: 26,
    imgWidth: 26,
  },
];

const avatarGroupData4 = [
  {
    title: "Christie",
    img: avatar1,
    imgHeight: 26,
    imgWidth: 26,
  },
  {
    title: "Barnes",
    img: avatar2,
    imgHeight: 26,
    imgWidth: 26,
  },
  {
    title: "Arthur",
    img: avatar3,
    imgHeight: 26,
    imgWidth: 26,
  },
];

const TableBasic = () => {
  return (
    <Table responsive>
      <thead>
        <tr>
          <th>НАИМЕНОВАНИЕ</th>
          <th>Комиссия</th>
          <th>статус</th>
          <th></th>
        </tr>
      </thead>
      <tbody style={{ border: "none" }}>
        <tr>
          <td>
            <span className="align-middle fw-bold">Payeer</span>
          </td>
          <td>0.6%</td>
          <td>
            <Badge pill color="light-success" className="me-1">
              Включено
            </Badge>
          </td>
          <td>
            <UncontrolledDropdown className="d-flex justify-content-end">
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
                  <span className="align-middle">Изменить</span>
                </DropdownItem>
                <DropdownItem href="/" onClick={(e) => e.preventDefault()}>
                  <Trash className="me-50" size={15} />{" "}
                  <span className="align-middle">Удалить</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default TableBasic;
