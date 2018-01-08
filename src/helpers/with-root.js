import React from 'react';
import PropTypes from 'prop-types';
import AppWrapper from "./AppWrapper";
import getPageContext from './get-page-context';
import initRedux from "../redux/initRedux"
import {Provider} from "react-redux";

function withRoot(Component) {
  class WithRoot extends React.Component {
    constructor(props, context) {
      super(props, context);
      this.redux = initRedux(this.props.reduxServerState || {});
    }

    componentWillMount() {
      this.pageContext = this.props.pageContext || getPageContext();
    }

    pageContext = null;
    redux = null;

    render() {
      const { pageContext, ...other } = this.props;

      return (
        <Provider store={this.redux}>
          <AppWrapper pageContext={pageContext}>
            <Component initialProps={other} />
          </AppWrapper>
        </Provider>
      );
    }
  }

  WithRoot.propTypes = {
    pageContext: PropTypes.object,
    reduxServerState: PropTypes.object,
  };

  WithRoot.getInitialProps = ctx => {
    let initialProps = {};
    const redux = initRedux({});

    if (Component.getInitialProps) {
      const componentInitialProps = Component.getInitialProps({...ctx, redux});
      initialProps = {
        ...componentInitialProps,
        ...initialProps,
      };
    }

    if (process.browser) {
      return initialProps;
    }

    return {
      ...initialProps,
      // No need to include other initial Redux state because when it
      // initialises on the client-side it'll create it again anyway
      reduxServerState: redux.getState(),
    };
  };

  return WithRoot;
}

export default withRoot;