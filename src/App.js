// import { Button } from "@material-ui/core";
// import "./styles.css";
import { Grid , makeStyles} from "@material-ui/core";
import { } from "@material-ui/styles"
import Navbar from '../src/components/Navbar';
import Leftbar from "./components/Leftbar";
import Rightbar from "./components/Rightbar";
import Feed from "./components/Feed";
import Add from "./components/Add";
const useStyle=makeStyles(( theme ) => ({
start:{
  margin:"0",
  padding:"0",
},
item : {
  [theme.breakpoints.down('sm')]: {
    display:"none",
  },
},
  
}));
const App = () => {
const classes =useStyle();  
  return (<>
  <Navbar/>

  <Grid container className={classes.start}>
    <Grid item sm={2} xs={2}>
     <Leftbar/>
    </Grid>
    <Grid item sm={7} xs={10}> 
     <Feed/>
    </Grid>
    <Grid item sm={3} className={classes.item}>
     <Rightbar/>
    </Grid>
    <Add/>
    

  </Grid>
</>
  );
}
export default App;
