//======================= Load Each View Component =======================
import {Authenticate, Panel, Setup, Preview, Layout, Home} from "../index";
//===================================================================
//======================= Router Configuration=======================
//===================================================================
export default [
  {
    path: "/",
    key: "/",
    component: Layout,
    routes: [
      {
        path: "/",
        key: "/home",
        exact: true,
        component: Home,
        routes: []
      },
      {
        path: "/authenticate",
        key: "/authenticate",
        exact: false,
        component: Authenticate,
        routes: []
      },
      {
        path: "/games",
        key: "/games",
        component: Panel,
        exact: true,
        routes: []
      },
      {
        path: "/games/new",
        key: "/games/new",
        component: Setup,
        routes: []
      },
      {
        path: "/games/:id",
        key: "/games/:id",
        component: Preview,
        routes: []
      }
    ]
  }
];
