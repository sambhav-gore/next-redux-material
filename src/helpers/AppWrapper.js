/* eslint-disable no-underscore-dangle */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { MuiThemeProvider } from 'material-ui/styles';
import Reboot from 'material-ui/Reboot';
import JssProvider from 'react-jss/lib/JssProvider';
import getPageContext, {getTheme} from "../helpers/get-page-context";

class AppWrapper extends React.Component {
  componentWillMount() {
    this.pageContext = this.props.pageContext || getPageContext();
  }

  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }

    if (document.body) {
      document.body.dir = this.props.theme.direction;
    }
  }

  componentWillReceiveProps(nextProps) {

    // TO DO: build theme again only if required
    this.pageContext.theme = getTheme(nextProps.theme);

    if (
      nextProps.theme.direction !== this.props.theme.direction
    ) {

      if (document.body) {
        document.body.dir = nextProps.theme.direction;
      }
    }
  }

  render() {
    const { children } = this.props;
    return (
      <JssProvider
        jss={this.pageContext.jss}
        registry={this.pageContext.sheetsRegistry}
        generateClassName={this.pageContext.generateClassName}
      >
        <MuiThemeProvider
          theme={this.pageContext.theme}
          sheetsManager={this.pageContext.sheetsManager}
        >
          <Reboot />
          {children}
        </MuiThemeProvider>
      </JssProvider>
    );
  }
}

AppWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  pageContext: PropTypes.object,
  theme: PropTypes.object.isRequired,
};

export default connect(state => ({
  theme: state.theme,
}))(AppWrapper);