//======================= Live - Actions and Navigation - Presentation =======================
import { Link } from 'react-router-dom';
//======================= All Icons Needed =======================
import AddIcon from '@material-ui/icons/Add';
import PresentToAll from '@material-ui/icons/PresentToAll';
import PauseIcon from '@material-ui/icons/PauseCircleFilled';
import PlayIcon from '@material-ui/icons/PlayArrow';
import EditIcon from '@material-ui/icons/Edit';
import PublishedIcon from '@material-ui/icons/Book';
import Settings from '@material-ui/icons/Settings';
import ViewList from '@material-ui/icons/ViewList';
import AppIcon from '@material-ui/icons/AppsRounded';
import QuestionsIcon from '@material-ui/icons/ListAltRounded';

export default {
  nav: {
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
    '/games?type=draft': [
      {
        styles: {
          component: Link,
          to: '/games/draft?type=settings',
          color: 'secondary'
        },
        icon: AddIcon,
        text: 'NEW GAME',
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
        text: 'EDIT',
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
        text: 'NEW GAME',
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
        text: 'PUBLISH',
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
    
    '/live/admin': {
      pause: [
        {
          styles: {
            component: 'button',
            color: 'secondary'
          },
          key: 'btn-play',
          text: 'PLAY',
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
          actionType: 'LOBBY'
        },
        {
          styles: {
            component: 'button',
            color: 'secondary'
          },
          key: 'btn-questions',
          text: 'QUESTIONS',
          icon: QuestionsIcon,
          actionType: 'QUESTIONS'
        },
        {
          styles: {
            component: 'button',
            color: 'secondary'
          },
          key: 'btn-pause',
          text: 'PAUSE',
          icon: PauseIcon,
          actionType: 'LIVE_GAME_UPDATE',
          data: { status: 'pause' }
        }
      ]
    }
  }
};
