import React from "react";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";

class Header extends React.Component {
  componentDidMount () {
    console.log("COMPONENT MOUNTED -- do stuff");
  }

  render () {
    return (<AppBar position="static" color="primary">
        <Toolbar>
          <Typography type="title" color="inherit">
            Title
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;

