import { useAppDispatch, useAppSelector } from "../../hooks/useTypedSelector";
import { lazy } from "react";

// ** Document title
const TemplateTitle = "%s - Vuexy React Admin Template";

let role = "user";

// ** Default Route
let DefaultRoute = "";

const userDefaultRoute = "/"
const adminDefaultRoute = "/admin"
const authDefaultRoute = "/register"

if (role === "user") {
  DefaultRoute = userDefaultRoute
} else if(role === "admin") {
  DefaultRoute = adminDefaultRoute
} else {
  DefaultRoute = authDefaultRoute
}

// useAppSelector(state => state.auth.)
// const dispatch = useAppDispatch();

// ** Merge Routes
const Routes = []

const adminRoutes = [
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
  //exact be careful
  {
    path: "/admin",
    component: lazy(() => import("../../views/admin/Admin")),
  },
  {
    path: "/error",
    component: lazy(() => import("../../views/Error")),
    layout: "BlankLayout",
  },
];

const userRoutes = [
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
    path: "/error",
    component: lazy(() => import("../../views/Error")),
    layout: "BlankLayout",
  },
];

const authRoutes = [
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

if (role === "user") {
  Routes.push(...userRoutes)
  Routes.push(...adminRoutes)
  Routes.push(...authRoutes)
} else if(role === "admin") {
  Routes.push(...adminRoutes)
} else {
  Routes.push(...authRoutes)
}



export { DefaultRoute, TemplateTitle, Routes };
