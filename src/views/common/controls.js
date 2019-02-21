//======================= Components =======================
import { Link } from "react-router-dom";
//======================= All Icons Needed =======================
import AddIcon from "@material-ui/icons/Add";
import BackIcon from "@material-ui/icons/ArrowBack";
import FilterList from "@material-ui/icons/FilterList";
import NextIcon from "@material-ui/icons/ArrowForward";
import PlaylistAdd from "@material-ui/icons/PlaylistAdd";
import PlaylistAddCheck from "@material-ui/icons/PlaylistAddCheck";
import PlaylistPlay from "@material-ui/icons/PlaylistPlay";
import AccountIcon from "@material-ui/icons/Group";
import AccountAddIcon from "@material-ui/icons/GroupAdd";
// import PlaylistPlay from "@material-ui/icons/PlaylistPlay";
import RestoreIcon from "@material-ui/icons/Restore";
import Settings from "@material-ui/icons/Settings";
import ViewList from "@material-ui/icons/ViewList";
import SendIcon from "@material-ui/icons/Send";

export default {
  nav: {
    "/authenticate": [
      {
        component: Link,
        icon: AccountIcon,
        color: "primary",
        key: "login-btn",
        // text: "Login",
        to: "/authenticate?type=login"
      },
      {
        component: Link,
        icon: AccountAddIcon,
        color: "primary",
        key: "register-btn",
        // text: "Register",
        to: "/authenticate?type=register"
      }
    ],
    "/games": [
      {
        component: Link,
        icon: AddIcon,
        color: "primary",
        key: "new-game-btn",
        // text: "Login",
        to: "/games/new"
      }
    ],
    "/games/new": [
      {
        component: Link,
        icon: Settings,
        color: "primary",
        key: "settings-btn",
        to: "/games/new?type=settings"
      },
      {
        component: Link,
        icon: ViewList,
        color: "primary",
        key: "questions-btn",
        to: "/games/new?type=questions"
      }
    ]
  },
  actions: {
    "/authenticate?type=login": [
      {
        styles: {
          component: "button",
          variant: "extended"
        },
        text: "login",
        key: "auth-btn-login",
        action: "USER_AUTHENTICATE"
      }
    ],
    "/authenticate?type=register": [
      {
        styles: {
          component: "button",
          variant: "extended"
        },
        key: "auth-btn-register",
        text: "register",
        action: "USER_REGISTER"
      }
    ],
    "/games": [
      {
        styles: {
          component: "button",
          variant: "extended",
          color: "primary"
        },
        key: "btn-fetch-game",
        icon: RestoreIcon,
        text: "Load",
        action: "GAME_FETCH"
      }
    ],
    "/games/new": [
      {
        styles: {
          component: "button",
          variant: "extended",
          color: "secondary"
        },
        key: "btn-save-game",
        text: "Save",
        action: "GAME_SAVE"
      }
    ]
  }
};
