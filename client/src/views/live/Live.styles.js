export default {
  layout: {
    backgroundColor: "rgba(59,85,171,1)",
    width: "100%",
    height: 'calc(100vh - 50px)',
    overflow: 'none',
    display: 'flex',
    flexDirection: 'column'
  },
  main: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'stretch',
    height: '100%',
    overflow: 'auto'
  },
  progress: {
    margin: "0px auto",
    height: "40px",
    width: "40px",
    position: "relative",
    top: "calc(50vh - 80px)",
    zIndex: 102
  },
  overlay: {
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(59,85,171,0.8)",
    zIndex: 101,
    position: "relative"
  },
  suspense: {
    height: "100%",
    width: "100%",
    position: "absolute",
  }
};
