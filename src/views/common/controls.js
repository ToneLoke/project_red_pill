//======================= Components =======================
import { Link } from "react-router-dom";
//======================= All Icons Needed =======================
import AddIcon from "@material-ui/icons/Add";
import PresentToAll from "@material-ui/icons/PresentToAll";
import UpdateIcon from "@material-ui/icons/Update";
import EditIcon from "@material-ui/icons/Edit";
import PublishedIcon from "@material-ui/icons/Book";
import AccountIcon from "@material-ui/icons/Person";
import AccountAddIcon from "@material-ui/icons/PersonAdd";
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
        icon: EditIcon,
        key: "draft-games-btn",
        text: "drafts",
        to: "/games?type=draft"
      },
      {
        component: Link,
        icon: PublishedIcon,
        key: "publised-games-btn",
        text: "published",
        to: "/games?type=live"
      }
    ],
    "/games/draft": [
      {
        component: Link,
        icon: Settings,
        text: "settings",
        key: "settings-btn",
        to: "/games/draft?type=settings"
      },
      {
        component: Link,
        icon: ViewList,
        text: "questions",
        key: "questions-btn",
        to: "/games/draft?type=questions"
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
        isReq: true,
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
        isReq: true,
        icon: CheckCircle,
        actionType: "USER_REGISTER"
      }
    ],
    "/games?type=draft": [
      {
        styles: {
          component: Link,
          to: "/games/draft?type=settings",
          color: "secondary"
        },
        icon: AddIcon,
        text: "new",
        key: "game-btn-new",
        actionType: "GAME"
      },
      {
        styles: {
          component: Link,
          to: "/games/draft?type=settings",
          color: "secondary",
        },
        icon: UpdateIcon,
        key: "game-btn-upate",
        text: "update",
        actionType: "GAME"
      },
    ],
    "/games?type=live": [
      {
        styles: {
          component: Link,
          to: "/games/draft?type=settings",
          color: "secondary",
        },
        icon: AddIcon,
        text: "new",
        key: "game-btn-new",
        actionType: "GAME"
      },
      {
        styles: {
          component: Link,
          to: "/games/draft?type=settings"
        },
        icon: UpdateIcon,
        key: "game-btn-upate",
        text: "update",
        actionType: "GAME"
      },
    ],
    "/games/draft?type=settings": [
      {
        styles: {
          component: "button",
          color: "secondary"
        },
        key: "btn-publish-game",
        text: "publish",
        isReq: true,
        icon: PresentToAll,
        data: { status: 'live' },
        actionType: "GAME_CREATE_UPDATE"
      }
    ],
    "/games/draft?type=questions": [
      {
        styles: {
          component: Link,
          color: "secondary",
          to: "/questions"
        },
        key: "btn-publish-game",
        text: "publish",
        icon: AddIcon,
        actionType: "GAME_UPDATE"
      },
      {
        styles: {
          component: Link,
          color: "secondary",
          to: "/questions"
        },
        key: "btn-publish-game",
        text: "publish",
        icon: AddIcon,
        actionType: "GAME_UPDATE"
      },
    ]
  }
};
