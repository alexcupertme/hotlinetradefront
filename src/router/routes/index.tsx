import { lazy } from "react";

// ** Document title
const TemplateTitle = "%s - Vuexy React Admin Template";

// ** Default Route
const DefaultRoute = "/admin";

// ** Merge Routes
const Routes = [
  {
    path: "/withdraw",
    component: lazy(() => import("../../views/Withdraw")),
  },
  {
    path: "/user/settings",
    component: lazy(() => import("../../views/user/settings/Settings")),
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
    path: "/admin",
    component: lazy(() => import("../../views/Admin")),
  },
  {
    path: "/second-page",
    component: lazy(() => import("../../views/SecondPage")),
  },
  {
    path: "/login",
    component: lazy(() => import("../../views/Login")),
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
