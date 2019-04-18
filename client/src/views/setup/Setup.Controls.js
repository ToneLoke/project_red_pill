//======================= Live - Actions and Navigation - Presentation =======================
import { Link } from 'react-router-dom';

//======================= All Icons Needed =======================
import AddIcon from '@material-ui/icons/Add';
import PresentToAll from '@material-ui/icons/PresentToAll';
import EditIcon from '@material-ui/icons/Edit';
import PublishedIcon from '@material-ui/icons/Book';
import Settings from '@material-ui/icons/Settings';
import ViewList from '@material-ui/icons/ViewList';

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
  }
};
