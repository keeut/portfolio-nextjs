import React from 'react';
import styles from './intro.module.css'


const Intro = (props) => {
    
    return(
    <div className={styles.container}>
        <div className={styles.title}>
            <div>김태남</div>
            <div>웹 개발자</div>
        </div>
        <div className={styles.explanation}>
                저는 REACT를 주로 사용하는, 성장을 갈구하는 신입 개발자입니다.
        </div>
        <div className={styles.container_circle}>
            <div className={styles.box_1}>who are you</div>
            <div className={styles.box_2}>skills</div>
            <div className={styles.box_3}>projects</div>
            <div className={styles.box_4}>more</div>
            <div className={styles.circle}>
        </div>
        </div>
    </div>
        )};

export default Intro;