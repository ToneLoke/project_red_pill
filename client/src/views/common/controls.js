//======================= Components =======================
import { Link } from "react-router-dom";
//======================= All Icons Needed =======================
import AddIcon from "@material-ui/icons/Add";
import PresentToAll from "@material-ui/icons/PresentToAll";
import PauseIcon from "@material-ui/icons/PauseCircleFilled";
import PlayIcon from "@material-ui/icons/PlayArrow";
import LaunchIcon from "@material-ui/icons/Launch";
import JoinIcon from "@material-ui/icons/GroupAdd";
import ViewIcon from "@material-ui/icons/Visibility";
import EditIcon from "@material-ui/icons/Edit";
import TrashIcon from "@material-ui/icons/Delete";
import CopyIcon from "@material-ui/icons/FileCopy";
import PublishedIcon from "@material-ui/icons/Book";
import AccountIcon from "@material-ui/icons/Person";
import AccountAddIcon from "@material-ui/icons/PersonAdd";
import Settings from "@material-ui/icons/Settings";
import ViewList from "@material-ui/icons/ViewList";
import SendIcon from "@material-ui/icons/Send";
import CheckCircle from "@material-ui/icons/Check";
import ReadyIcon from "@material-ui/icons/HowToReg";
import HandIcon from "@material-ui/icons/PanTool";
import AppIcon from "@material-ui/icons/AppsRounded";
import QuestionsIcon from "@material-ui/icons/ListAltRounded";

export default {
  nav: {
    "/authenticate": [
      {
        styles: {
          login: {
            color: "primary"
          },
          register: {
            color: "secondary"
          }
        },
        component: Link,
        icon: AccountIcon,
        key: "login-btn",
        text: "LOGIN",
        to: "/authenticate?type=login"
      },
      {
        styles: {
          register: {
            color: "primary"
          },
          login: {
            color: "secondary"
          }
        },
        component: Link,
        icon: AccountAddIcon,
        key: "register-btn",
        text: "REGISTER",
        to: "/authenticate?type=register"
      }
    ],
    "/games": [
      {
        styles: {
          draft: {
            color: "primary"
          },
          live: {
            color: "secondary"
          }
        },
        component: Link,
        icon: EditIcon,
        key: "draft-games-btn",
        text: "PRIVATE GAMES",
        to: "/games?type=draft"
      },
      {
        styles: {
          live: {
            color: "primary"
          },
          draft: {
            color: "secondary"
          }
        },
        component: Link,
        icon: PublishedIcon,
        key: "publised-games-btn",
        text: "PUBLIC GAMES",
        to: "/games?type=public"
      }
    ],
    "/games/draft": [
      {
        styles: {
          settings: {
            color: "primary"
          },
          questions: {
            color: "secondary"
          }
        },
        component: Link,
        icon: Settings,
        text: "SETTINGS",
        key: "settings-btn",
        to: "/games/draft?type=settings"
      },
      {
        styles: {
          questions: {
            color: "primary"
          },
          settings: {
            color: "secondary"
          }
        },
        component: Link,
        icon: ViewList,
        text: "QUESTIONS",
        key: "questions-btn",
        to: "/games/draft?type=questions"
      }
    ],
    "/live": [
      {
        styles: {
          component: "button",
          color: "primary"
        },
        key: "btn-enter-lobby",
        text: "LOBBY",
        icon: AppIcon,
        actionType: "ADMIN_ENTER_ENTER_LOBBY"
      },
      {
        styles: {
          component: "button",
          color: "secondary"
        },
        key: "btn-questions",
        text: "QUESTIONS",
        icon: QuestionsIcon,
        actionType: "ADMIN_ENTER_QUESTIONS"
      }
    ]
  },
  actions: {
    "/authenticate?type=login": [
      {
        styles: {
          component: "button",
          color: "secondary"
        },
        text: "SIGN IN",
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
        text: "SIGN UP",
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
        text: "ADD",
        key: "game-btn-new",
        actionType: "GAME"
      },
      {
        styles: {
          component: Link,
          to: "/games/draft?type=settings",
          color: "secondary"
        },
        icon: EditIcon,
        key: "game-btn-upate",
        text: "EDIT",
        actionType: "GAME"
      },
      {
        styles: {
          component: Link,
          to: "/games/live/",
          color: "secondary"
        },
        icon: LaunchIcon,
        key: "game-btn-resume",
        text: "RESUME",
        actionType: "GAME"
      },
      {
        styles: {
          component: Link,
          to: "/games?type=draft",
          color: "secondary"
        },
        icon: TrashIcon,
        key: "game-btn-delete",
        text: "DELETE",
        actionType: "GAME"
      },
      {
        styles: {
          component: Link,
          to: "/games/draft?type=settings",
          color: "secondary"
        },
        icon: CopyIcon,
        key: "game-btn-copy",
        text: "COPY",
        actionType: "GAME"
      }
    ],
    "/games?type=public": [
      {
        styles: {
          component: Link,
          to: "/games/live/",
          color: "secondary"
        },
        icon: JoinIcon,
        text: "JOIN",
        key: "game-btn-join",
        actionType: "GAME"
      },
      {
        styles: {
          component: Link,
          to: "/games/live/:id/spectator",
          color: "secondary"
        },
        icon: ViewIcon,
        text: "Spectate",
        key: "game-btn-spectate",
        actionType: "GAME"
      }
    ],
    "/games/draft?type=settings": [
      {
        styles: {
          component: "button",
          color: "secondary"
        },
        key: "btn-publish-game",
        text: "PUBLISH",
        isReq: true,
        icon: PresentToAll,
        data: { status: "live" },
        actionType: "GAME_CREATE_UPDATE"
      }
    ],
    "/games/draft?type=questions": [
      {
        styles: {
          component: Link,
          color: "secondary",
          to: "/questions/new"
        },
        key: "btn-new-question",
        text: "new",
        icon: AddIcon,
        actionType: "QUESTION"
      }
    ],
    "/live/player": {
      pause: [
        {
          styles: {
            component: "button",
            color: "secondary"
          },
          key: "btn-ready",
          text: "READY",
          icon: ReadyIcon,
          actionType: "LIVE_PLAYER_READY"
        },
        {
          styles: {
            component: "button",
            color: "secondary"
          },
          key: "btn-raise-hand",
          text: "HELP",
          icon: HandIcon,
          actionType: "LIVE_PLAYER_HELP"
        }
      ],
      play: [
        {
          styles: {
            component: "button",
            color: "secondary"
          },
          key: "btn-submit",
          text: "SUBMIT",
          icon: CheckCircle,
          actionType: "LIVE_PLAYER_READY"
        },
        {
          styles: {
            component: "button",
            color: "secondary"
          },
          key: "btn-raise-hand",
          text: "HELP",
          icon: HandIcon,
          actionType: "LIVE_PLAYER_HELP"
        }
      ]
    },
    "/live/admin": {
      pause: [
        {
          styles: {
            component: "button",
            color: "secondary"
          },
          key: "btn-play",
          text: "PLAY",
          icon: PlayIcon,
          actionType: "LIVE_GAME_UPDATE",
          data: { status: "play" }
        }
      ],
      play: [
        {
          styles: {
            component: "button",
            color: "primary"
          },
          key: "btn-enter-lobby",
          text: "LOBBY",
          icon: AppIcon,
          actionType: "ADMIN_ENTER_ENTER_LOBBY"
        },
        {
          styles: {
            component: "button",
            color: "secondary"
          },
          key: "btn-questions",
          text: "QUESTIONS",
          icon: QuestionsIcon,
          actionType: "ADMIN_ENTER_QUESTIONS"
        },
        {
          styles: {
            component: "button",
            color: "secondary"
          },
          key: "btn-pause",
          text: "PAUSE",
          icon: PauseIcon,
          actionType: "LIVE_GAME_UPDATE",
          data: { status: "pause" }
        }
      ]
    }
  }
};
