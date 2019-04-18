export default {
  container: {
    width: '100%',
    position: 'relative',
    overflow: 'overlay',
    maxHeight: 'calc(100vh - 50px)'
  },
  title: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    '& div': {
      width: '50%'
    },
    color: 'white'
  },
  lobbyAdminHeader: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    padding: "20px 20px"
  },
  players: {
    backgroundColor: 'rgba(255,255,255, 1)'
  },
  player: {
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,1)',
    borderBottom: 'solid 1px rgba(224,224,224,1)',
    color: 'rgba(0,0,0,0.54)',
    display: 'flex',
    flexDirection: 'row',
    flex: '1',
    height: '49px',
    justifyContent: 'flex-start',
    padding: '9px'
  },
  questionsOverview: {
    color: "rgba(0,0,0,0.54)",
    display: "flex",
    padding: "20px 15px",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-start",
    backgroundColor: "rgba(255,255,255,1)",
    borderBottom: "solid 1px #E0E0E0"
  },
  scoreOverview: {
    color: "rgba(0,0,0,0.54)",
    display: "flex",
    padding: "10px 15px",
    justifyContent: "flex-start",
    // borderBottom: "solid 1px #E0E0E0"
  },
  rankNum: { marginRight: '20px', marginLeft: '20px' },
  avatarFab: { marginRight: '20px' },
  user: { marginRight: '20px' },
  badge: {
    right: '20px',
    marginLeft: 'auto',
    '& span': {
      backgroundColor: '#5763E7',
      color: '#ffffff'
    }
  },
  badgeGreen: {
    '& span': {
      backgroundColor: '#68CC4C'
    }
  },
  posRelative: { position: 'relative' },
  bgWhite: {
    backgroundColor: 'rgba(255,255,255,1)'
  },
  barScore: {
    width: '300px',
    height: '80px'
  },
  barScoreContainer: {
    width: '100%',
    height: '100%'
  },
  gameInfoList: {
    height: 'calc(100vh - 138px)'
  },
  playerSession: {
    height: 'calc(100vh - 138px)'
  },
  adminSession: {
    height: 'calc(100vh - 138px)'
  }
};
