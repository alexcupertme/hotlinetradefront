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
    title: "Griffith",
    img: avatar1,
    imgHeight: 26,
    imgWidth: 26,
  },
  {
    title: "Hu",
    img: avatar2,
    imgHeight: 26,
    imgWidth: 26,
  },
  {
    title: "Felicia",
    img: avatar3,
    imgHeight: 26,
    imgWidth: 26,
  },
];

const avatarGroupData2 = [
  {
    title: "Quinlan",
    img: avatar1,
    imgHeight: 26,
    imgWidth: 26,
  },
  {
    title: "Patrick",
    img: avatar2,
    imgHeight: 26,
    imgWidth: 26,
  },
  {
    title: "Castor",
    img: avatar3,
    imgHeight: 26,
    imgWidth: 26,
  },
];

const avatarGroupData3 = [
  {
    title: "Mohammad",
    img: avatar1,
    imgHeight: 26,
    imgWidth: 26,
  },
  {
    title: "Isabella",
    img: avatar2,
    imgHeight: 26,
    imgWidth: 26,
  },
  {
    title: "Michael",
    img: avatar3,
    imgHeight: 26,
    imgWidth: 26,
  },
];

const avatarGroupData4 = [
  {
    title: "Lavinia",
    img: avatar1,
    imgHeight: 26,
    imgWidth: 26,
  },
  {
    title: "Nelle",
    img: avatar2,
    imgHeight: 26,
    imgWidth: 26,
  },
  {
    title: "Virginia",
    img: avatar3,
    imgHeight: 26,
    imgWidth: 26,
  },
];

const WithdrawTable = () => {
  return (
    <Table hover responsive>
      <thead>
        <tr>
          <th>Айди</th>
          <th>Дата</th>
          <th>Сумма</th>
          <th>Платежная система</th>
          <th>Реквизиты</th>
          <th>Статус</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>3b95cc0e-409e-4ab0-854b-0468067d8517</td>
          <td>12 авг 2022, 23:40</td>
          <td>540,30 руб</td>
          <td>Qiwi Bank</td>
          <td>+79205550517</td>
          <td>
            <Badge pill color="light-warning" className="me-1">
              В обработке
            </Badge>
          </td>
        </tr>
        <tr>
          <td>3b95cc0e-409e-4ab0-854b-0468067d8517</td>
          <td>12 авг 2022, 23:40</td>
          <td>540,30 руб</td>
          <td>Qiwi Bank</td>
          <td>+79205550517</td>
          <td>
            <Badge pill color="light-warning" className="me-1">
              В обработке
            </Badge>
          </td>
        </tr>
        <tr>
          <td>3b95cc0e-409e-4ab0-854b-0468067d8517</td>
          <td>12 авг 2022, 23:40</td>
          <td>540,30 руб</td>
          <td>Qiwi Bank</td>
          <td>+79205550517</td>
          <td>
            <Badge pill color="light-danger" className="me-1">
              Отклонено
            </Badge>
          </td>
        </tr>
        <tr>
          <td>3b95cc0e-409e-4ab0-854b-0468067d8517</td>
          <td>12 авг 2022, 23:40</td>
          <td>540,30 руб</td>
          <td>Qiwi Bank</td>
          <td>+79205550517</td>
          <td>
            <Badge pill color="light-success" className="me-1">
              Выплачено
            </Badge>
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default WithdrawTable;
