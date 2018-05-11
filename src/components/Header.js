import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import logProps from '../hoc/logProps';
import { toggleLoginForm } from '../actions';
import TiKeyOutline from 'react-icons/lib/ti/key-outline';

class Header extends Component {

    componentWillMount() {
        console.log(this.props);
    }

    onToggleLoginForm() {
        document.body.classList.add('noscroll');
        this.props.toggleLoginForm();
    }
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
                { this.props.user && <div>Logged in as: {this.props.user.username}</div>}
            </div>
            <div className="header-buttons">
                {this.path !== 'subscription' && this.path !== 'checkout' && <Link to={`/subscription`} className="header-button">
                    Go Premium
                </Link>}
                { !this.props.user &&
                    <div>

                        <button
                            onClick={this.onToggleLoginForm.bind(this)}
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