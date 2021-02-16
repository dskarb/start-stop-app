import React from "react";
import routes from "./routes";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeView from "./views/HomeView/HomeView";

class App extends React.Component {
  render() {
    const theme = createMuiTheme({
      palette: {
        type: "dark",
      },
    });

    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Switch>
            <Route exact path={routes.home} component={HomeView}></Route>
          </Switch>
        </Router>
      </ThemeProvider>
    );
  }
}

export default App;
