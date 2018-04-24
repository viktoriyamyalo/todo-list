import React, { Component } from 'react';
import { Image } from './Image';
import Avatar from '/home/user/todo-list/src/user_avatar.png';
import { connect } from 'react-redux';

class Header extends Component {
    render() {
        return (
        <nav className="navbar navbar-expand-sm bg-primary navbar-darkt" style={styles.containerStyle}>
            <Image
                src={Avatar}
                alt="User Avatar"
                style={styles.imageStyle}
            />
            { this.props.user && <p style={styles.userInfoStyle}>{this.props.user.email}</p>}
        </nav>
        );
    }
}

const styles = {
    imageStyle: {
        height: 30,
        width: 30,
    },
    userInfoStyle: {
        fontSize: 18
    },
    containerStyle: {
        display: 'flex',
        justifyContent: 'flex-start'
    }
};

const mapStateToProps = (state) => {
    return {
        user: state.loginForm.user
    }
};

export default connect(mapStateToProps)(Header);