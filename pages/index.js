import React from "react";
import Button from "material-ui/Button";
import { withStyles } from 'material-ui/styles';
import withRoot from '../src/helpers/with-root';
import PropTypes from "prop-types";
import DefaultLayout from "../src/layouts/DefaultLayout";
import {addCount, initStore} from "../src/redux/store";
import {bindActionCreators} from "redux";
import withRedux from "next-redux-wrapper";
import AddCount from "../src/components/AddCount";

const styles = theme => ({
  root: {
    fontFamily: theme.typography.fontFamily
  },
});

class Index extends React.Component {

  static getInitialProps ({store, isServer}) {
    store.dispatch(addCount());
  }

  changeDirection() {
    // store.dispatch(changeDirection());
  }

  render() {
    const {classes} = this.props;
    console.log(this.props);
    return (
      <div className={classes.root}>
        <DefaultLayout>
          <h1>welcome to Next!</h1>
          <AddCount/>
          <Button raised color="primary">I am a Primary Button </Button>
          <Button raised color="accent" onClick={this.changeDirection}> Change Direction </Button>
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


export default withRedux(initStore, null, mapDispatchToProps)((withRoot(withStyles(styles)(Index))));
// export default withRedux(initStore, null, mapDispatchToProps)(Index);