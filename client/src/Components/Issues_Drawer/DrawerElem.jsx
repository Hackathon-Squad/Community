import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import '../../App.css';

export default function DrawerElem({title,location, likes}) {
    return (
        <ListItem button className="drawerElement">
        <ListItemText>Likes: {likes}</ListItemText>
          <ListItemText>Issue: {title}</ListItemText>
          <ListItemText>Location: {location}</ListItemText>
        </ListItem>
    );
}