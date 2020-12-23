import React, {useState} from 'react';
import styles from 'HamburgerMenu.module.css'

export default function HamburgerMenu() {

   let [menuState, setmenuState] = useState(false);

    function handleMenuClick(){
        this.setState({menuState:!this.state.menuState});
    }

    function handleLinkClick(){
        this.setState({menuState: false});
    }

    const menu = ['Projects', 'About Me', 'Contact']
    const menuItems = menu.map((value,index)=> {
        return (
            <menuItems
                key={index}
                delay={`${index * 0.1}s`}
                onClick={()=>{handleLinkClick();}}>{value}>
                <menuItems/>
        )
    });

        return (
            <div>
                <div className={styles.container}>

                </div>
            </div>
        )
                }


