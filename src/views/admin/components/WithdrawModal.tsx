// @ts-nocheck
// ** React Imports
import { Fragment, SetStateAction } from "react";

// ** Reactstrap Imports
import {
  Row,
  Col,
  Modal,
  Input,
  Label,
  Button,
  ModalBody,
  ModalHeader,
  FormFeedback,
} from "reactstrap";

// ** Third Party Components
import Select from "react-select";
import { User, Check, X } from "react-feather";
import { useForm, Controller } from "react-hook-form";

// ** Utils
import { selectThemeColors } from "../../utility/Utils";

// ** Styles
import "../../../@core/scss/react/libs/react-select/_react-select.scss";
import { Briefcase, CreditCard, Home, Pause } from "ts-react-feather-icons";

const statusOptions = [
  { value: "active", label: "Active" },
  { value: "inactive", label: "Inactive" },
  { value: "suspended", label: "Suspended" },
];

const countryOptions = [
  { value: "uk", label: "UK" },
  { value: "usa", label: "USA" },
  { value: "france", label: "France" },
  { value: "russia", label: "Russia" },
  { value: "canada", label: "Canada" },
];

const languageOptions = [
  { value: "english", label: "English" },
  { value: "spanish", label: "Spanish" },
  { value: "french", label: "French" },
  { value: "german", label: "German" },
  { value: "dutch", label: "Dutch" },
];

const defaultValues = {
  firstName: "Selina",
  lastName: "Kyle",
  username: "selinadev",
};

type TProps = {
  show: boolean;
  setShow: React.Dispatch<SetStateAction>;
};

const WithdrawModal: React.FC<TProps> = ({ show, setShow }): JSX.Element => {
  // ** States
  // const [show, setShow] = useState(false)

  // ** Hooks
  const {
    control,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues });

  const onSubmit = (data) => {
    if (Object.values(data).every((field) => field.length > 0)) {
      return null;
    } else {
      for (const key in data) {
        if (data[key].length === 0) {
          setError(key, {
            type: "manual",
          });
        }
      }
    }
  };

  return (
    <Fragment>
      <Modal
        isOpen={show}
        toggle={() => setShow(!show)}
        className="modal-dialog-centered modal-lg"
      >
        <ModalHeader
          className="bg-transparent"
          toggle={() => setShow(!show)}
        ></ModalHeader>
        <ModalBody className="px-sm-5 mx-50 pb-5">
          <div className="text-center mb-2">
            <h1 className="mb-1">Подробная информация</h1>
            <p style={{ width: "60%", margin: "0 auto" }}>
              Вся информация о транзакции
            </p>
          </div>
          <Row
            tag="form"
            className="gy-1 pt-75"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Col xs={12}>
              <Row className="custom-options-checkable">
                <Col md={6} className="mb-md-0 mb-2">
                  <Input
                    type="radio"
                    defaultChecked
                    id="homeAddress"
                    name="addressRadio"
                    value="homeAddress"
                    className="custom-option-item-check"
                  />
                  <label
                    className="custom-option-item px-2 py-1"
                    htmlFor="homeAddress"
                  >
                    <span className="d-flex align-items-center mb-50">
                      <CreditCard className="font-medium-4 me-50" />
                      <span className="custom-option-item-title h4 fw-bolder mb-0">
                        Выплачено
                      </span>
                    </span>
                    <span className="d-block">Изменить статус платежа</span>
                  </label>
                </Col>
                <Col md={6} className="mb-md-0 mb-2">
                  <Input
                    type="radio"
                    id="officeAddress"
                    name="addressRadio"
                    value="officeAddress"
                    className="custom-option-item-check"
                  />
                  <label
                    className="custom-option-item px-2 py-1"
                    htmlFor="officeAddress"
                  >
                    <span className="d-flex align-items-center mb-50">
                      <Pause className="font-medium-4 me-50" />
                      <span className="custom-option-item-title h4 fw-bolder mb-0">
                        Отклонено
                      </span>
                    </span>
                    <span className="d-block">Изменить статус платежа</span>
                  </label>
                </Col>
              </Row>
            </Col>
            <Col md={12} xs={12}>
              <Label className="form-label" for="firstName">
                Идентификатор
              </Label>
              <Controller
                control={control}
                name="firstName"
                render={({ field }) => {
                  return (
                    <Input
                      {...field}
                      id="firstName"
                      placeholder="Идентификатор"
                      value={field.value}
                      invalid={errors.firstName && true}
                      readOnly
                    />
                  );
                }}
              />
              {errors.firstName && (
                <FormFeedback>Введите корректное имя</FormFeedback>
              )}
            </Col>
            <Col md={12} xs={12}>
              <Label className="form-label" for="lastName">
                Пользователь
              </Label>
              <Controller
                name="lastName"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    id="lastName"
                    placeholder="Пользователь"
                    invalid={errors.lastName && true}
                    readOnly
                  />
                )}
              />
              {errors.lastName && (
                <FormFeedback>Введите корректную фамилию</FormFeedback>
              )}
            </Col>
            <Col md={12} xs={12}>
              <Label className="form-label" for="username">
                Сумма
              </Label>
              <Controller
                name="username"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    id="username"
                    placeholder="Сумма"
                    invalid={errors.username && true}
                    readOnly
                  />
                )}
              />
              {errors.username && (
                <FormFeedback>Введите корректный никнейм</FormFeedback>
              )}
            </Col>

            <Col md={6} xs={12}>
              <Label className="form-label" for="tax-id">
                Платежная система
              </Label>
              <Input
                id="tax-id"
                defaultValue="Qiwi Bank"
                placeholder="Платежная система"
                readOnly
              />
            </Col>
            <Col md={6} xs={12}>
              <Label className="form-label" for="contact">
                Реквизиты
              </Label>
              <Input
                id="contact"
                defaultValue="+79205550517"
                placeholder="Реквизиты"
                readOnly
              />
            </Col>
            <Col md={12} xs={12}>
              <Label className="form-label" for="balance">
                Дата
              </Label>
              <Input
                id="balance"
                defaultValue="12 авг 2022, 23:40"
                placeholder="Дата"
                readOnly
              />
            </Col>
            <Col xs={12} className="text-center mt-2 pt-50">
              <Button type="submit" className="me-1" color="primary">
                Подтвердить
              </Button>
              <Button
                type="reset"
                color="danger"
                outline
                onClick={() => setShow(false)}
              >
                Отменить
              </Button>
            </Col>
          </Row>
        </ModalBody>
      </Modal>
    </Fragment>
  );
};

export default WithdrawModal;
