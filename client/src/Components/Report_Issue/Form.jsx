import React, {useState} from 'react';
import '../../App.css';
import Card from '@material-ui/core/Card';
import { Typography } from '@material-ui/core';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import { ThemeProvider } from '@material-ui/core/styles';
import myTheme from './MyTheme';
import {useHistory} from 'react-router-dom';
import { Email } from '@material-ui/icons';

export default function Form() {
  const history = useHistory();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    triedTitle: false,
    triedDescription: false,
  })
  const {
    title,
    description,
    triedTitle,
    triedDescription,
  } = formData;
  const titleTried = () => {
    setFormData({ ...formData, triedTitle: true });
  }
  const descriptionTried = () => {
    setFormData({ ...formData, triedDescription: true });
  }
  const onChangeTitle = (e) => {
    setFormData({ ...formData, title: e.target.value });
  };
  const onChangeDescription = (e) => {
    setFormData({ ...formData, description: e.target.value });
  };
  const checkTitle = () => {
    return title.length > 0;
  }
  const checkDescription = () => {
    return description.length > 0;
  }
  const onSubmit = (e) => {
    e.preventDefault();
    if (checkTitle() && checkDescription()) {
      history.push('/form2');
    } else {
      setFormData({ ...formData, triedTitle: true, triedDescription: true });
    }
  }
    return (
        <div className="overlayHolder">
            <Card id="reportCard">
                <Typography variant="h4" style={{fontFamily: 'Patua One', marginBottom:15}}>
                    Report An Issue:
                </Typography>
                <form noValidate autoComplete="off" onSubmit={onSubmit}>
              <div id="form-inputs">
                <Box pb={1.87} width="100%">
                  <TextField
                    id="title"
                    required
                    label="Title"
                    variant="outlined"
                    onChange={onChangeTitle}
                    error={!checkTitle() && triedTitle}
                    onBlur={titleTried}
                    fullWidth={true}
                  />
                </Box>
                <Box pb={1.87} width="100%">
                  <TextField
                    id="Description"
                    required
                    label="Description"
                    variant="outlined"
                    onChange={onChangeDescription}
                    onBlur={descriptionTried}
                    error={!checkDescription() && triedDescription}
                    fullWidth={true}
                  />
                </Box>

                <ThemeProvider theme={myTheme}>
                  <Button variant="contained" color="primary" type="submit" id="upload">
                    Upload Image
                  </Button>
                </ThemeProvider>

                {"              "}

                <ThemeProvider theme={myTheme}>
                  <Button
                    variant="contained"
                    color="secondary"
                    type="submit"
                    id="next"
                  >
                    Next
                  </Button>
                </ThemeProvider>

              </div>
            </form>
            </Card>
        </div>
    );
}