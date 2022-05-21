// ** Custom Components
import AvatarGroup from "../../../../@core/components/avatar-group";

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

const RefTable = () => {
  return (
    <Table responsive>
      <thead>
        <tr>
          <th>Пользователь</th>
          <th>Получено</th>
          <th>Дата регистрации</th>
        </tr>
      </thead>
      <tbody style={{ border: "none" }}>
        <tr>
          <td>
            <span className="align-middle fw-bold">Михеев А.C</span>
          </td>
          <td>3600₽</td>
          <td>19.07.2005 22:22</td>
        </tr>
        <tr>
          <td>
            <span className="align-middle fw-bold">Михеев А.C</span>
          </td>
          <td>3600₽</td>
          <td>19.07.2005 22:22</td>
        </tr>
        <tr>
          <td>
            <span className="align-middle fw-bold">Михеев А.C</span>
          </td>
          <td>3600₽</td>
          <td>19.07.2005 22:22</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default RefTable;
