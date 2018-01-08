import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {initStore, addCount} from "../src/redux/store";
import withRedux from "next-redux-wrapper";
import AddCount from "../src/components/AddCount";

class OtherPage extends Component {
  static getInitialProps ({store}) {
    store.dispatch(addCount());
  }


  render() {
    return (
      <AddCount/>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCount: bindActionCreators(addCount, dispatch)
  }
};

export default withRedux(initStore, null, mapDispatchToProps)(OtherPage);
