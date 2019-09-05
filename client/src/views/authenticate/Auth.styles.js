const authStyles = (theme) => ({
  header: {
    minHeight: '50px',
    minWidth: '100%',
    backgroundColor: theme.palette.primary.main,
    color: 'white'
  },
  textField: {
    minWidth: '90%',
    marginBottom: '30px'
  },
  form: {
    minHeight: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  heroSection: {
    minHeight: '320px',
    minWidth: '100%',
    backgroundColor: '#3B55AB',
    marginBottom: '30px'
  }
});

export default authStyles;
