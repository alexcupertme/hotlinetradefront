// ** React Imports
import { Fragment } from "react";

// ** Reactstrap Imports
import { Card, CardBody, CardTitle, Input, Label, Button, Row, Col } from "reactstrap";

// ** Icons Imports
import { Check, X, Link } from "react-feather";

import Google from "../../../../assets/images/icons/social/google.png"
import Slack from "../../../../assets/images/icons/social/slack.png"
import Github from "../../../../assets/images/icons/social/github.png"
import Mailchimp from "../../../../assets/images/icons/social/mailchimp.png"
import Asana from "../../../../assets/images/icons/social/asana.png"
import Facebook from "../../../../assets/images/icons/social/facebook.png"
import Twitter from "../../../../assets/images/icons/social/twitter.png"
import Linkedin from "../../../../assets/images/icons/social/linkedin.png"
import Dribbble from "../../../../assets/images/icons/social/dribbble.png"
import Behance from "../../../../assets/images/icons/social/behance.png"

const connectedAccounts = [
  {
    checked: true,
    title: "Google",
    subtitle: "Calendar and contacts",
    logo: Google,
  },
  {
    checked: false,
    title: "Slack",
    subtitle: "Communication",
    logo: Slack,
  },
  {
    checked: true,
    title: "Github",
    subtitle: "Git repositories",
    logo: Github,
  },
  {
    checked: false,
    title: "Mailchimp",
    subtitle: "Email marketing service",
    logo: Mailchimp,
  },
  {
    checked: false,
    title: "Asana",
    subtitle: "Communication",
    logo: Asana,
  },
];

const socialAccounts = [
  {
    linked: false,
    title: "Facebook",
    logo: Facebook,
  },
  {
    linked: true,
    title: "Twitter",
    url: "https://twitter.com/pixinvent",
    logo: Twitter,
  },
  {
    linked: true,
    title: "Linkedin",
    url: "https://www.linkedin.com/company/pixinvent/",
    logo: Linkedin,
  },
  {
    linked: false,
    title: "Dribbble",
    logo: Dribbble,
  },
  {
    linked: false,
    title: "Behance",
    logo: Behance,
  },
];

const connections = () => {
  return (
    <Fragment>
      <Row>
        <Col>
          <Card>
            <CardBody>
              <CardTitle className="mb-75">Подключенные аккаунты</CardTitle>
              <p>Вы можете использовать сервисы для входа на сайт</p>
              {connectedAccounts.map((item, index) => {
                return (
                  <div key={index} className="d-flex mt-2">
                    <div className="flex-shrink-0">
                      <img
                        className="me-1"
                        src={item.logo}
                        alt={item.title}
                        height="38"
                        width="38"
                      />
                    </div>
                    <div className="d-flex align-item-center justify-content-between flex-grow-1">
                      <div className="me-1">
                        <p className="fw-bolder mb-0">{item.title}</p>
                        <span>{item.subtitle}</span>
                      </div>
                      <div className="mt-50 mt-sm-0">
                        <div className="form-switch">
                          <Input
                            type="switch"
                            defaultChecked={item.checked}
                            id={`account-${item.title}`}
                          />
                          <Label
                            className="form-check-label"
                            for={`account-${item.title}`}
                          >
                            <span className="switch-icon-left">
                              <Check size={14} />
                            </span>
                            <span className="switch-icon-right">
                              <X size={14} />
                            </span>
                          </Label>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card>
            <CardBody>
              <CardTitle className="mb-75">Соц. сети</CardTitle>
              <p>Ссылки на ваши контакты и прочее</p>
              {socialAccounts.map((item, index) => {
                return (
                  <div key={index} className="d-flex mt-2">
                    <div className="flex-shrink-0">
                      <img
                        className="me-1"
                        src={item.logo}
                        alt={item.title}
                        height="38"
                        width="38"
                      />
                    </div>
                    <div className="d-flex align-item-center justify-content-between flex-grow-1">
                      <div className="me-1">
                        <p className="fw-bolder mb-0">{item.title}</p>
                        {item.linked ? (
                          <a href={item.url} target="_blank">
                            @pixinvent
                          </a>
                        ) : (
                          <span>Не подключено</span>
                        )}
                      </div>
                      <div className="mt-50 mt-sm-0">
                        <Button outline className="btn-icon">
                          {item.linked ? (
                            <X className="font-medium-3" />
                          ) : (
                            <Link className="font-medium-3" />
                          )}
                        </Button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

export default connections;
