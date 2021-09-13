import React from 'react'
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core';


const useStyle = makeStyles((theme) =>({
    card: {
      marginBottom: theme.spacing(5),
    },

    media: {
        height: 250,
        [theme.breakpoints.down("sm")]: {
            height: 150,
        },

       
      
    },
}));

const Post =() => {
    const classes= useStyle();
    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia  
                className={classes.media} 
                image=" https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?cs=srgb&dl=pexels-christian-heitz-842711.jpg&fm=jpg"
                 title="Mypost"/>
                 <CardContent>
                     <Typography gutterBottom variant="h5">
                         MY first post
                     </Typography>
                     <Typography variant="body2">
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia eaque tenetur excepturi libero nisi pariatur explicabo voluptas adipisci quam. Dicta expedita voluptatum ipsa, doloribus ipsum quidem dolor voluptas nihil earum.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem impedit ratione distinctio dolorum sequi fugiat placeat non perspiciatis reiciendis quod ullam laudantium quis animi nulla, ea asperiores optio, rerum sed.
                     </Typography>
                 </CardContent>
            </CardActionArea>
            <CardActions>
                <Button  size="small" color="primary">
                    Share
                </Button>
                <Button size="small" color="primary">
                    Learn More
                </Button>
            </CardActions>

        </Card>
       
    )
}

export default Post;
