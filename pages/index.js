import React from "react";
import Button from "material-ui/Button";
import { withStyles } from 'material-ui/styles';
import withRoot from '../src/helpers/with-root';
import PropTypes from "prop-types";
import DefaultLayout from "../src/layouts/DefaultLayout";
import {addCount} from "../src/redux/countReducer";
import {bindActionCreators} from "redux";
import AddCount from "../src/components/AddCount";
import Link from "next/link";

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
          <AddCount/>
          <Button raised color="primary">I am a Primary Button </Button>
          <Button raised color="accent"> Change Direction </Button>
          <Link href={`/other`}>
            <a>Other Page</a>
          </Link>
        </DefaultLayout>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCount: bindActionCreators(addCount, dispatch)
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Index));