import React, { Component } from 'react';
import { Image } from './Image';
import Avatar from '/home/user/todo-list/src/user_avatar.png';
import { connect } from 'react-redux';
import { Button } from './Button';
import { toggleLoginForm } from '../actions';
import TiKeyOutline from 'react-icons/lib/ti/key-outline';

class Header extends Component {
    render() {
        return (
        <nav className="navbar navbar-expand-sm bg-primary navbar-darkt" style={styles.containerStyle}>
            <div style={styles.containerStyle}>
                <Image
                    src={Avatar}
                    alt="User Avatar"
                    style={styles.imageStyle}
                />
                { this.props.user && <p style={styles.userInfoStyle}>Logged in as: {this.props.user.username}</p>}
            </div>
            { !this.props.user && 
                <div>
                    <TiKeyOutline style={{fontSize: 20}}/>
                    <Button
                        onClick={this.props.toggleLoginForm}
                        buttonText="Log In/Sign Up"
                        className="btn btn-link"
                        style={styles.buttonStyle}
                    />
                </div>
            }
          
            
        </nav>
        );
    }
}

const styles = {
    imageStyle: {
        height: 30,
        width: 30
    },
    userInfoStyle: {
        fontSize: 18,
        marginLeft: 10,
        marginTop: 10,
        color: 'white'
    },
    containerStyle: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    buttonStyle: {
        color: 'white',
        fontSize: 18
    }
};

const mapStateToProps = (state) => {
    return {
        user: state.loginForm.user
    }
};

export default connect(mapStateToProps, { toggleLoginForm })(Header);