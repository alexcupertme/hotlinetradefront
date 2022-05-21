import { useSkin } from "../../utility/hooks/useSkin";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Mail, GitHub } from "react-feather";
import InputPasswordToggle from "../../@core/components/input-password-toggle";
import {
  Row,
  Col,
  CardTitle,
  CardText,
  Form,
  Label,
  Input,
  Button,
  FormFeedback,
} from "reactstrap";
import "../../@core/scss/react/pages/page-authentication.scss";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../../hooks/useTypedSelector";
import { loginThunk } from "../../store/thunks/authThunk";

import logo from "../../assets/images/logo/logo-our.svg";

const LoginCover = () => {
  const dispatch = useAppDispatch();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");

  const authData = {
    email: email,
    password: password,
  };

  const { skin } = useSkin();

  const illustration = skin === "dark" ? "login-v2-dark.svg" : "login-v2.svg";

  const source = require(`../../assets/images/pages/${illustration}`);

  const emailHandler = (e: any) => {
    setEmail(e.target.value);
  };

  const passwordHandler = (e: any) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    if (email.length > 0) {
      if (email.length < 5 || !email.includes("@")) {
        setEmailError("Почта невалидная");
      } else {
        setEmailError("");
      }
      console.log(email);
    }
  }, [email]);

  useEffect(() => {
    if (password.length > 0) {
      const regex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&-_])[A-Za-z0-9@$!%*?&-_]{5,50}$/g;
      if (!password.match(regex)) {
        setPasswordError("Пароль невалидный");
      } else {
        setPasswordError("");
      }
      console.log(password);
    }
  }, [password]);

  const loginHandler = () => {
    if (!(emailError.length > 0) && !(passwordError.length > 0)) {
      // @ts-ignore
      dispatch(loginThunk(authData));
    }
  };

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
              Добро пожаловать
            </CardTitle>
            <CardText className="mb-2">
              Пожалуйста войдите в аккаунт для использования сервиса
            </CardText>
            <Form
              className="auth-login-form mt-2"
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
                  invalid={emailError.length > 2 ? true : false}
                  onChange={emailHandler}
                  value={email}
                  autoFocus
                />
                <FormFeedback>{emailError}</FormFeedback>
              </div>
              <div className="mb-1">
                <div className="d-flex justify-content-between">
                  <Label className="form-label" for="login-password">
                    Пароль
                  </Label>
                  <Link to="/forgot-password">
                    <small>Забыли пароль?</small>
                  </Link>
                </div>
                <InputPasswordToggle
                  // @ts-ignore
                  className="input-group-merge"
                  id="login-password"
                  invalid={passwordError.length > 2 ? true : false}
                  value={password}
                  onChange={passwordHandler}
                />
                <FormFeedback>{passwordError}</FormFeedback>
              </div>
              <div className="form-check mb-1">
                <Input type="checkbox" id="remember-me" />
                <Label className="form-check-label" for="remember-me">
                  Запомнить меня
                </Label>
              </div>
              <Button color="primary" block onClick={loginHandler}>
                Войти
              </Button>
            </Form>
            <p className="text-center mt-2">
              <span className="me-25">Впервые здесь?</span>
              <Link to="/register">
                <span>Создать аккаунт</span>
              </Link>
            </p>
            <div className="divider my-2">
              <div className="divider-text">или</div>
            </div>
            <div className="auth-footer-btn d-flex justify-content-center">
              <Button color="facebook">
                <Facebook size={14} />
              </Button>
              <Button color="twitter">
                <Twitter size={14} />
              </Button>
              <Button color="google">
                <Mail size={14} />
              </Button>
              <Button className="me-0" color="github">
                <GitHub size={14} />
              </Button>
            </div>
          </Col>
        </Col>
      </Row>
    </div>
  );
};

export default LoginCover;
