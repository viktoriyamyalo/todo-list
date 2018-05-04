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
        <header className="container header">
            <div>
                <img
                    src={src}
                    alt="User Avatar"
                    className="user-avatar"
                />
                { this.props.user && <p>Logged in as: {this.props.user.username}</p>}
            </div>
            <div className="header-buttons">
                <Link to={`/subscription`} className="header-button">
                    Go Premium
                </Link>
                { !this.props.user &&
                    <div>

                        <button
                            onClick={this.props.toggleLoginForm}
                            className="header-button"
                        >
                            <TiKeyOutline className="icon"/>
                            Log In/Sign Up
                        </button>
                    </div>
                }
            </div>
            
        </header>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        user: state.loginForm.user
    }
};


Header =  connect(mapStateToProps, { toggleLoginForm })(Header);
export default logProps(Header);