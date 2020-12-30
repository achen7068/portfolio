import React from 'react';
import {scaleRotate as Menu} from 'react-burger-menu'


function BurgerSideBar(props) {

    return (
        <div>
            <Menu right {...props}>
                    <a className={'menu-item'} href={'/'}>Projects</a>
                    <a className={'menu-item'} href={'/'}>About Me</a>
                    <a className={'menu-item'} href={'/'}>Contact Me</a>
            </Menu>
        </div>
    );
}

export default BurgerSideBar;