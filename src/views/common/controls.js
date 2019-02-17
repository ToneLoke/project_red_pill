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
import RestoreIcon from "@material-ui/icons/Restore";
import SettingsInput from "@material-ui/icons/SettingsInputHdmi";
import ViewList from "@material-ui/icons/ViewList";
import SendIcon from "@material-ui/icons/Send";

export default {
  "nav": {
    "/authenticate": [
      {
        component: Link,
        icon: SettingsInput,
        color: "primary",
        key: "login-btn",
        // text: "Login",
        to: "/authenticate?type=login"
      },
      {
        component: Link,
        icon: PlaylistAdd,
        color: "primary",
        key: "register-btn",
        // text: "Register",
        to: "/authenticate?type=register"
      },
    ],
    "/games": [
      {
        component: Link,
        icon: AddIcon,
        color: "primary",
        key: "new-game-btn",
        // text: "Login",
        to: "/games/new"
      },
    ]
  },
  "actions": {
    "/authenticate?type=login": [
      {
        "styles": {
          component: "button",
          variant: "extended",
        },
        text: "login",
        icon: SendIcon,
        key: "auth-btn-login",
        action: "USER_AUTHENTICATE",
      }
    ],
    "/authenticate?type=register": [
      {
        "styles": {
          component: "button",
          variant: "extended",
          color: "secondary",
        },
        key: "auth-btn-register",
        icon: SendIcon,
        text: "register",
        action: "USER_REGISTER",
      }
    ],
    "/games": [
      {
        "styles": {
          component: "button",
          variant: "extended",
          color: "secondary",
        },
        key: "btn-fetch-game",
        icon: RestoreIcon,
        text: "Load",
        action: "GAME_FETCH",
      }
    ],
  }
};



//   "/games": [
//       {
//         component: Link,
//         type: "link",
//         url: "/new",
//         icon: AddIcon
//       },
//       {
//         component: Link,
//         type: "link",
//         url: "/:id",
//         action: "FETCH_GAME_INFO",
//         icon: RestoreIcon
//       }
//    ],
//   "/games/new": {
//     controls: [
//       {
//         component: Link,
//         step: "1",
//         url: "?step=2",
//         icon: NextIcon
//       },
//       {
//         component: Link,
//         step: "2",
//         url: "?step=1",
//         icon: BackIcon
//       },
//       {
//         component: Link,
//         step: "3",
//         url: "?step=2",
//         icon: BackIcon
//       }
//     ]
//   }
// }
