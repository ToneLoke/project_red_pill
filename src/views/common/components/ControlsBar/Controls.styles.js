const styles = theme => ({
  text: {
    paddingTop: theme.spacing.unit * 2,
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2
  },
  paper: {
    paddingBottom: 50
  },
  list: {
    marginBottom: theme.spacing.unit * 2
  },
  appBar: {
    position: "fixed",
    display: "flex",
    top: "auto",
    bottom: 0,
    height: 60,
    backgroundColor: "#673AB7",
    width: "100%",
    color: "white",
    textAlign: "center",
    zIndex: 100,
    background: `url("/images/header-pattern.png") repeat top left`
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "transparent",
    position: "relative",
    width: "100%",
    height: 56,
    marginTop: -28
  },
  left: {
    width: "60%",
    height: "inherit",
  },
  right: {
    width: "40%",
    height: "inherit",

  }
});

export default styles;
