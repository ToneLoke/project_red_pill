//======================= Load Each View Component =======================
import { Authenticate, Panel, Setup, Live } from "../index";
//===================================================================
//======================= Router Configuration=======================
//===================================================================
export default [
  {
    path: "/authenticate",
    key: "authenticate",
    component: Authenticate,
  },
  {
    path: "/games",
    key: "games",
    component: Panel,
    exact: true,
  },
  {
    path: "/games/draft",
    key: "games-new-update",
    exact: true,
    component: Setup,
  },
  {
    path: "/live/:id",
    key: "/live/:id",
    exact: true,
    component: Live,
  }

];
