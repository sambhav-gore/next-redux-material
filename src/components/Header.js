import React from "react";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import Icon from "material-ui/Icon";
import IconButton from "material-ui/IconButton";
import PropTypes from "prop-types";

const Header = (props) => {
  console.log(props);
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography type="title" color="inherit">
          Title
        </Typography>

        <IconButton>
          <Icon>format_textdirection_l_to_r</Icon>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Header;

