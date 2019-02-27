//======================= Load Each View Component =======================
import { Authenticate, Panel, Setup } from "../index";
//===================================================================
//======================= Router Configuration=======================
//===================================================================
export default [
  {
    path: "/authenticate",
    key: "authenticate",
    component: Authenticate,
    routes: []
  },
  {
    path: "/games",
    key: "games",
    component: Panel,
    exact: true,
    routes: []
  },
  {
    path: "/games/draft",
    key: "games-new-update",
    exact: true,
    component: Setup,
    routes: []
  }

];
