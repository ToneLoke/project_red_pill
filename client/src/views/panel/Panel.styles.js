const styles = (theme) => ({
  container: {
    width: '100%',
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyItems: 'center',
    paddingTop: '20vh'
  },
  progress: {
    margin: 12,
    flexGrow: 1
  },
  live: {
    color: 'green',
    marginRight: theme.spacing.unit * 2
  },
  draft: {
    color: 'orange',
    marginRight: theme.spacing.unit * 2
  },
  done: {
    color: 'gray',
    marginRight: theme.spacing.unit * 2
  },
  btnWrapper: {
    width: '90%'
  },
  btn: {
    width: '100%'
  },
  listItem: {
    borderBottom: '1px solid #dddddd',
    paddingBottom: 20
  },
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'overlay',
    maxHeight: 'calc(100vh - 50px)'
  },
  listSection: {
    backgroundColor: 'inherit'
  },
  ul: {
    backgroundColor: 'inherit',
    padding: 0
  }
});

export default styles;