//======================= Components =======================
import { Link } from "react-router-dom";
//======================= All Icons Needed =======================
import AddIcon from "@material-ui/icons/Add";
import BackIcon from "@material-ui/icons/ArrowBack";
import FilterList from "@material-ui/icons/FilterList";
import NextIcon from "@material-ui/icons/ArrowForward";
import PlaylistAdd from "@material-ui/icons/PlaylistAdd";
import PresentToAll from "@material-ui/icons/PresentToAll";
import PlaylistPlay from "@material-ui/icons/PlaylistPlay";
import AccountIcon from "@material-ui/icons/Person";
import AccountAddIcon from "@material-ui/icons/PersonAdd";
// import PlaylistPlay from "@material-ui/icons/PlaylistPlay";
import RestoreIcon from "@material-ui/icons/Restore";
import Settings from "@material-ui/icons/Settings";
import ViewList from "@material-ui/icons/ViewList";
import SendIcon from "@material-ui/icons/Send";
import CheckCircle from "@material-ui/icons/Check";

export default {
  nav: {
    "/authenticate": [
      {
        component: Link,
        icon: AccountIcon,
        key: "login-btn",
        text: "login",
        to: "/authenticate?type=login"
      },
      {
        component: Link,
        icon: AccountAddIcon,
        key: "register-btn",
        text: "register",
        to: "/authenticate?type=register"
      }
    ],
    "/games": [
      {
        component: Link,
        icon: AddIcon,
        key: "new-game-btn",
        text: "new",
        to: "/games/new?type=settings"
      }
    ],
    "/games/new": [
      {
        component: Link,
        icon: Settings,
        text: "settings",
        key: "settings-btn",
        to: "/games/new?type=settings"
      },
      {
        component: Link,
        icon: ViewList,
        text: "questions",
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
          color: "secondary",
        },
        text: "sign in",
        icon: SendIcon,
        key: "auth-btn-login",
        actionType: "USER_AUTHENTICATE"
      }
    ],
    "/authenticate?type=register": [
      {
        styles: {
          component: "button",
          color: "secondary"
        },
        key: "auth-btn-register",
        text: "sign up",
        icon: CheckCircle,
        actionType: "USER_REGISTER"
      }
    ],
    "/games": [
      {
        styles: {
          component: "button",
          color: "primary"
        },
        key: "btn-fetch-game",
        icon: RestoreIcon,
        text: "load",
        actionType: "GAME_FETCH"
      }
    ],
    "/games/new?type=settings": [
      {
        styles: {
          component: "button",
          color: "secondary"
        },
        key: "btn-publish-game",
        text: "publish",
        icon: PresentToAll,
        actionType: "GAME_UPDATE"
      }
    ]
  }
};
