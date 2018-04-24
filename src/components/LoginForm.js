import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Input } from './Input';
import { Button } from './Button';
import { onEmailChange, onPasswordChange, onLogin, onSignup } from '../actions';
import { connect } from 'react-redux';

class LoginForm extends Component {

    componentWillMount() {
        this.root = document.createElement('div');
        document.body.appendChild(this.root);
    }

    componentWillUnmount() {
        document.body.removeChild(this.root);
    }

    onEmailChange(event) {
        const email = event.target.value;
        this.props.onEmailChange(email);
    }

    onPasswordChange(event) {
        const password = event.target.value;
        this.props.onPasswordChange(password);
    }

    onLogin() {
        const { email, password } = this.props;
        this.props.onLogin(email, password);
    }

    onSignup() {
        const { email, password } = this.props;
        this.props.onSignup(email, password);
    }

    render() {
        return ReactDOM.createPortal(
            <div style={styles.containerStyle}>
                <Button 
                    onClick={this.props.onClose}
                    buttonText="Close"
                    className="btn btn-link"
                    style={styles.closeButtonStyle}
                />

                <Input
                    type="email"
                    placeholder="janedoe@gmail.com"
                    onChange={this.onEmailChange.bind(this)}
                    value={this.props.email}
                    style={styles.inputStyle}
                />

                <Input
                    type="password"
                    placeholder="password"
                    onChange={this.onPasswordChange.bind(this)}
                    value={this.props.password}
                    style={styles.inputStyle}
                />

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

            </div>,
            this.root);
    }
}

const styles = {
    containerStyle: {
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        top: 10,
        bottom: 10,
        right: 10,
        left: 10,
        zIndex: 2
    },
    closeButtonStyle: {
        color: 'white',
        position: 'absolute',
        right: 5,
        top: 5
    },
    inputStyle: {
        marginTop: 20,
        marginLeft: 10,
        maxWidth: 500              
    },
    buttonStyle: {
        marginTop: 20,
        marginLeft: 5
    }
}

const mapStateToProps = (state) => {
    return {
        email: state.loginForm.email,
        password: state.loginForm.password

    }
}

export default connect(mapStateToProps, { onEmailChange, onPasswordChange, onLogin, onSignup })(LoginForm);