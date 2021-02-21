import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import './issuedrawer.css';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import IconButton from '@material-ui/core/IconButton';

export default function DrawerElem({title, id, likes, type, addUpvote}) {
    return (
        <ListItem button className="drawerElement">
          <div style={{display:'flex', justifyContent:'space-between', width:'100%'}}>
                <div style={{display:'flex',flexDirection:'column'}}>
                    <ListItemText>Title: {title}</ListItemText>
                    <ListItemText >Type: {type}</ListItemText>
                </div>
                <div>
                    <IconButton onClick={() => addUpvote(id)}>
                      <ThumbUpIcon id="thumbsUp" />
                      <ListItemText>&nbsp;&nbsp;{likes}</ListItemText>
                    </IconButton>
                </div>
            </div>
        </ListItem>
    );
}