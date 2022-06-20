import React, { useState } from "react";
import { Card, CardBody, CardHeader, Col, Input, Label, Row } from "reactstrap";
import { Feather, Image, Plus } from "ts-react-feather-icons";
import s from "../../../../@core/scss/base/colorpicker.module.css";

import feather from "../../../../assets/feather.svg";
import image from "../../../../assets/image.svg";

const Appearance: React.FC = ({}): JSX.Element => {
  const favs = [
    { icon: "https://via.placeholder.com/38" },
    { icon: "https://via.placeholder.com/38" },
    { icon: "https://via.placeholder.com/38" },
    { icon: "https://via.placeholder.com/38" },
    { icon: "https://via.placeholder.com/38" },
    { icon: "https://via.placeholder.com/38" },
    { icon: "https://via.placeholder.com/38" },
    { icon: "https://via.placeholder.com/38" },
    { icon: "https://via.placeholder.com/38" },
    { icon: "https://via.placeholder.com/38" },
    { icon: "https://via.placeholder.com/38" },
  ]; 

  const [colorValue, setColorValue] = useState('')

  // @ts-ignore
  const allFavs = favs.map((el) => (
    <div
      style={{
        borderRadius: "10px",
        backgroundColor: "#EBEBEB",
        width: "56px",
        height: "56px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginRight: "15px",
        marginBottom: "15px",
      }}
    >
      <img src={el.icon} alt="" />
    </div>
  ));

  return (
    <div>
      <Row>
        <Col>
          <Card style={{ height: "calc(100% - 28px)" }}>
            <CardHeader className="border-bottom">
              <div className="f-flex direction-column">
                <h4>Favicon магазина</h4>
                <h6 style={{ margin: "0", fontWeight: "400" }}>
                  Логотип магазина, отображаемый в браузере
                </h6>
              </div>
            </CardHeader>
            <CardBody className="mt-75 d-flex">
              <div className="d-flex flex-wrap" style={{ maxWidth: "100%" }}>
                {allFavs}
                <div
                  style={{
                    borderRadius: "10px",
                    backgroundColor: "#7367F0",
                    width: "56px",
                    height: "56px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: "15px",
                    cursor: "pointer",
                  }}
                >
                  <Plus color="white" size={34} />
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>

        <Col>
          <Card style={{ height: "calc(100% - 28px)" }}>
            <CardHeader className="border-bottom">
              <div className="f-flex direction-column">
                <h4>Параметры дизайна магазина</h4>
                <h6 style={{ margin: "0", fontWeight: "400" }}>
                  Функции и возможности для кастомизации магазина
                </h6>
              </div>
            </CardHeader>
            <CardBody className="mt-75">
              <Row>
                <Col sm={5}>
                  <div className="form-check form-check-primary mt-75">
                    <Input
                      type="checkbox"
                      id="primary-checkbox"
                      defaultChecked
                    />
                    <Label className="form-check-label" for="primary-checkbox">
                      Эффект снега
                    </Label>
                  </div>
                </Col>
                <Col>
                  <div className="form-check form-check-primary mt-75">
                    <Input type="checkbox" id="site-checkbox" defaultChecked />
                    <Label className="form-check-label" for="site-checkbox">
                      Первичный ряд увеличен
                    </Label>
                  </div>
                </Col>
                <Col sm={5}>
                  <div className="form-check form-check-primary mt-75">
                    <Input
                      type="checkbox"
                      id="primary-checkbox"
                      defaultChecked
                    />
                    <Label className="form-check-label" for="primary-checkbox">
                      Скрыть коопирайт
                    </Label>
                  </div>
                </Col>
                <Col>
                  <div className="form-check form-check-primary mt-75">
                    <Input type="checkbox" id="site-checkbox" defaultChecked />
                    <Label className="form-check-label" for="site-checkbox">
                      Скрыть название товаров
                    </Label>
                  </div>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          <Card style={{ height: "calc(100% - 28px)" }}>
            <CardHeader className="border-bottom">
              <div className="f-flex direction-column">
                <h4>Фон магазина</h4>
                <h6 style={{ margin: "0", fontWeight: "400" }}>
                  Задний фон для отображения в магазине
                </h6>
              </div>
            </CardHeader>
            <CardBody className="mt-75 d-flex">
              <div className="d-flex flex-wrap" style={{ maxWidth: "100%" }}>
                {allFavs}
                <div className={s.color_picker_container} style={{position: 'relative'}}>
                  <Input className={s.color_picker} onChange={(e) => setColorValue(e.target.value)} value={colorValue} type="color" 
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: '9',
                    opacity: 0
                  }} />
                  {/* @ts-ignore */}
                  <div style={{ width: "2px", height: '2px' }}>
                    <img className={s.icon} src={feather} alt="" />
                  </div>
                  <Input className={s.color_picker} value={colorValue} type="color" />
                </div>
                <div
                  style={{
                    borderRadius: "10px",
                    backgroundColor: "#7367F0",
                    width: "56px",
                    height: "56px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: "15px",
                    cursor: "pointer",
                  }}
                >
                  <Image color="white" size={34} />
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>

        <Col>
          <Card style={{ height: "calc(100% - 28px)" }}>
            <CardHeader className="border-bottom">
              <div className="f-flex direction-column">
                <h4>Цветовой тон магазина</h4>
                <h6 style={{ margin: "0", fontWeight: "400" }}>
                  Вся возможная цветовая гамма для магазина
                </h6>
              </div>
            </CardHeader>
            <CardBody className="mt-75">
              <Row>
                <Col sm={2}>
                  <Label style={{width: 'max-content'}}>Основной цвет сайта</Label>
                  <Input type="color" />
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col sm={6}>
          <Card style={{ height: "calc(100% - 28px)" }}>
            <CardHeader className="border-bottom">
              <div className="f-flex direction-column">
                <h4>Шапка магазина</h4>
                <h6 style={{ margin: "0", fontWeight: "400" }}>
                  Шапка, отображаемая над товарами
                </h6>
              </div>
            </CardHeader>
            <CardBody className="mt-75 d-flex">
              <div className="d-flex flex-wrap" style={{ maxWidth: "100%" }}>
                {allFavs}
                <div
                  style={{
                    borderRadius: "10px",
                    backgroundColor: "#7367F0",
                    width: "56px",
                    height: "56px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: "15px",
                    cursor: "pointer",
                  }}
                >
                  <Image color="white" size={34} />
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Appearance;
