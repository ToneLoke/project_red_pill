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
    display: "grid",
    top: "auto",
    bottom: 0,
    height: 60,
    backgroundColor: "#3B55AB",
    width: "100%",
    color: "white",
    textAlign: "center",
    zIndex: 100,
    background: `url("/images/header-pattern.png") repeat top left`
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "transparent",
    position: "relative",
    height: 56,
    marginTop: -40,
    padding: '20px',
    
  },
  left: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "transparent",
    position: "relative",
    width: "60%",
  },
  right: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "transparent",
    position: "relative",
    width: "40%",
  },
  
});

export default styles;
