import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const optionStyles = theme => ({
  container: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
    position: 'relative'
  },
  button: {
    display: 'block',
    textTransform: 'none',
    width: '100%',
    borderStyle: 'solid',
  },
  idle: {
    borderWidth: 1,
    borderColor: theme.palette.textSecondary,
  },
  selected: {
    borderWidth: 3,
    borderColor: 'rgb(51, 86, 178)'
  },
  correct: {
    borderWidth: 3,
    borderColor: 'rgba(104,213,98,1)'
  },
  incorrect: {
    borderWidth: 3,
    borderColor: 'rgba(225,41,41,1)'
  }
});

const Option = ({ children, classes, status, onClick }) => (
  <div className={classes.container}>
    <Button
      variant="outlined"
      onClick={onClick}
      className={classNames(classes.button, {
        [classes[status]]: true,
      })}
    >
      <Typography variant="body1" color="textSecondary" align="left">
        {children}
      </Typography>
    </Button>
  </div>
)

export default withStyles(optionStyles)(Option);
