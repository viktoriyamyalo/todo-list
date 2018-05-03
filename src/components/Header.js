import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import logProps from '../hoc/logProps';
import { toggleLoginForm } from '../actions';
import TiKeyOutline from 'react-icons/lib/ti/key-outline';

class Header extends Component {
    render() {
        const src = "https://www.shareicon.net/data/128x128/2016/05/26/771186_people_512x512.png";
        return (
        <nav className="navbar navbar-expand-sm bg-primary navbar-darkt" style={styles.containerStyle}>
            <div style={styles.containerStyle}>
                <img
                    src={src}
                    alt="User Avatar"
                    style={styles.imageStyle}
                />
                { this.props.user && <p style={styles.userInfoStyle}>Logged in as: {this.props.user.username}</p>}
            </div>
            <Link to={`/subscription`} className="btn btn-primary">
                Go Premium
            </Link>
            { !this.props.user && 
                <div>
                    <TiKeyOutline style={{fontSize: 20}}/>
                    <button
                        onClick={this.props.toggleLoginForm}
                        className="btn btn-link"
                        style={styles.buttonStyle}
                    >Log In/Sign Up</button>

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


Header =  connect(mapStateToProps, { toggleLoginForm })(Header);
export default logProps(Header);