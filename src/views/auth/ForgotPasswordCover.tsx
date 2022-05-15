// @ts-nocheck
// ** React Imports
import { Link } from "react-router-dom";

// ** Custom Hooks
import { useSkin } from "../../utility/hooks/useSkin";

// ** Icons Imports
import { ChevronLeft } from "react-feather";
import logo from "../../assets/images/logo/logo-our.svg";

// ** Reactstrap Imports
import {
  Row,
  Col,
  CardTitle,
  CardText,
  Form,
  Label,
  Input,
  Button,
} from "reactstrap";

// ** Styles
import "../../@core/scss/react/pages/page-authentication.scss";

const ForgotPasswordCover = () => {
  // ** Hooks
  const { skin } = useSkin();

  const illustration =
      skin === "dark"
        ? "forgot-password-v2-dark.svg"
        : "forgot-password-v2.svg",
    source = require(`../../assets/images/pages/${illustration}`);

  return (
    <div className="auth-wrapper auth-cover">
      <Row className="auth-inner m-0">
        <Link
          className="brand-logo d-flex align-items-center"
          to="/"
          onClick={(e) => e.preventDefault()}
        >
          <img width={35} src={logo} alt="" />
          <h2
            style={{
              margin: "0",
              fontWeight: "bold",
              fontStyle: "italic",
              marginLeft: "10px",
              color: "#7367F0",
            }}
          >
            HOTLINE
            <span style={{ color: "#5E5873" }}>TRADE</span>
          </h2>
        </Link>
        <Col className="d-none d-lg-flex align-items-center p-5" lg="8" sm="12">
          <div className="w-100 d-lg-flex align-items-center justify-content-center px-5">
            <img className="img-fluid" src={source} alt="Login Cover" />
          </div>
        </Col>
        <Col
          className="d-flex align-items-center auth-bg px-2 p-lg-5"
          lg="4"
          sm="12"
        >
          <Col className="px-xl-2 mx-auto" sm="8" md="6" lg="12">
            <CardTitle tag="h2" className="fw-bold mb-1">
              Забыли пароль?
            </CardTitle>
            <CardText className="mb-2">
              Введите свою почту для получения инструкций для восстановления
              пароля
            </CardText>
            <Form
              className="auth-forgot-password-form mt-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="mb-1">
                <Label className="form-label" for="login-email">
                  Почта
                </Label>
                <Input
                  type="email"
                  id="login-email"
                  placeholder="john@example.com"
                  autoFocus
                />
              </div>
              <Button color="primary" block>
                Отправить ссылку
              </Button>
            </Form>
            <p className="text-center mt-2">
              <Link to="/login">
                <ChevronLeft className="rotate-rtl me-25" size={14} />
                <span className="align-middle">Вернуться к авторизации</span>
              </Link>
            </p>
          </Col>
        </Col>
      </Row>
    </div>
  );
};

export default ForgotPasswordCover;
