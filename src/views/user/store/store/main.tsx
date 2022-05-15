import { RippleButton } from "../../../../@core/components/ripple-button";
import React from "react";
import {
  Alert,
  Card,
  CardBody,
  CardHeader,
  Col,
  Input,
  InputGroup,
  Label,
  Row,
} from "reactstrap";
import s from "./.module.css";
import ReactSelect from "react-select";
import makeAnimated from "react-select/animated";
import { selectThemeColors } from "../../../../utility/Utils";
import ApiKey from "../components/api";

const Main: React.FC = ({}): JSX.Element => {
  const animatedComponents = makeAnimated();

  const storeOptions = [
    { value: "shop", label: "Магазин" },
    { value: "dayz", label: "DayZ" },
    { value: "rust", label: "Rust" },
  ];

  return (
    <>
      <Row>
        <Col>
          <Card>
            <CardHeader
              className="border-bottom d-flex align-items-start"
              style={{ flexDirection: "column" }}
            >
              <h4>Текста</h4>
              <h6 style={{ margin: "0", fontWeight: "400" }}>
                Основная информация о магазине
              </h6>
            </CardHeader>
            <CardBody>
              <Row>
                <Label className="mt-75">
                  <span>Название магазина</span>
                  <Input className="mt-50" placeholder="DayZ Shop" />
                </Label>
              </Row>

              <Row>
                <Label className="mt-75">
                  <span>Заголовок магазина</span>
                  <Input className="mt-50" placeholder="Игровой магазина" />
                </Label>
              </Row>
              <Row>
                <Label className="mt-75">
                  <span>Собственный домен</span>
                  <Input className="mt-50" placeholder="dayzshop.ru" />
                </Label>
                <span style={{ fontSize: "11px" }}>
                  * Для того чтобы домен работал, вам необходимо его{" "}
                  <a target="_blank" href="https://vk.com/pozitiveglista">
                    направить
                  </a>
                </span>
              </Row>
              <Row>
                <Col>
                  {/* @ts-ignore */}
                  <RippleButton
                    className="mt-75"
                    color="relief-primary"
                    style={{ width: "100%" }}
                  >
                    Применить
                  </RippleButton>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card>
            <CardHeader
              className="border-bottom d-flex align-items-start"
              style={{ flexDirection: "column" }}
            >
              <h4>Поисковые запросы</h4>
              <h6 style={{ margin: "0", fontWeight: "400" }}>
                Параметры для более качественного поиска сайта
              </h6>
            </CardHeader>
            <CardBody>
              <Row>
                <Label className="mt-75">
                  <span>Ключевые слова</span>
                  <ReactSelect
                    closeMenuOnSelect={false}
                    components={animatedComponents}
                    defaultValue={[storeOptions[0]]}
                    isMulti
                    theme={selectThemeColors}
                    className="react-select"
                    classNamePrefix="select"
                    // @ts-ignore
                    options={storeOptions}
                  />
                </Label>
              </Row>

              <Row>
                <Label className="mt-75">
                  <span>Описание</span>
                  <Input
                    style={{ minHeight: "138px" }}
                    type="textarea"
                    className="mt-50"
                    placeholder="Описание.."
                  />
                </Label>
              </Row>
              <Row>
                <Col>
                  {/* @ts-ignore */}
                  <RippleButton
                    className="mt-75"
                    color="relief-primary"
                    style={{ width: "100%" }}
                  >
                    Применить
                  </RippleButton>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          <Card>
            <CardHeader className="border-bottom">
              <h4 style={{ margin: "0" }}>Секретный API KEY</h4>
            </CardHeader>
            <CardBody>
              <Alert color="warning" className="mt-2">
                <div className="alert-heading">
                  Никому не сообщайте свой секретный ключ
                </div>
                <div className="alert-body">
                  Уважаемые пользователи, не передавайте свой секретый ключ
                  незнакомым лицам. Благодаря данному ключу можно управлять
                  данными магазина!
                </div>
              </Alert>
              <ApiKey />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Main;
