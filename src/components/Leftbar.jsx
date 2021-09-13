import React from 'react'
import { } from '@material-ui/styles';
import { Container, makeStyles, Typography } from '@material-ui/core';
import { Home, List, Person, PhotoCamera, TabletMac } from '@material-ui/icons';
 

const useStyle = makeStyles((theme) =>({

    container: {
        height: "100vh",
        color:"white",
        
        marginTop:"30px",
        alignItems:"center",
        position:"sticky",
        top: 0,
       paddingTop : theme.spacing(5),
       backgroundColor: theme.palette.primary.main,
       [theme.breakpoints.up('sm')]: {
        backgroundColor:"white",
        color:"#555",
        border: "1px solid ",
        borderColor:"#ece7e7",

    },
    },

    icon : {
        marginRight: theme.spacing(1),
        [theme.breakpoints.up('sm')]: {
            fontSize:"18px",
        }
    },
    item:{
        display:"flux",
        alignItems:"center",
        marginBottom: theme.spacing(4),
        [theme.breakpoints.up('sm')]: {
            marginBottom: theme.spacing(3),
            cursor:"pointer"

        }
    },
    text:{
        fontWeight:"500",
        [theme.breakpoints.down('sm')]: {
            display:"none"
           
        }

    }
}));
function Leftbar() {
    const classes= useStyle();

    return (
       <Container  className= { classes.container }>
           <div className={classes.item}>
               <Home className={classes.icon}/>

           <Typography className={classes.text}>
               Homepage

           </Typography>

           </div>
           <div className={classes.item}>
               <Person className={classes.icon}/>

           <Typography className={classes.text}>
               Homepage

           </Typography>

           </div>
           <div className={classes.item}>
               <List className={classes.icon}/>

           <Typography className={classes.text}>
               Homepage

           </Typography>

           </div>
           <div className={classes.item}>
               <PhotoCamera className={classes.icon}/>

           <Typography className={classes.text}>
               Homepage

           </Typography>

           </div>
           <div className={classes.item}>
               <TabletMac className={classes.icon}/>

           <Typography className={classes.text}>
               Homepage

           </Typography>

           </div>
       </Container>
            
        
    )
}

export default Leftbar
