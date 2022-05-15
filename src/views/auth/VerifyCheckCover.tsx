// ** React Imports
import { Link } from "react-router-dom";
import { useSkin } from "../../utility/hooks/useSkin";
import { useLocation } from "react-router-dom";

// ** Reactstrap Imports
import { Row, Col, CardTitle, CardText, Button } from "reactstrap";

import logo from "../../assets/images/logo/logo-our.svg";

// ** Styles
import "../../@core/scss/base/pages/authentication.scss";
import DeclinedEmailCover from "./components/DeclinedEmailCover";
import { useEffect, useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/useTypedSelector";
import { verifyThunk } from "../../store/thunks/authThunk";
import VerifiedEmailCover from "./components/VerifiedEmailCover";

const VerifyCheckCover = () => {
  // ** Hooks
  const { skin } = useSkin();
  const illustration =
      skin === "dark"
        ? "verify-email-illustration-dark.svg"
        : "verify-email-illustration.svg",
    source = require(`../../assets/images/pages/${illustration}`);

  // -------------

  const [verify, setVerify] = useState(false);

  const useQuery = () => {
    const { search } = useLocation();

    return useMemo(() => new URLSearchParams(search), [search]);
  };

  let query = useQuery();
  const dispatch = useAppDispatch();

  const verif = useAppSelector((state) => state.auth.verified);

  useEffect(() => {
    const verifHandler = async () => {
      const token = query.get("token");
      // @ts-ignore
      await dispatch(verifyThunk(token));
    };

    verifHandler().then(() => setVerify(verif)) 
  }, []);

  return (
    <>
      {verify === true ? (
        <VerifiedEmailCover />
      ) : verify === false ? (
        <DeclinedEmailCover />
      ) : null}
    </>
  );

  // return (
  //   verify === true ? <VerifiedEmailCover /> : verify === false ? <DeclinedEmailCover /> : null
  // )
};

export default VerifyCheckCover;
