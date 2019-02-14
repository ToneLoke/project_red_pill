//======================= Load Each View Component =======================
import { Authenticate, Panel, Setup, Preview } from "../index";
//===================================================================
//======================= Router Configuration=======================
//===================================================================
export default [
  {
    path: "/authenticate",
    key: "/authenticate",
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
];
