import React from "react";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import Icon from "material-ui/Icon";
import IconButton from "material-ui/IconButton";

class Header extends React.Component {
  state = {
    dir: "ltr"
  };

  toggleDirection = () => {
    let newDir = this.state.dir === "ltr" ? "rtl" : "ltr";
    this.setState( { dir: newDir });
    document.querySelector("html").setAttribute("dir", newDir);
  };

  render () {
    return (
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography type="title" color="inherit">
            Title {this.state.dir}
          </Typography>

          <IconButton onClick={this.toggleDirection}>
            {this.state.dir === "ltr" && (<Icon>format_textdirection_r_to_l</Icon>)}
            {this.state.dir === "rtl" && (<Icon>format_textdirection_l_to_r</Icon>)}
          </IconButton>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;

