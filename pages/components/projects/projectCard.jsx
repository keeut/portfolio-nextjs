import Image from 'next/image';
import React from 'react';
import styles from './projectCard.module.css'

const ProjectCard = (props) => {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.title}> {props.title}</div>
                <div className={styles.when}>{props.when}</div>

                <div className={styles.container2}>
                    <div className={styles.img}>
                        <Image src={props.img} layout='intrinsic'/>
                    </div>
                      
                    <div className={styles.container3}>
                        <div className={styles.text_container}>
                            {props.text}
                        </div>
                        <div className={styles.table}>
                        
                            <div className={styles.column}>
                                Github
                            </div>
                            <div className={styles.row}>
                                <a className={styles.a} href={props.github}>{props.github}</a>
                            </div>
                            
                            <div className={styles.column}>
                                URL
                            </div>
                            <div className={styles.row}>
                                <a className={styles.a} href={props.domain}>{props.domain}</a>
                            </div>

                            <div className={styles.column}>
                                Front
                            </div>
                            <div className={styles.row}>
                                {props.skills.front}
                            </div>

                            <div className={styles.column}>
                                Back
                            </div>
                            <div className={styles.row}>
                                {props.skills.back}
                            </div>
                            
                            <div className={styles.column}>
                                Deployment
                            </div>
                            <div className={styles.row}>
                                {props.skills.deployment}
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default ProjectCard;