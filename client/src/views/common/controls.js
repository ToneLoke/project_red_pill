//======================= Components =======================
import { Link } from 'react-router-dom';
//======================= All Icons Needed =======================
import AddIcon from '@material-ui/icons/Add';
import PresentToAll from '@material-ui/icons/PresentToAll';
import PauseIcon from '@material-ui/icons/PauseCircleFilled';
import PlayIcon from '@material-ui/icons/PlayArrow';
import SkipIcon from '@material-ui/icons/SkipNext';
import EditIcon from '@material-ui/icons/Edit';
import PublishedIcon from '@material-ui/icons/Book';
import AccountIcon from '@material-ui/icons/Person';
import AccountAddIcon from '@material-ui/icons/PersonAdd';
import Settings from '@material-ui/icons/Settings';
import ViewList from '@material-ui/icons/ViewList';
import SendIcon from '@material-ui/icons/Send';
import CheckCircle from '@material-ui/icons/Check';
import ReadyIcon from '@material-ui/icons/HowToReg';
import HandIcon from '@material-ui/icons/PanTool';
import AppIcon from '@material-ui/icons/AppsRounded';
import QuestionsIcon from '@material-ui/icons/ListAltRounded';

export default {
  nav: {
    '/authenticate': [
      {
        component: Link,
        icon: AccountIcon,
        key: 'login-btn',
        text: 'login',
        to: '/authenticate?type=login'
      },
      {
        component: Link,
        icon: AccountAddIcon,
        key: 'register-btn',
        text: 'register',
        to: '/authenticate?type=register'
      }
    ],
    '/games': [
      {
        component: Link,
        icon: EditIcon,
        key: 'draft-games-btn',
        text: 'user sessions',
        to: '/games?type=draft'
      },
      {
        component: Link,
        icon: PublishedIcon,
        key: 'publised-games-btn',
        text: 'public sessions',
        to: '/games?type=live'
      }
    ],
    '/games/draft': [
      {
        component: Link,
        icon: Settings,
        text: 'settings',
        key: 'settings-btn',
        to: '/games/draft?type=settings'
      },
      {
        component: Link,
        icon: ViewList,
        text: 'questions',
        key: 'questions-btn',
        to: '/games/draft?type=questions'
      }
    ]
  },
  actions: {
    '/authenticate?type=login': [
      {
        styles: {
          component: 'button',
          color: 'secondary'
        },
        text: 'sign in',
        isReq: true,
        icon: SendIcon,
        key: 'auth-btn-login',
        actionType: 'USER_AUTHENTICATE'
      }
    ],
    '/authenticate?type=register': [
      {
        styles: {
          component: 'button',
          color: 'secondary'
        },
        key: 'auth-btn-register',
        text: 'sign up',
        isReq: true,
        icon: CheckCircle,
        actionType: 'USER_REGISTER'
      }
    ],
    '/games?type=draft': [
      {
        styles: {
          component: Link,
          to: '/games/draft?type=settings',
          color: 'secondary'
        },
        icon: AddIcon,
        text: 'new',
        key: 'game-btn-new',
        actionType: 'GAME'
      },
      {
        styles: {
          component: Link,
          to: '/games/draft?type=settings',
          color: 'secondary'
        },
        icon: EditIcon,
        key: 'game-btn-upate',
        text: 'edit',
        actionType: 'GAME'
      }
    ],
    '/games?type=live': [
      {
        styles: {
          component: Link,
          to: '/games/draft?type=settings',
          color: 'secondary'
        },
        icon: AddIcon,
        text: 'new',
        key: 'game-btn-new',
        actionType: 'GAME'
      }
    ],
    '/games/draft?type=settings': [
      {
        styles: {
          component: 'button',
          color: 'secondary'
        },
        key: 'btn-publish-game',
        text: 'publish',
        isReq: true,
        icon: PresentToAll,
        data: { status: 'live' },
        actionType: 'GAME_CREATE_UPDATE'
      }
    ],
    '/games/draft?type=questions': [
      {
        styles: {
          component: Link,
          color: 'secondary',
          to: '/questions/new'
        },
        key: 'btn-new-question',
        text: 'new',
        icon: AddIcon,
        actionType: 'QUESTION'
      }
    ],
    '/live/player': {
      pause: [
        {
          styles: {
            component: 'button',
            color: 'secondary'
          },
          key: 'btn-ready',
          text: 'ready',
          icon: ReadyIcon,
          actionType: 'LIVE_PLAYER_READY'
        },
        {
          styles: {
            component: 'button',
            color: 'secondary'
          },
          key: 'btn-raise-hand',
          text: 'help',
          icon: HandIcon,
          actionType: 'LIVE_PLAYER_HELP'
        }
      ],
      play: [
        {
          styles: {
            component: 'button',
            color: 'secondary'
          },
          key: 'btn-submit',
          text: 'submit',
          icon: CheckCircle,
          actionType: 'LIVE_PLAYER_READY'
        },
        {
          styles: {
            component: 'button',
            color: 'secondary'
          },
          key: 'btn-raise-hand',
          text: 'help',
          icon: HandIcon,
          actionType: 'LIVE_PLAYER_HELP'
        }
      ]
    },
    '/live/admin': {
      pause: [
        {
          styles: {
            component: 'button',
            color: 'primary'
          },
          key: 'btn-enter-lobby',
          text: 'LOBBY',
          icon: AppIcon,
          actionType: 'ADMIN_ENTER_ENTER_LOBBY'
        },
        {
          styles: {
            component: 'button',
            color: 'secondary'
          },
          key: 'btn-questions',
          text: 'QUESTIONS',
          icon: QuestionsIcon,
          actionType: 'ADMIN_ENTER_QUESTIONS'
        },
        {
          styles: {
            component: 'button',
            color: 'secondary'
          },
          key: 'btn-play',
          text: 'play',
          icon: PlayIcon,
          actionType: 'LIVE_GAME_UPDATE',
          data: { status: 'play' }
        }
      ],
      play: [
        {
          styles: {
            component: 'button',
            color: 'primary'
          },
          key: 'btn-enter-lobby',
          text: 'LOBBY',
          icon: AppIcon,
          actionType: 'ADMIN_ENTER_ENTER_LOBBY'
        },
        {
          styles: {
            component: 'button',
            color: 'secondary'
          },
          key: 'btn-questions',
          text: 'QUESTIONS',
          icon: QuestionsIcon,
          actionType: 'ADMIN_ENTER_QUESTIONS'
        },
        {
          styles: {
            component: 'button',
            color: 'secondary'
          },
          key: 'btn-pause',
          text: 'pause',
          icon: PauseIcon,
          actionType: 'LIVE_GAME_UPDATE',
          data: { status: 'pause' }
        }
      ]
    }
  }
};
