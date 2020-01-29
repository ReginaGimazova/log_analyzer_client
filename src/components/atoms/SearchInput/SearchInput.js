import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import InputBase from "@material-ui/core/InputBase";
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(theme => ({
  root: {
    padding: '0 10px',
    margin: '20px 0',
    display: 'flex',
    alignItems: 'center',
    width: '40%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  input: {
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
}));

const SearchInput = () => {
  const classes = useStyles();
  
  return (
    <Paper component="form" className={classes.root}>
    <InputBase className={classes.input} placeholder="Search by table name"/>
    <IconButton className={classes.iconButton} type="submit" aria-label="search">
      <SearchIcon />
    </IconButton>
    </Paper>
  )
};

export default SearchInput;
