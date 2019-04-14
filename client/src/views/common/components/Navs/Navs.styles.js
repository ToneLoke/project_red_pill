export default {
  container: {
    display: 'flex',
    paddingRight: '28px',
    justifyContent: 'space-around',
    '& div:last-child > button': {
      width: '45px',
      height: '45px'
    },
    '& div': {
      paddingRight: '24px',
    }
  },
  action: {
    display: 'flex',
    height: '60px',
    width: '60px'
  },
  link: {
    border: 'none',
    textDecoration: 'none',
    '& span': {
      fontSize: '12px'
    },
  }
};
