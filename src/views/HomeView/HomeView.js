import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  appBar: {
      
  }
}));

export default function HomeView() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Start Stop
          </Typography>
        </Toolbar>
      </AppBar>
      <Typography variant="h2">Home View</Typography>
    </div>
  );
}
