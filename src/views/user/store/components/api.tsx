// ** React Imports
import { Fragment } from "react";

// ** Custom Components
import Breadcrumbs from "../../../../@core/components/breadcrumbs";
// ** Utils
import { selectThemeColors } from "../../../../utility/Utils";

// ** Third Party Components
import Select from "react-select";
import { useForm, Controller } from "react-hook-form";
import { Copy, MoreVertical, Edit2, Trash2 } from "react-feather";

// ** Reactstrap Imports
import {
  Row,
  Col,
  Card,
  Form,
  Label,
  Input,
  Badge,
  Button,
  CardBody,
  CardText,
  CardTitle,
  CardHeader,
  FormFeedback,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";

// ** Illustrations
import illustration from "../../../../assets/images/illustration/pricing-Illustration.svg";

const data = [
  {
    type: "Full Access",
    name: "Server Key 1",
    key: "23e******-****-****-****-*********ac",
    date: "Created on 28 Apr 2020, 18:20 GTM+4:10",
  },
];

const keyOptions = [
  { value: "full-control", label: "Full Control" },
  { value: "modify", label: "Modify" },
  { value: "read-execute", label: "Read & Execute" },
  { value: "list-folder", label: "List Folder Contents" },
  { value: "read-only", label: "Read Only" },
  { value: "read-write", label: "Read Write" },
];

const defaultValues = {
  apiKeyName: "",
};

const ApiKey = () => {
  // ** Hooks
  const {
    control,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues });

  const onSubmit = (data) => {
    if (data.apiKeyName.length) {
      return null;
    } else {
      setError("apiKeyName", {
        type: "manual",
      });
    }
  };

  return (
    <Fragment>
      {/* @ts-ignore */}

      <Row className="gy-2">
        {data.map((item) => (
          <Col sm={12} key={item.key}>
            <div className="bg-light-secondary position-relative rounded p-2">
              <UncontrolledDropdown className="btn-pinned">
                <DropdownToggle tag="span">
                  <MoreVertical size={18} />
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem className="d-flex align-items-center">
                    <Edit2 size={14} className="me-50" />
                    <span>Edit</span>
                  </DropdownItem>
                  <DropdownItem className="d-flex align-items-center">
                    <Trash2 size={14} className="me-50" />
                    <span>Delete</span>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <div className="d-flex align-items-center flex-wrap">
                <h4 className="mb-1 me-1">{item.name}</h4>
                <Badge className="mb-1" color="light-primary">
                  {item.type}
                </Badge>
              </div>
              <h6 className="d-flex align-items-center fw-bolder">
                <span className="me-50">{item.key}</span>
                <span>
                  <Copy size={14} />
                </span>
              </h6>
              <span>{item.date}</span>
            </div>
          </Col>
        ))}
      </Row>
    </Fragment>
  );
};

export default ApiKey;
