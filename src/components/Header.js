import React from 'react';
import { Image } from './Image';

export const Header = (props) => {
    return (
        <nav className="navbar navbar-expand-sm bg-primary navbar-darkt">
            <Image
                src="../user_avatar.png"
                className="rounded" />
      </nav>
        );
}