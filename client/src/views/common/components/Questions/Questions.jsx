// Packages
import React, { Fragment, useEffect } from 'react';

// Components
import { useStore } from '../../../../store';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { ListItemSecondaryAction, Checkbox, Paper, List, ListItem, ListItemText } from '@material-ui/core';

// Styles
import styles from "./Questions.styles";

const Questions = ({ classes, history }) => {
  const { state: { questions, game }, dispatch } = useStore();
  useEffect(()=>{
    console.log("DID MOUNT", questions)
    if(!questions){
      dispatch({type: "QUESTION_FETCH_ALL"}, true)
    }
  },[questions]);

  const addRemoveQ = (ck, id) => {
    const { questions: oldQuestions } = game;
    let updatedQuestions = [];
    if(ck){
      updatedQuestions = [...oldQuestions, id]
    }else{
      updatedQuestions = oldQuestions.filter( q => q !== id)
    }
    dispatch({type: 'GAME_CREATE_UPDATE', payload: {...game, questions: updatedQuestions}}, true)
  }

  const renderQuestions = () => {
    return(
      <List>
        {questions.map( g => {
          return(
            <ListItem key={g._id} >
              <ListItemText primary={`${g.question}`} secondary={`${g.points}`} />
              <ListItemSecondaryAction>
                <Checkbox
                  color="primary"
                  onChange={(e)=>addRemoveQ(e.target.checked, g._id)}
                  checked={ game.questions.indexOf(g._id) > -1}
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

export default withStyles(styles, { name: "Questions" })(Questions);
