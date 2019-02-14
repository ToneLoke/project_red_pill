import React, { Fragment } from 'react';
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
// import Avatar from '@material-ui/core/Avatar';

const styles = theme => ({
  text: {
    paddingTop: theme.spacing.unit * 2,
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
  },
  paper: {
    paddingBottom: 50,
  },
  list: {
    marginBottom: theme.spacing.unit * 2,
  },
  subHeader: {
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  toolbar: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
});
const sessions = [
  {
    id: 1,
    primary: 'Vehicle Sales',
    secondary: "1000 total points",
    person: '/static/images/avatar/5.jpg',
  },
  {
    id: 2,
    primary: 'Vehicle Anatomony',
    secondary: "2500 total points",
    person: '/static/images/avatar/5.jpg',
  },
  {
    id: 3,
    primary: 'Dealership Policy',
    secondary: "500 total points",
    person: '/static/images/avatar/5.jpg',
  },
];

const Games = ({ classes }) => {

  return (
    <Paper square className={classes.paper}>
      <Typography className={classes.text} variant="h5" gutterBottom>
        Hosted Sessions
      </Typography>
      <List className={classes.list}>
        {sessions.map(({ id, primary, secondary, person }) => (
          <Fragment key={id}>
            {id === 1 && <ListSubheader className={classes.subHeader}>Today</ListSubheader>}
            {id === 3 && <ListSubheader className={classes.subHeader}>Yesterday</ListSubheader>}
            <ListItem button>
              <ListItemText primary={primary} secondary={secondary} />
            </ListItem>
          </Fragment>
        ))}
      </List>
    </Paper>
  )
}


export default withStyles(styles)(Games);
