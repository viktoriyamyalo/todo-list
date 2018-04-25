import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Input } from './Input';
import { Button } from './Button';
import { 
    onUsernameChange, 
    onPasswordChange, 
    onLogin, 
    onSignup, 
    toggleLoginForm } from '../actions';
import { connect } from 'react-redux';

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
                    <Button 
                        onClick={this.props.toggleLoginForm}
                        buttonText="Close"
                        className="btn btn-link"
                        style={styles.closeButtonStyle}
                    />

                    <h3> Log In or Sign Up! </h3>

                    <Input
                        type="text"
                        placeholder="jane_doe"
                        onChange={this.onUsernameChange.bind(this)}
                        value={this.props.username}
                        style={styles.inputStyle}
                    />

                    <Input
                        type="password"
                        placeholder="password"
                        onChange={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                        style={styles.inputStyle}
                    />

                    {this.props.error && <p style={styles.errorStyle}>{this.props.error}</p>}

                        <div>

                            <Button 
                                onClick={this.onLogin.bind(this)}
                                buttonText="Log In"
                                className="btn btn-success"
                                style={styles.buttonStyle}
                            />

                            <Button 
                                onClick={this.onSignup.bind(this)}
                                buttonText="Sign Up"
                                className="btn btn-default"
                                style={styles.buttonStyle}
                            />

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
        maxWidth: 500              
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

export default connect(mapStateToProps, { onUsernameChange, onPasswordChange, onLogin, onSignup, toggleLoginForm })(LoginForm);