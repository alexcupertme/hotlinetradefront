import { RippleButton } from "../../../../@core/components/ripple-button";
import React from "react";
import ReactSelect from "react-select";
import { Card, CardBody, CardHeader, Col, Input, Label, Row } from "reactstrap";
import s from "./.module.css";

// ** Third Party Components
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import '../../../../@core/scss/base/plugins/extensions/ext-component-sweet-alerts.scss'


const MySwal = withReactContent(Swal)

const Advanced: React.FC = ({}): JSX.Element => {

  const handleConfirmCancel = () => {
    return MySwal.fire({
      title: 'Подтверждение',
      text: "Вы действительно хотите сохранить изменения?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Сохранить',
      cancelButtonText: 'Отмена',
      customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-danger ms-1',      
      },
      buttonsStyling: false
    }).then(function (result) {
      if (result.value) {
        MySwal.fire({
          icon: 'success',
          title: 'Сохранено',
          text: 'Ваши изменения были сохранены',
          customClass: {
            confirmButton: 'btn btn-success'
          }
        })
      } else if (result.dismiss === MySwal.DismissReason.cancel) {
        MySwal.fire({
          title: 'Отменено',
          text: 'Ваши изменения были отменены',
          icon: 'error',
          customClass: {
            confirmButton: 'btn btn-success'
          }
        })
      }
    })
  }

  return (
    <div>
      <Row>
        <Col>
          <Card>
            <CardHeader
              className="border-bottom d-flex align-items-start"
              style={{ flexDirection: "column" }}
            >
              <h4>Встроенный редактор</h4>
              <h6 style={{ margin: "0", fontWeight: "400" }}>CSS</h6>
            </CardHeader>
            <CardBody>
              <Row className="mt-2">
                <Col>
                  <Input type="textarea" placeholder="Пишите стили здесь..." />
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          <Card>
            <CardHeader
              className="border-bottom d-flex align-items-start"
              style={{ flexDirection: "column" }}
            >
              <h4>Встроенный редактор</h4>
              <h6 style={{ margin: "0", fontWeight: "400" }}>JavaScript</h6>
            </CardHeader>
            <CardBody>
              <Row className="mt-2">
                <Col>
                  <Input
                    type="textarea"
                    placeholder="Пишите скрипты здесь..."
                  />
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col className="d-flex justify-content-end">
          {/* @ts-ignore */}
          <RippleButton color="relief-primary" onClick={handleConfirmCancel}>Сохранить</RippleButton>
        </Col>
      </Row>
    </div>
  );
};

export default Advanced;
