import { lazy } from "react";

// ** Document title
const TemplateTitle = "%s - Vuexy React Admin Template";

// ** Default Route
const DefaultRoute = "/admin";

// ** Merge Routes
const Routes = [
  {
    path: "/admin/user/settings",
    component: lazy(() => import("../../views/admin/user")),
  },
  {
    path: "/admin/withdraw",
    component: lazy(() => import("../../views/admin/withdraw")),
  },
  {
    path: "/admin/stores",
    component: lazy(() => import("../../views/admin/stores")),
  },
  {
    path: "/admin/payments",
    component: lazy(() => import("../../views/admin/payments")),
  },
  {
    path: "/admin/users",
    component: lazy(() => import("../../views/admin/users")),
  },
  {
    path: "/withdraw",
    component: lazy(() => import("../../views/Withdraw")),
  },
  {
    path: "/ref",
    component: lazy(() => import("../../views/user/ref/Ref")),
  },
  {
    path: "/store",
    component: lazy(() => import("../../views/user/store/store")),
  },
  {
    path: "/user/settings",
    component: lazy(() => import("../../views/user/settings/Settings")),
  },
  //exact be careful
  {
    path: "/admin",
    component: lazy(() => import("../../views/admin/Admin")),
  },
  {
    path: "/login",
    component: lazy(() => import("../../views/auth/LoginCover")),
    layout: "BlankLayout",
    meta: {
      authRoute: true,
    },
  },
  {
    path: "/register",
    component: lazy(() => import("../../views/auth/RegisterCover")),
    layout: "BlankLayout",
    meta: {
      authRoute: true,
    },
  },
  {
    path: "/verify-confirm",
    component: lazy(() => import("../../views/auth/VerifyCheckCover")),
    layout: "BlankLayout",
    meta: {
      authRoute: true,
    },
  },
  {
    path: "/verify",
    component: lazy(() => import("../../views/auth/VerifyEmailCover")),
    layout: "BlankLayout",
    meta: {
      authRoute: true,
    },
  },
  {
    path: "/reset-password",
    component: lazy(() => import("../../views/auth/ResetPasswordCover")),
    layout: "BlankLayout",
    meta: {
      authRoute: true,
    },
  },
  {
    path: "/forgot-password",
    component: lazy(() => import("../../views/auth/ForgotPasswordCover")),
    layout: "BlankLayout",
    meta: {
      authRoute: true,
    },
  },
  {
    path: "/error",
    component: lazy(() => import("../../views/Error")),
    layout: "BlankLayout",
  },
];

export { DefaultRoute, TemplateTitle, Routes };
