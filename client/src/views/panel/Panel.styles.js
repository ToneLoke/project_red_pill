const styles = theme => ({
  centered: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    flexDirection: "column"
  },
  live: {
    color: "green",
    marginRight: theme.spacing.unit * 2
  },
  draft: {
    color: "orange",
    marginRight: theme.spacing.unit * 2
  },
  done: {
    color: "gray",
    marginRight: theme.spacing.unit * 2
  },
  btnWrapper: {
    width: "90%"
  },
  btn: {
    width: "100%"
  },
  listItem: {
    borderBottom: "1px solid #dddddd",
    paddingBottom: 20
  },
  root: {
    backgroundColor: theme.palette.background.paper,
    position: "relative",
    minHeight: "100%"
  },
  listSection: {
    backgroundColor: "inherit"
  },
  ul: {
    backgroundColor: "inherit",
    padding: 0
  },
  badge: {
    right: "18px",
    marginLeft: "auto",
    "& span": {
      backgroundColor: "#5763E7",
      color: "#ffffff",
      padding: "9px"
    }
  },
  icon: {
    right: "20px"
  }
});

export default styles;
