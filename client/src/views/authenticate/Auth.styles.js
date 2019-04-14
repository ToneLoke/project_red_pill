const authStyles = theme => ({
  header: {
    height: "50px",
    width: "100%",
    backgroundColor: theme.palette.primary.main,
    color: "white"
  },
  textField: {
    width: "90%",
    marginBottom: 40
  },
  form: {
    width: "100%",
    marginBottom: 60,
    height: "50%",
    display: "flex",
    flexGrow: 1,
    alignItems: "center",
    flexDirection: "column",
    borderRadius: 0,
    "& .hero-section": {
      height: 320,
      width: "100%",
      backgroundColor: "#512DA8",
      background: `url("/images/header-pattern.png") repeat top left`,
      marginBottom: 30
    }
  },
});

export default authStyles
