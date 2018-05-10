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

    onToggleLoginForm() {
        document.body.classList.remove('noscroll');
        this.props.toggleLoginForm();
    }

    render() {
        return ReactDOM.createPortal(
            <div className="overlay">
                <div className="container is-centered is-vertical login-form">
                    <button 
                        onClick={this.onToggleLoginForm.bind(this)}
                        className="button-close"
                    >x</button>

                    <h3> Log In or Sign Up! </h3>

                    <input
                        type="text"
                        placeholder="jane_doe"
                        onChange={this.onUsernameChange.bind(this)}
                        value={this.props.username}
                        className="form-control"
                    />

                    <input
                        type="password"
                        placeholder="password"
                        onChange={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                        className="form-control"
                    />

                    {this.props.error && <p>{this.props.error}</p>}

                        <div>

                            <button
                                onClick={this.onLogin.bind(this)}
                                className="btn btn-success"
                            >Log In</button>

                            <button
                                onClick={this.onSignup.bind(this)}
                                className="btn btn-default"
                            >Sign Up</button>

                        </div>

                    </div>
            </div>,
            this.root);
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