import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import rectLogo from '../../graphics/logo_rect.png';
import DrawerElem from './DrawerElem';
import '../../App.css';
import { useEffect } from 'react';
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    width: 350,
  },
}));

export default function IssuesDrawer() {
    const classes = useStyles();
    const loadEvents = async () => {
      const result = await axios.get("/api/posts");
      setIssuesData(result.data);
      console.log(result.data);
    }
    useEffect(() => {
      loadEvents();
    },
    []);
    const [issuesData, setIssuesData] = useState(null)
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
        {issuesData != null ? issuesData.map(item => (
          <div>
          <DrawerElem title={item.title} likes={item.upvotes} type={item.type}/>
          <hr class="dividerColor" />
          </div>
        )) : <div></div>}
        </List>
      </Drawer>
    );
}