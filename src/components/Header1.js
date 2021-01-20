import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core/styles';

export default function Header1() {
  const useStyles = makeStyles((theme) => ({
    grow: {
      flexGrow: 1,
    }}));
    const classes = useStyles();


  return (
  <AppBar position="static" className={classes.grow} >
  <Tabs className={classes.grow}   aria-label="simple tabs example">
  <Tab label="Page One"   href="/page1"/>
    <Tab label="Page Two" href="page2"/>
  </Tabs>
</AppBar>
  )
    
}
