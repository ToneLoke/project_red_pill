import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const optionStyles = theme => ({
  container: {
    display: 'block',
    textTransform: 'none',
    width: '100%',
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
  selected: {
    border: 'solid rgb(0.2, 0.34, 0.7) 3px'
  }
});

const Option = withStyles(optionStyles)(({ children, classes, selected, onClick }) => (
  <Button
    variant="outlined"
    onClick={onClick}
    className={classNames(classes.container, { [classes.selected]: selected })}
  >
    <Typography variant="body1" color="textSecondary" align="left">
      {children}
    </Typography>
  </Button>
));


const styles = theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%'
  },
  question: {
    padding: theme.spacing.unit * 3
  },
  options: {
    background: 'white',
    paddingTop: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3,
    paddingLeft: theme.spacing.unit * 3,
    paddingBottom: 30 + theme.spacing.unit * 3,
    overflow: 'auto',
  }
});

const Question = ({ classes}) => {
  const sampleOptions = [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Cras maximus molestie auctor. Morbi vel neque in erat cursus varius.',
      'Pellentesque ultrices bibendum aliquam.',
      'Pellentesque dapibus lorem at sapien ultrices, vel consectetur nisi ullamcorper.  Aliquam quis pretium ipsum.'
  ];

  const [selected, setSelected] = useState()

  return <div className={classes.container}>
    <div className={classes.question}>
      <Typography align="center" variant="overline" color="secondary">
        Question 2/12
      </Typography>
      <Typography align="center" variant="body1" color="secondary">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        dapibus lorem at sapien ultrices, vel consectetur nisi ullamcorper.
        Aliquam quis pretium ipsum. Cras maximus molestie auctor. Morbi vel neque
        in erat cursus varius?
      </Typography>
    </div>

    <div>timer</div>

    <div className={classes.options}>
      {sampleOptions.map((opt, key) => (
        <Option selected={selected === key} onClick={() => setSelected(key)}>{opt}</Option>
      ))}
    </div>
  </div>
};

export default withStyles(styles)(Question);
