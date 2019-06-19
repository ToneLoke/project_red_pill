const styles = (theme) => ({
  centered: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: '1 0',
    height: '100%',
    flexDirection: 'column',
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
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    minHeight: '100%'
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
