import React from 'react';
import styles from './Home.module.css';
import BurgerSideBar from "./HamburgerMenu/burgerSideBar";
import './HamburgerMenu/burgerSideBar.css';

function Home() {
    return (
        <div id="outer-container">
            <BurgerSideBar pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }/>
            <main id={'page-wrap'}>
                <div className={styles.background}>
                    <div className={styles.header}>
                        Alex Chen
                    </div>
                    <div className={styles.title}>
                        React Front-End Developer
                    </div>
                </div>
            </main>
        </div>

    )
}
export default Home;
