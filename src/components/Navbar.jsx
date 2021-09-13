import {  AppBar, InputBase, Toolbar, Typography,Badge, Avatar, makeStyles, alpha} from "@material-ui/core";
import { } from "@material-ui/styles";
import { Search, Mail, Notifications } from "@material-ui/icons";
const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flux",
    justifyContent: "space-between"
  },
  search: {
    display: "flux",
    alignItem: "center",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    width: "50%",
    color:"white",
    marginTop: "5px"
   
  },


  index : {
    color:"white",
    marginLeft:"2px",
  },

 
  logoLg: {
    display: "none",
    [theme.breakpoints.down('sm')]: {
      display: "block"
    },
  },
  logoSm: {
    display: "block",
    [theme.breakpoints.down('sm')]: {
      display: "none"
    },
  },
  icons: {
    display : "flex",
    alignItem: "center",
  },
  badge: {
    marginRight:"10px"

  }
}));

const Navbar = () => {
  const classes = useStyles();
  


  return (
    <>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" className={classes.logoLg}>
            Demo
          </Typography>
          <Typography variant="h6" className={classes.logoSm}>
            Fizz
          </Typography>
          <div className={classes.search}>
            <Search />
            <InputBase placeholder="search..."  className={classes.index}/>
          </div>
         <div className={classes.icons}>
         <Badge badgeContent={2} color="secondary" className={classes.badge}>
  <Mail />
</Badge>
<Badge badgeContent={2} color="primary" className={classes.badge}>
  <Notifications />
</Badge>
<Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
         </div>
        </Toolbar>
      </AppBar>
    </>
  );
};
export default Navbar;
