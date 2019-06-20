const authStyles = (theme) => ({
  header: {
    height: '50px',
    width: '100%',
    backgroundColor: theme.palette.primary.main,
    color: 'white'
  },
  textField: {
    width: '90%',
    marginBottom: 40
  },
  form: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    '& .hero-section': {
      height: 320,
      width: '100%',
      backgroundColor: '#3B55AB',
      background: `url("/images/header-pattern.png") repeat top left`,
      marginBottom: 30
    }
  }
});

export default authStyles;
