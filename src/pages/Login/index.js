import React, { Component } from 'react';
import { connect } from 'react-redux';

class Login extends Component {
  render() {
    return <div>Login Page</div>;
  }
}
const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
