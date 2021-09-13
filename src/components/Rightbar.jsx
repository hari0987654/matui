import React from 'react'
import { } from "@material-ui/styles"
import { Avatar, Container, ImageList, ImageListItem, makeStyles, Typography,  } from '@material-ui/core';
import AvatarGroup from '@material-ui/lab/AvatarGroup';


const useStyle = makeStyles((theme) =>({

    container: {
       
       paddingTop  : theme.spacing(10),
       position: "sticky",
       top: 0,
    },
    title:{
        fontSize:25,
        fontWeight:600,
        color:"#555",

    }
}));

function Rightbar() {
    const classes= useStyle();
    return (
        <Container className={classes.container}>
        <Typography className={classes.title}  gutterBottom>Online Friends</Typography>
        <AvatarGroup max={4} styles={{marginBottom:20}}>
  <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
  <Avatar alt="Travis Howard" src="https://material-ui.com/static/images/avatar/2.jpg" />
  <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/3.jpg" />
  <Avatar alt="Agnes Walker" src="https://material-ui.com/static/images/avatar/4.jpg" />
  <Avatar alt="Trevor Henderson" src="https://material-ui.com/static/images/avatar/5.jpg" />
</AvatarGroup>

            <Typography className={classes.title}  gutterBottom styles={{marginTop:30}}>Gallery</Typography>
            <ImageList rowHeight={100} className={classes.imageList} cols={3}>
  
    <ImageListItem >
      <img src="https://material-ui.com/static/images/image-list/breakfast.jpg" alt="" />
    </ImageListItem>
    <ImageListItem >
      <img src="https://material-ui.com/static/images/image-list/burgers.jpg" alt="" />
    </ImageListItem>
    <ImageListItem >
      <img src="https://material-ui.com/static/images/image-list/camera.jpg" alt="" />
    </ImageListItem>
    <ImageListItem >
      <img src="https://material-ui.com/static/images/image-list/morning.jpg" alt="" />
    </ImageListItem>
    <ImageListItem >
      <img src="https://material-ui.com/static/images/image-list/vegetables.jpg" alt="" />
    </ImageListItem>
    <ImageListItem >
      <img src="https://material-ui.com/static/images/image-list/honey.jpg" alt="" />
    </ImageListItem>
</ImageList>
           
        </Container>
       
    )
}

export default Rightbar
