// @ts-nocheck
import ProfileHeader from "../components/ProfileHeader";
import React, { useState } from "react";
import {
  Row,
  Col,
  Card,
  Form,
  Button,
  CardBody,
  CardTitle,
  CardHeader,
  FormFeedback,
  Alert,
} from "reactstrap";

// ** Third Party Components
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import InputPasswordToggle from "../../../@core/components/input-password-toggle";
import AdminRecentDevices from "../components/AdminRecentDevices";

const showErrors = (field, valueLen, min) => {
  if (valueLen === 0) {
    return `${field} field is required`;
  } else if (valueLen > 0 && valueLen < min) {
    return `${field} must be at least ${min} characters`;
  } else {
    return "";
  }
};

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

const defaultValues = {
  newPassword: "",
  currentPassword: "",
  retypeNewPassword: "",
};

const Security: React.FC = ({}): JSX.Element => {
  const SignupSchema = yup.object().shape({
    currentPassword: yup
      .string()
      .min(8, (obj) => showErrors("Текущий пароль", obj.value.length, obj.min))
      .required(),
    newPassword: yup
      .string()
      .min(8, (obj) => showErrors("Новый пароль", obj.value.length, obj.min))
      .required(),
    retypeNewPassword: yup
      .string()
      .min(8, (obj) =>
        showErrors("Подтвердите пароль", obj.value.length, obj.min)
      )
      .required()
      .oneOf([yup.ref(`newPassword`), null], "Пароли должны совпадать"),
  });
  // ** Hooks
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
    resolver: yupResolver(SignupSchema),
  });

  const onSubmit = (data) => {
    if (Object.values(data).every((field) => field.length > 0)) {
      return null;
    } else {
      for (const key in data) {
        if (data[key].length === 0) {
          setError(key, {
            type: "manual",
          });
        }
      }
    }
  };

  return (
    <>
      <ProfileHeader />

      <Row>
        <Col>
          <Card>
            <CardHeader className="border-bottom">
              <CardTitle tag="h4">Изменить пароль</CardTitle>
            </CardHeader>
            <CardBody className="pt-1">
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Row>
                  <Col sm="6" className="mb-1">
                    <Controller
                      control={control}
                      id="newPassword"
                      name="newPassword"
                      render={({ field }) => (
                        <InputPasswordToggle
                          label="Новый пароль"
                          htmlFor="newPassword"
                          className="input-group-merge"
                          invalid={errors.newPassword && true}
                          {...field}
                        />
                      )}
                    />
                    {errors.newPassword && (
                      <FormFeedback className="d-block">
                        {errors.newPassword.message}
                      </FormFeedback>
                    )}
                  </Col>
                  <Col sm="6" className="mb-1">
                    <Controller
                      control={control}
                      id="retypeNewPassword"
                      name="retypeNewPassword"
                      render={({ field }) => (
                        <InputPasswordToggle
                          label="Подтвердите пароль"
                          htmlFor="retypeNewPassword"
                          className="input-group-merge"
                          invalid={errors.newPassword && true}
                          {...field}
                        />
                      )}
                    />
                    {errors.retypeNewPassword && (
                      <FormFeedback className="d-block">
                        {errors.retypeNewPassword.message}
                      </FormFeedback>
                    )}
                  </Col>
                  <Col xs={12}>
                    <Alert color="warning">
                      <h2 className="alert-heading">
                        Убедитесь что все критерии соблюдены
                      </h2>
                      <div className="alert-body">
                        Минимум 8 символов, вверхний регистр, символ
                      </div>
                    </Alert>
                  </Col>
                  <Col className="mt-1" sm="12">
                    <Button type="submit" className="me-1" color="primary">
                      Сохранить изменения
                    </Button>
                    <Button color="secondary" outline>
                      Отменить
                    </Button>
                  </Col>
                </Row>
              </Form>
            </CardBody>
          </Card>
        </Col>
        <Col>
          <AdminRecentDevices />
        </Col>
      </Row>
    </>
  );
};

export default Security;
