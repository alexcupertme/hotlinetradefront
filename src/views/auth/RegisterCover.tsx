// ** React Imports
import { Link, useHistory } from "react-router-dom";

// ** Custom Hooks
import { useSkin } from "../../utility/hooks/useSkin";

// ** Icons Imports
import { Facebook, Twitter, Mail, GitHub } from "react-feather";

// ** Custom Components
import InputPasswordToggle from "../../@core/components/input-password-toggle";

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
  FormFeedback,
} from "reactstrap";

// ** Styles
import "../../@core/scss/react/pages/page-authentication.scss";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../../hooks/useTypedSelector";
import { registerThunk } from "../../store/thunks/authThunk";
import { IUserData } from "../../types/types";

const RegisterCover = () => {
  // ** Hooks
  const { skin } = useSkin();

  const dispatch = useAppDispatch();

  const illustration =
      skin === "dark" ? "register-v2-dark.svg" : "register-v2.svg",
    source = require(`../../assets/images/pages/${illustration}`);

  const [nickname, setNickname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordRepeat, setPasswordRepeat] = useState<string>("");

  const [nicknameError, setNicknameError] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [firstNameError, setFirstNameError] = useState<string>("");
  const [lastNameError, setLastNameError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [passwordRepeatError, setPasswordRepeatError] = useState<string>("");

  const authData: IUserData = {
    nickname: nickname,
    email: email,
    firstName: firstName,
    lastName: lastName,
    password: password,
  };

  // nickname handler
  const nicknameHandler = (e: any) => {
    setNickname(e);
  };

  useEffect(() => {
    if (nickname.length > 0) {
      if (nickname.length >= 2) {
        setNicknameError("");
      } else {
        setNicknameError("Никнейм слишком короткий");
      }
    }
  }, [nickname]);

  // email handler
  const emailHandler = (e: any) => {
    setEmail(e);
  };

  useEffect(() => {
    if (email.length > 0) {
      if (email.length < 5 || !email.includes("@")) {
        setEmailError("Почта некорректная");
      } else {
        setEmailError("");
      }
      console.log(email);
    }
  }, [email]);

  // firstName handler
  const firstNameHandler = (e: any) => {
    setFirstName(e);
  };

  useEffect(() => {
    if (firstName.length > 0) {
      if (firstName.length >= 2) {
        setFirstNameError("");
      } else {
        setFirstNameError("Слишком короткое имя");
      }
    }
  }, [firstName]);

  // lastName handler
  const lastNameHandler = (e: any) => {
    setLastName(e);
  };

  useEffect(() => {
    if (lastName.length > 0) {
      if (lastName.length >= 2) {
        setLastNameError("");
      } else {
        setLastNameError("Слишком короткая фамилия");
      }
    }
  }, [lastName]);

  // password handler
  const passwordHandler = (e: any) => {
    setPassword(e);
  };

  useEffect(() => {
    if (password.length > 0) {
      const regex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&-_])[A-Za-z0-9@$!%*?&-_]{5,50}$/g;
      if (!password.match(regex)) {
        setPasswordError("Пароль невалидный");
      } else {
        setPasswordError("");
      }
    }
  }, [password]);

  // passwordRepeat handler
  const passwordRepeatHandler = (e: any) => {
    setPasswordRepeat(e);
  };

  useEffect(() => {
    if (passwordRepeat.length > 0) {
      if (password === passwordRepeat) {
        setPasswordRepeatError("");
      } else {
        setPasswordRepeatError("Пароли не совпадают");
      }
    }
  }, [passwordRepeat, password]);

  const history = useHistory()

  const registerHandler = () => {
    if (
      !(emailError.length > 0) &&
      !(passwordError.length > 0) &&
      !(nicknameError.length > 0) &&
      !(firstNameError.length > 0) &&
      !(lastNameError.length > 0)
    ) {
      // @ts-ignore
      dispatch(registerThunk(authData));
      history.push("/verify")
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
          <Col className="px-xl-2 mx-auto" xs="12" sm="8" md="6" lg="12">
            <CardTitle tag="h2" className="fw-bold mb-1">
              Общая информация
            </CardTitle>
            <CardText className="mb-2">Введите свои данные</CardText>
            <Form
              className="auth-register-form mt-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <Row>
                <Col>
                  <div className="mb-1">
                    <Label className="form-label" for="register-username">
                      Никнейм
                    </Label>
                    <Input
                      type="text"
                      id="register-username"
                      placeholder="johndoe"
                      invalid={nicknameError.length > 2 ? true : false}
                      autoFocus
                      value={nickname}
                      onChange={(e) => nicknameHandler(e.target.value)}
                    />
                    <FormFeedback>{nicknameError}</FormFeedback>
                  </div>
                </Col>
                <Col>
                  <div className="mb-1">
                    <Label className="form-label" for="register-email">
                      Почта
                    </Label>
                    <Input
                      type="email"
                      id="register-email"
                      placeholder="john@example.com"
                      invalid={emailError.length > 2 ? true : false}
                      value={email}
                      onChange={(e) => emailHandler(e.target.value)}
                    />
                    <FormFeedback>{emailError}</FormFeedback>
                  </div>
                </Col>
              </Row>

              <Row>
                <Col>
                  <div className="mb-1">
                    <Label className="form-label" for="register-firstName">
                      Имя
                    </Label>
                    <Input
                      type="text"
                      id="register-firstName"
                      placeholder="Иван"
                      autoFocus
                      value={firstName}
                      invalid={firstNameError.length > 0 ? true : false}
                      onChange={(e) => firstNameHandler(e.target.value)}
                    />
                    <FormFeedback>{firstNameError}</FormFeedback>
                  </div>
                </Col>
                <Col>
                  <div className="mb-1">
                    <Label className="form-label" for="register-lastName">
                      Фамилия
                    </Label>
                    <Input
                      type="text"
                      id="register-lastName"
                      placeholder="Иванов"
                      value={lastName}
                      invalid={lastNameError.length > 0 ? true : false}
                      onChange={(e) => lastNameHandler(e.target.value)}
                    />
                    <FormFeedback>{lastNameError}</FormFeedback>
                  </div>
                </Col>
              </Row>

              <Row>
                <Col style={{ minHeight: "97px" }}>
                  <div className="mb-1">
                    <Label className="form-label" for="register-password">
                      Пароль
                    </Label>
                    <InputPasswordToggle
                      // @ts-ignore
                      className="input-group-merge"
                      invalid={passwordError.length > 2 ? true : false}
                      id="register-password"
                      value={password}
                      onChange={(e) => passwordHandler(e.target.value)}
                    />
                    <FormFeedback>{passwordError}</FormFeedback>
                  </div>
                </Col>
                <Col style={{ minHeight: "97px" }}>
                  <div className="mb-1">
                    <Label className="form-label" for="register-passwordRepeat">
                      Повтор пароля
                    </Label>
                    <InputPasswordToggle
                      // @ts-ignore
                      className="input-group-merge"
                      invalid={passwordRepeatError.length > 2 ? true : false}
                      id="register-passwordRepeat"
                      value={passwordRepeat}
                      onChange={(e) => passwordRepeatHandler(e.target.value)}
                    />
                    <FormFeedback>{passwordRepeatError}</FormFeedback>
                  </div>
                </Col>
              </Row>

              <div className="form-check mb-1">
                <Input type="checkbox" id="terms" />
                <Label className="form-check-label" for="terms">
                  Я соглашаюсь с
                  <a
                    className="ms-25"
                    href="/"
                    onClick={(e) => e.preventDefault()}
                  >
                    правилами сайта и политикой конфиденциальности
                  </a>
                </Label>
              </div>
              <Button color="primary" block onClick={registerHandler}>
                Зарегистрироваться
              </Button>
            </Form>
            <p className="text-center mt-2">
              <span className="me-25">У вас уже есть аккаунт?</span>
              <Link to="/login">
                <span>Войти</span>
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

export default RegisterCover;
