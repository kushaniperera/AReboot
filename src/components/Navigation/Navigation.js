import React    from "react";
import template from "./Navigation.jsx";
import { PropTypes } from "prop-types";
import { withRouter } from "react-router-dom";

class Navigation extends React.Component {
  
  static propTypes = {
    location: PropTypes.object.isRequired
  }

  handleClick = e => {
    console.log('click ', e);
    this.setState({ current: e.key });
  };

  render() {
    return template.call(this);
  }
}

export default withRouter(Navigation);
