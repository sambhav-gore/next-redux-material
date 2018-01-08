import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {initStore, addCount} from "../src/redux/store";
import withRedux from "next-redux-wrapper";
import AddCount from "../src/components/AddCount";
import Link from "next/link";

class OtherPage extends Component {
  static getInitialProps ({store}) {
    store.dispatch(addCount());
  }

  render() {
    return (
      <div>
        <AddCount/>
        <Link href={`/other`}>Other Page</Link>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCount: bindActionCreators(addCount, dispatch)
  }
};

export default withRedux(initStore, null, mapDispatchToProps)(OtherPage);
