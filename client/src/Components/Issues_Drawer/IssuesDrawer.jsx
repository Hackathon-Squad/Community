import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import rectLogo from "../../graphics/logo_rect.png";
import DrawerElem from "./DrawerElem";
import "../../App.css";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { useEffect } from "react";
import axios from "axios";
import "./issuedrawer.css";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    width: "25%",
  },
}));

export default function IssuesDrawer() {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = {
      "id":"uuid",
      "title":"Sample Post",
      "description":"Sample Description",
      "coordinates":{
          "latitude":32.8801,
          "longitude":-117.234
      },
      "type":"Sample Type",
      "imageURL":"sampleimageurl",
      "upvotes":0,
      "resolved":0
    };
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
        type: "All"
    })
    const updateFilter = (e) => {
      setFilter({...filter, type: e.target.value});
      setIssuesData([...issuesData].sort((a,b) => b.upvotes - a.upvotes));
    }
    const respondUpVote = async (id) => {
      const updatedItem = [...issuesData].filter((item) => item.id == id)[0];
      //console.log(updatedItem);
      updatedItem.upvotes++;
      setIssuesData([...issuesData]);
      //const result2 = await axios.post("/api/create-event", updatedItem, config);
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
          <DrawerElem id={item.id} title={item.title} likes={item.upvotes} type={item.type} addUpvote={respondUpVote}/>
          <hr class="dividerColor" />
          </div>
          : <div></div>
        )) : <div></div>}
        </List>
      </Drawer>
    );
}
