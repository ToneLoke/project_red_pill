//======================= Components =======================
import { Link } from "react-router-dom";
//======================= MaterialUI Icons =======================
import AddIcon from "@material-ui/icons/Add";
import LaunchIcon from "@material-ui/icons/Launch";
import PublicIcon from "@material-ui/icons/Public";
import JoinIcon from "@material-ui/icons/GroupAdd";
import ViewIcon from "@material-ui/icons/Visibility";
import EditIcon from "@material-ui/icons/Edit";
import TrashIcon from "@material-ui/icons/Delete";
import CopyIcon from "@material-ui/icons/FileCopy";

export default {
  private: {
    nav: [
      {
        styles: {
          color: "primary"
        },
        component: Link,
        icon: EditIcon,
        key: "draft-games-btn",
        text: "PRIVATE",
        to: "/games?type=private"
      },
      {
        styles: {
          color: "secondary"
        },
        component: Link,
        icon: PublicIcon,
        key: "public-games-btn",
        text: "PUBLIC",
        to: "/games?type=public"
      }
    ],
    actions: [
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
    ]
  },
  public: {
    nav: [
      {
        styles: {
          color: "secondary"
        },
        component: Link,
        icon: EditIcon,
        key: "draft-games-btn",
        text: "PRIVATE",
        to: "/games?type=private"
      },
      {
        styles: {
          color: "primary"
        },
        component: Link,
        icon: PublicIcon,
        key: "public-games-btn",
        text: "PUBLIC",
        to: "/games?type=public"
      }
    ],
    actions: [
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
    ]
  }
};
