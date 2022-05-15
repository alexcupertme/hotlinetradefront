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
  Card,
  CardHeader,
  CardTitle,
  Row,
  Col,
} from "reactstrap";

const avatarGroupData1 = [
  {
    title: "Gretchen",
    img: avatar1,
    imgHeight: 26,
    imgWidth: 26,
  },
  {
    title: "Hunter",
    img: avatar2,
    imgHeight: 26,
    imgWidth: 26,
  },
  {
    title: "Allistair",
    img: avatar3,
    imgHeight: 26,
    imgWidth: 26,
  },
];

const avatarGroupData2 = [
  {
    title: "Macy",
    img: avatar1,
    imgHeight: 26,
    imgWidth: 26,
  },
  {
    title: "Eve",
    img: avatar2,
    imgHeight: 26,
    imgWidth: 26,
  },
  {
    title: "Damian",
    img: avatar3,
    imgHeight: 26,
    imgWidth: 26,
  },
];

const avatarGroupData3 = [
  {
    title: "Jade",
    img: avatar1,
    imgHeight: 26,
    imgWidth: 26,
  },
  {
    title: "Destiny",
    img: avatar2,
    imgHeight: 26,
    imgWidth: 26,
  },
  {
    title: "Cade",
    img: avatar3,
    imgHeight: 26,
    imgWidth: 26,
  },
];

const avatarGroupData4 = [
  {
    title: "Bruno",
    img: avatar1,
    imgHeight: 26,
    imgWidth: 26,
  },
  {
    title: "Griffin",
    img: avatar2,
    imgHeight: 26,
    imgWidth: 26,
  },
  {
    title: "Anthony",
    img: avatar3,
    imgHeight: 26,
    imgWidth: 26,
  },
];

const TableStriped = () => {
  return (
    <>
      <Row>
        <Col>
          <Card>
            <CardHeader className="border-bottom">
              <CardTitle tag="h4">Платежные системы</CardTitle>
            </CardHeader>
            <Table striped responsive>
              <thead>
                <tr>
                  <th>наименование</th>
                  <th>комиссия</th>
                  <th>статус</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span className="align-middle fw-bold">Payeer</span>
                  </td>
                  <td>0.6%</td>
                  <td>
                    <Badge pill color="light-success" className="me-1">
                      Active
                    </Badge>
                  </td>
                  <td></td>
                  <td style={{ display: "flex", justifyContent: "flex-end" } }>
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
                        <DropdownItem
                          href="/"
                          onClick={(e) => e.preventDefault()}
                        >
                          <Edit className="me-50" size={15} />
                          <span className="align-middle">Изменить</span>
                        </DropdownItem>
                        <DropdownItem
                          href="/"
                          onClick={(e) => e.preventDefault()}
                        >
                          <Trash className="me-50" size={15} />{" "}
                          <span className="align-middle">Удалить</span>
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="align-middle fw-bold">Payeer</span>
                  </td>
                  <td>0.6%</td>
                  <td>
                    <Badge pill color="light-danger" className="me-1">
                      Active
                    </Badge>
                  </td>
                  <td></td>
                  <td style={{ display: "flex", justifyContent: "flex-end" } }>
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
                        <DropdownItem
                          href="/"
                          onClick={(e) => e.preventDefault()}
                        >
                          <Edit className="me-50" size={15} />{" "}
                          <span className="align-middle">Изменить</span>
                        </DropdownItem>
                        <DropdownItem
                          href="/"
                          onClick={(e) => e.preventDefault()}
                        >
                          <Trash className="me-50" size={15} />{" "}
                          <span className="align-middle">Удалить</span>
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </td>
                </tr>
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
                  <td></td>
                  <td style={{ display: "flex", justifyContent: "flex-end" } }>
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
                        <DropdownItem
                          href="/"
                          onClick={(e) => e.preventDefault()}
                        >
                          <Edit className="me-50" size={15} />{" "}
                          <span className="align-middle">Изменить</span>
                        </DropdownItem>
                        <DropdownItem
                          href="/"
                          onClick={(e) => e.preventDefault()}
                        >
                          <Trash className="me-50" size={15} />{" "}
                          <span className="align-middle">Удалить</span>
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="align-middle fw-bold">Payeer</span>
                  </td>
                  <td>0.6%</td>
                  <td>
                    <Badge pill color="light-danger" className="me-1">
                      Отключено
                    </Badge>
                  </td>
                  <td></td>
                  <td style={{ display: "flex", justifyContent: "flex-end" } }>
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
                        <DropdownItem
                          href="/"
                          onClick={(e) => e.preventDefault()}
                        >
                          <Edit className="me-50" size={15} />{" "}
                          <span className="align-middle">Изменить</span>
                        </DropdownItem>
                        <DropdownItem
                          href="/"
                          onClick={(e) => e.preventDefault()}
                        >
                          <Trash className="me-50" size={15} />{" "}
                          <span className="align-middle">Удалить</span>
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default TableStriped;
