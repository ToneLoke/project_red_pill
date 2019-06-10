export default theme => ({
  container: {
    boxSizing: 'border-box',
    minHeight: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    background: 'white',
    padding: theme.spacing.unit
  },
  player: {
    margin: theme.spacing.unit * 2
  },
  avatar: {
    width: theme.spacing.unit * 8,
    height: theme.spacing.unit * 8
  },
  badge: {
    "& span": {
      backgroundColor: "#68CC4C",
      color: "#ffffff"
    }
  },
});
