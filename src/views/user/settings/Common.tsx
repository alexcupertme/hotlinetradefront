// @ts-nocheck
import ProfileSettings from "../../apps/user/view/ProfileSettings";
import React from "react";
import s from "../../../styles/Settings.module.css";
import { User } from "react-feather";
import { Col, Row, Nav, NavItem, NavLink } from "reactstrap";

const Common: React.FC = ({}): JSX.Element => {
  const data = {
    accountSetting: {
      general: {
        avatar: require("../../../assets/images/portrait/small/avatar-s-11.jpg")
          .default,
        username: "johndoe",
        fullName: "John Doe",
        email: "granger007@hogward.com",
        company: "PIXINVENT",
      },
      info: {
        bio: "",
        dob: null,
        country: "USA",
        website: "",
        phone: 6562542568,
      },
      social: {
        socialLinks: {
          twitter: "https://www.twitter.com",
          facebook: "",
          google: "",
          linkedIn: "https://www.linkedin.com",
          instagram: "",
          quora: "",
        },
        connections: {
          twitter: {
            profileImg: require("../../../assets/images/avatars/11-small.png")
              .default,
            id: "johndoe",
          },
          google: {
            profileImg: require("../../../assets/images/avatars/3-small.png")
              .default,
            id: "luraweber",
          },
          facebook: {},
          github: {},
        },
      },
      notification: {
        commentOnArticle: true,
        answerOnForm: true,
        followMe: false,
        newAnnouncements: true,
        productUpdates: true,
        blogDigest: false,
      },
    },
  };

  return (
    <>

      <ProfileSettings data={data.accountSetting} />
    </>
  );
};

export default Common;
