//======================= Components =======================
import { Link } from 'react-router-dom';
//======================= All Icons Needed =======================
import EditIcon from '@material-ui/icons/Edit';
import PublishedIcon from '@material-ui/icons/Book';
import AccountIcon from '@material-ui/icons/Person';
import AccountAddIcon from '@material-ui/icons/PersonAdd';
import Settings from '@material-ui/icons/Settings';
import ViewList from '@material-ui/icons/ViewList';
import SendIcon from '@material-ui/icons/Send';
import CheckCircle from '@material-ui/icons/Check';
import AppIcon from '@material-ui/icons/AppsRounded';
import QuestionsIcon from '@material-ui/icons/ListAltRounded';

export default {
  nav: {
    '/authenticate': [
      {
        styles: {
          login: {
            color: 'primary'
          },
          register: {
            color: 'secondary'
          }
        },
        component: Link,
        icon: AccountIcon,
        key: 'login-btn',
        text: 'LOGIN',
        to: '/authenticate?type=login'
      },
      {
        styles: {
          register: {
            color: 'primary'
          },
          login: {
            color: 'secondary'
          }
        },
        component: Link,
        icon: AccountAddIcon,
        key: 'register-btn',
        text: 'REGISTER',
        to: '/authenticate?type=register'
      }
    ],
    '/games': [
      {
        styles: {
          draft: {
            color: 'primary'
          },
          live: {
            color: 'secondary'
          }
        },
        component: Link,
        icon: EditIcon,
        key: 'draft-games-btn',
        text: 'GAMES',
        to: '/games?type=draft'
      },
      {
        styles: {
          live: {
            color: 'primary'
          },
          draft: {
            color: 'secondary'
          }
        },
        component: Link,
        icon: PublishedIcon,
        key: 'publised-games-btn',
        text: 'PUBLIC GAMES',
        to: '/games?type=live'
      }
    ],
    '/games/draft': [
      {
        styles: {
          settings: {
            color: 'primary'
          },
          questions: {
            color: 'secondary'
          }
        },
        component: Link,
        icon: Settings,
        text: 'GAME SETTINGS',
        key: 'settings-btn',
        to: '/games/draft?type=settings'
      },
      {
        styles: {
          questions: {
            color: 'primary'
          },
          settings: {
            color: 'secondary'
          }
        },
        component: Link,
        icon: ViewList,
        text: 'QUESTIONS',
        key: 'questions-btn',
        to: '/games/draft?type=questions'
      },

    ],
    '/live': [
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
    ]
  },
  actions: {
    '/authenticate?type=login': [
      {
        styles: {
          component: 'button',
          color: 'secondary'
        },
        text: 'SIGN IN',
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
        text: 'SIGN UP',
        isReq: true,
        icon: CheckCircle,
        actionType: 'USER_REGISTER'
      }
    ]
  }
};
