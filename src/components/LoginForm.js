import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { 
    onUsernameChange, 
    onPasswordChange, 
    onLogin, 
    onSignup, 
    toggleLoginForm } from '../actions';


class LoginForm extends Component {

    componentWillMount() {
        this.root = document.createElement('div');
        document.body.appendChild(this.root);
    }

    componentWillUnmount() {
        document.body.removeChild(this.root);
    }

    onUsernameChange(event) {
        const username = event.target.value;
        this.props.onUsernameChange(username);
    }

    onPasswordChange(event) {
        const password = event.target.value;
        this.props.onPasswordChange(password);
    }

    onLogin() {
        const { username, password } = this.props;
        this.props.onLogin(username, password);
    }

    onSignup() {
        const { username, password } = this.props;
        this.props.onSignup(username, password);
    }

    render() {
        return ReactDOM.createPortal(
            <div style={styles.containerStyle}>
                <div style={styles.formStyle}>
                    <button 
                        onClick={this.props.toggleLoginForm}
                        className="btn btn-link"
                        style={styles.closeButtonStyle}
                    >Close</button>

                    <h3> Log In or Sign Up! </h3>

                    <input
                        type="text"
                        placeholder="jane_doe"
                        onChange={this.onUsernameChange.bind(this)}
                        value={this.props.username}
                        style={styles.inputStyle}
                        className="form-control"
                    />

                    <input
                        type="password"
                        placeholder="password"
                        onChange={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                        style={styles.inputStyle}
                        className="form-control"
                    />

                    {this.props.error && <p style={styles.errorStyle}>{this.props.error}</p>}

                        <div>

                            <button
                                onClick={this.onLogin.bind(this)}
                                className="btn btn-success"
                                style={styles.buttonStyle}
                            >Log In</button>

                            <button
                                onClick={this.onSignup.bind(this)}
                                className="btn btn-default"
                                style={styles.buttonStyle}
                            >Sign Up</button>

                        </div>

                    </div>
            </div>,
            this.root);
    }
}

const styles = {
    containerStyle: {
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        zIndex: 2
    },
    closeButtonStyle: {
        position: 'absolute',
        top: 5,
        right: 5
    },
    inputStyle: {
        marginTop: 20,
        width: 250           
    },
    buttonStyle: {
        marginTop: 20,
        marginLeft: 5
    },
    formStyle: {
        width: 400,
        height: 400,
        backgroundColor: 'white',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    errorStyle: {
        fontSize: 18,
        color: 'red'
    }
}

const mapStateToProps = (state) => {
    return {
        username: state.loginForm.username,
        password: state.loginForm.password,
        error: state.loginForm.error

    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        onUsernameChange,
        onPasswordChange, 
        onLogin, 
        onSignup, 
        toggleLoginForm
    }, dispatch);
  }

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);