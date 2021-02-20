import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import rectLogo from '../../graphics/logo_rect.png';
import '../../App.css';

export default function IssuesDrawer() {
  const classes = useStyles();
    return (
        <Drawer
        className="IssuesDrawer"
        variant="permanent"
        style={{width:350}}
        anchor="left"
      >
        <div className="IssuesToolbar"/>
        <div id="imgDiv" style={{textAlign: 'center'}}>
        <img 
            src={rectLogo} 
            style={{width:"80%"}}
        />
        </div>
        <Divider />
        <List>
        <ListItem button className="drawerElement">
          <ListItemText primary="Issue: Tree Collapse"/>
          <ListItemText primary="Location: Filbert St."/>
        </ListItem>
        <Divider />
        <ListItem button className="drawerElement">
          <ListItemText primary="Issue: Tree Collapse"/>
          <ListItemText primary="Location: Filbert St."/>
        </ListItem>
        <Divider />
        <ListItem button className="drawerElement">
          <ListItemText primary="Issue: Tree Collapse"/>
          <ListItemText primary="Location: Filbert St."/>
        </ListItem>
        <Divider />
        <ListItem button className="drawerElement">
          <ListItemText primary="Issue: Tree Collapse"/>
          <ListItemText primary="Location: Filbert St."/>
        </ListItem>
        <Divider />
        <ListItem button className="drawerElement">
          <ListItemText primary="Issue: Tree Collapse"/>
          <ListItemText primary="Location: Filbert St."/>
        </ListItem>
        <Divider />
        <ListItem button className="drawerElement">
          <ListItemText primary="Issue: Tree Collapse"/>
          <ListItemText primary="Location: Filbert St."/>
        </ListItem>
        <Divider />
        <ListItem button className="drawerElement">
          <ListItemText primary="Issue: Tree Collapse"/>
          <ListItemText primary="Location: Filbert St."/>
        </ListItem>
        <Divider />
        <ListItem button className="drawerElement">
          <ListItemText primary="Issue: Tree Collapse"/>
          <ListItemText primary="Location: Filbert St."/>
        </ListItem>
        <Divider />
        <ListItem button className="drawerElement">
          <ListItemText primary="Issue: Tree Collapse"/>
          <ListItemText primary="Location: Filbert St."/>
        </ListItem>
        <Divider />
        <ListItem button className="drawerElement">
          <ListItemText primary="Issue: Tree Collapse"/>
          <ListItemText primary="Location: Filbert St."/>
        </ListItem>
        <Divider />
        <ListItem button className="drawerElement">
          <ListItemText primary="Issue: Tree Collapse"/>
          <ListItemText primary="Location: Filbert St."/>
        </ListItem>
        </List>
      </Drawer>
    );
}