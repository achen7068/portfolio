import React from 'react';
import styles from './Home.module.css';

function Home() {
    return (
        <div className={styles.background}>
            <div className={styles.header}>
                Alex Chen
            </div>
        <div className={styles.title}>
            React Front-End Developer
        </div>
        </div>
    )
}
export default Home;
