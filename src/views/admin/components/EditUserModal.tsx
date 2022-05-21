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

const EditUserExample: React.FC<TProps> = ({ show, setShow }): JSX.Element => {
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
            <h1 className="mb-1">Пользовательская информация</h1>
            <p style={{width: '60%', margin: '0 auto'}}>
              При обновлении сведений о пользователе будет проведен аудит
              конфиденциальности.
            </p>
          </div>
          <Row
            tag="form"
            className="gy-1 pt-75"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Col md={6} xs={12}>
              <Label className="form-label" for="firstName">
                Имя
              </Label>
              <Controller
                control={control}
                name="firstName"
                render={({ field }) => {
                  return (
                    <Input
                      {...field}
                      id="firstName"
                      placeholder="John"
                      value={field.value}
                      invalid={errors.firstName && true}
                    />
                  );
                }}
              />
              {errors.firstName && (
                <FormFeedback>Введите корректное имя</FormFeedback>
              )}
            </Col>
            <Col md={6} xs={12}>
              <Label className="form-label" for="lastName">
                Фамилия
              </Label>
              <Controller
                name="lastName"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    id="lastName"
                    placeholder="Doe"
                    invalid={errors.lastName && true}
                  />
                )}
              />
              {errors.lastName && (
                <FormFeedback>Введите корректную фамилию</FormFeedback>
              )}
            </Col>
            <Col md={6} xs={12}>
              <Label className="form-label" for="username">
                Никнейм
              </Label>
              <Controller
                name="username"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    id="username"
                    placeholder="john.doe.007"
                    invalid={errors.username && true}
                  />
                )}
              />
              {errors.username && (
                <FormFeedback>Введите корректный никнейм</FormFeedback>
              )}
            </Col>
          
            <Col md={6} xs={12}>
              <Label className="form-label" for="tax-id">
                Комиссия
              </Label>
              <Input
                id="tax-id"
                defaultValue="0.6%"
                placeholder="Комиссия"
              />
            </Col>
            <Col md={6} xs={12}>
              <Label className="form-label" for="contact">
                E-mail
              </Label>
              <Input
                id="contact"
                defaultValue="d1xys@bk.ru"
                placeholder="d1xys@bk.ru"
              />
            </Col>
            <Col md={6} xs={12}>
              <Label className="form-label" for="balance">
                Баланс
              </Label>
              <Input
                id="balance"
                defaultValue="14000"
                placeholder="14000"
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

export default EditUserExample;
