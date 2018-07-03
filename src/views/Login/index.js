import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import {
  initialState,
} from './ducks';


class Login extends Component {


  render() {
    return (
        <div>Login Page</div>
    );
  }

}
const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

