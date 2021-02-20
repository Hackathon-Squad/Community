import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import rectLogo from '../../graphics/logo_rect.png';
import DrawerElem from './DrawerElem';
import '../../App.css';

const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    width: 350,
  },
}));

export default function IssuesDrawer() {
    const classes = useStyles();
    const [issuesData, setIssuesData] = useState({
      issues: [
        {
          title: "Tree Collapse 1",
          location: "Filbert St. 1",
          likes: 1,
        },
        {
          title: "Tree Collapse 2",
          location: "Filbert St. 2",
          likes: 3,
        },
        {
          title: "Tree Collapse 3",
          location: "Filbert St. 3",
          likes: 1,
        },
        {
          title: "Tree Collapse 4",
          location: "Filbert St. 4",
          likes: 4,
        },
        {
          title: "Tree Collapse 5",
          location: "Filbert St. 5",
          likes: 2,
        },
        {
          title: "Tree Collapse 6",
          location: "Filbert St. 6",
          likes: 5,
        },
        {
          title: "Tree Collapse 6",
          location: "Filbert St. 6",
          likes: 2,
        },
        {
          title: "Tree Collapse 6",
          location: "Filbert St. 6",
          likes: 1,
        },
      ]
    })
    return (
        <Drawer
        className="IssuesDrawer"
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
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
        {issuesData.issues.map(item => ( item.likes > 1 ?
          <div>
          <DrawerElem title={item.title} location={item.location} likes={item.likes}/>
          <Divider />
          </div>
          :
          <div></div>
        ))}
        </List>
      </Drawer>
    );
}