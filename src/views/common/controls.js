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
import SendIcon from "@material-ui/icons/Send";

export default {
  "/": [
    {
      component: Link,
      type: "link",
      icon: SettingsInput,
      url: "authenticate",
      key: "authenticate/login",
      query: "?type=login"
    },
    {
      component: Link,
      type: "link",
      icon: PlaylistAdd,
      url: "authenticate",
      key: "authenticate/register",
      query: "?type=register"
    },
  ],
  "/authenticate": [
    {
      type: "submit",
      component: "button",
      icon: SendIcon,
      action: "AUTHENTICATE",
      key: "auth-btn",
      url: "/api/auth"
    }
  ],
  "/games": [
      {
        component: Link,
        type: "link",
        url: "/new",
        icon: AddIcon
      },
      {
        component: Link,
        type: "link",
        url: "/:id",
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
