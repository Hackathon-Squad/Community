import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import rectLogo from '../../graphics/logo_rect.png';
import DrawerElem from './DrawerElem';
import '../../App.css';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { useEffect } from 'react';
import axios from "axios";
import './issuedrawer.css';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

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
      result.data.sort((a,b) => b.upvotes - a.upvotes);
    }
    useEffect(() => {
      loadEvents();
    },
    []);
    const [issuesData, setIssuesData] = useState(null);
    const [filter, setFilter] = useState({
        type: "Vaccination Centers"
    })
    const updateFilter = (e) => {
      setFilter({...filter, type: e.target.value});
      setIssuesData([...issuesData].sort((a,b) => b.upvotes - a.upvotes));
    }
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
        <ListItem>
          <ListItemText>Filter by type </ListItemText>
          <FormControl className={classes.formControl}>
            <Select
              value={filter.type}
              onChange={updateFilter}
              displayEmpty
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="All">All</MenuItem>
              <MenuItem value="Natural Disasters">Natural Disasters</MenuItem>
              <MenuItem value="Public Disturbances">Public Disturbances</MenuItem>
              <MenuItem value="Vaccination Centers">Vaccination Centers</MenuItem>
              <MenuItem value="Food Services">Food Services</MenuItem>
            </Select>
          </FormControl>
        </ListItem>
        <Divider />
        <List>
        {issuesData != null ? issuesData.map(item => ( filter.type == "All" || filter.type == item.type ?
          <div>
          <DrawerElem title={item.title} likes={item.upvotes} type={item.type}/>
          <hr class="dividerColor" />
          </div>
          : <div></div>
        )) : <div></div>}
        </List>
      </Drawer>
    );
}