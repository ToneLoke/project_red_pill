import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { useStore } from '../../store';
import { ListItemSecondaryAction, Checkbox, Paper, List, ListItem, ListItemText } from '@material-ui/core';

// import Avatar from '@material-ui/core/Avatar';

const styles = theme => ({
  container: {
    width: '100%',
    marginBottom: '18%',
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  btnWrapper: {
    width: '90%',
  },
  btn: {
    width: '100%',
  }
});

const Questions = ({ classes, history }) => {
  const { state: { questions }, dispatch } = useStore();
  console.count("Questions.jsx")
  useEffect(()=>{
    console.log("DID MOUNT", questions)
    if(!questions){
      dispatch({type: "QUESTION_FETCH_ALL"})
    }
  });

  const renderQuestions = () => {
    return(
      <List>
        {questions.map( g => {
          return(
            <ListItem key={g._id} button>
              <ListItemText primary={`${g.question}`} secondary={`${g.points}`} />
              <ListItemSecondaryAction>
                <Checkbox
                  onChange={()=>{}}
                />
              </ListItemSecondaryAction>
            </ListItem>
          )
        })}
      </List>
    )
  }
  return (
    <Fragment>
    {
      !questions ? "Loading.." :
      questions.length === 0 ?
      (
        <Paper className={classes.container}>
          <Typography variant="body2" color="inherit" >
            You have no saved questions.
          </Typography>
          <Typography variant="body2" color="inherit" >
            Please press '+' below.
          </Typography>
        </Paper>
        )
        :(
          <Paper className={classes.container}>
             {renderQuestions()}
          </Paper>
        )
      }
    </Fragment>
  )
}


export default withStyles(styles)(Questions);
