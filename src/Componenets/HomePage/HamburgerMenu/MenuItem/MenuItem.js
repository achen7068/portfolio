import React from 'react';
import styles from './MenuItem.module.css';


function MenuItem(props) {

    let [hoverState, setHoverState] = false;

    function handleHover(){
        this.setState({hover:!this.state.hover})
    }


    return (
        <div className={styles.container}>
            <div className={styles.menuItem}
            onMouseEnter={() => handleHover()}
            onMouseLeave={() => handleHover()}
            onClick={props.onclick}>
                {props.children}
            </div>
            <div className={styles.line}></div>
        </div>
    );
}

export default MenuItem;