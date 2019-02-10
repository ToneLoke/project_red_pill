//======================= Components =======================
import { Link } from "react-router-dom";
import { Btn } from "./components";
//======================= All Icons Needed =======================
import AddIcon from "@material-ui/icons/Add";
import BackIcon from "@material-ui/icons/ArrowBack";
import FilterList from "@material-ui/icons/FilterList";
import NextIcon from "@material-ui/icons/ArrowForward";
import PlaylistAdd from "@material-ui/icons/PlaylistAdd";
import PlaylistAddCheck from "@material-ui/icons/PlaylistAddCheck";
import PlaylistPlay from "@material-ui/icons/PlaylistPlay";
import RestoreIcon from "@material-ui/icons/Restore";
import SettingsInput from "@material-ui/icons/SettingsInputHdmi";
import ViewList from "@material-ui/icons/ViewList";

export default {
  "/": [
    {
      component: Link,
      icon: SettingsInput,
      url: "/authenticate?type=login"
    },
    {
      component: Link,
      icon: SettingsInput,
      url: "/authenticate?type=signin"
    },
  ],
  "/authenticate": [
    {
      type: "submit",
      action: "AUTHENTICATE",
      url: "/api/auth"
    }
  ],
  "/games": [
      {
        component: Link,
        url: "/new",
        icon: AddIcon
      },
      {
        component: Link,
        url: "/:new",
        action: "FETCH_GAME_INFO",
        icon:RestoreIcon
      }
   ],
  "/games/new": {
    controls: [
      {
        component: Link,
        step: "1",
        url: "?step=2",
        icon: NextIcon
      },
      {
        component: Link,
        step: "2",
        url: "?step=1",
        icon: BackIcon
      },
      {
        component: Link,
        step: "3",
        url: "?step=2",
        icon: BackIcon
      }
    ]
  }
}
