// @ts-nocheck
// ** React Imports
import { Link } from "react-router-dom";
import { useSkin } from "../../../utility/hooks/useSkin";

// ** Reactstrap Imports
import { Row, Col, CardTitle, CardText, Button } from "reactstrap";

import logo from "../../../assets/images/logo/logo-our.svg";

// ** Styles
import "../../../@core/scss/base/pages/authentication.scss";

const VerifiedEmailCover = () => {
  // ** Hooks
  const { skin } = useSkin();

  const illustration =
      skin === "dark"
        ? "verify-email-illustration-dark.svg"
        : "verify-email-illustration.svg",
    source = require(`../../../assets/images/pages/${illustration}`);

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
            <CardTitle tag="h2" className="fw-bolder mb-1">
              Почта успешно подтверждена
            </CardTitle>
            <CardText className="mb-2">
              Вы успешно подтвердили вашу почту
            </CardText>
            <Button block tag={Link} to="/" color="primary">
              Продолжить
            </Button>
          </Col>
        </Col>
      </Row>
    </div>
  );
};

export default VerifiedEmailCover;
