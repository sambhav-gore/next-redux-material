import React from "react";
import Button from "material-ui/Button";
import { withStyles } from 'material-ui/styles';
import withRoot from '../src/helpers/with-root';
import PropTypes from "prop-types";
import DefaultLayout from "../src/layouts/DefaultLayout";

const styles = theme => ({
  root: {
    fontFamily: theme.typography.fontFamily
  },
});

class Index extends React.Component {

  render() {
    const {classes} = this.props;
    return (
      <div className={classes.root}>
        <DefaultLayout>
          <h1>welcome to Next!</h1>
          <Button raised color="primary">I am a Primary Button </Button>
        </DefaultLayout>
      </div>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withRoot(withStyles(styles)(Index));