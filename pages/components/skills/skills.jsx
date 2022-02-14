import React from 'react';
import TechStack from './techStack/techStack';
import styles from './skills.module.css'
import Title from '../title/title';
import image_front from '../../../public/front-end.jpg'
import image_back from '../../../public/back-end.jpg'
import image_deployment from '../../../public/deployment.jpg'

import Image from 'next/image';


const Skills = (props) => {
    
    return(
       <article className={styles.article} >
           <Title name='SKILLS'/>
            <div className={styles.container}>
                
                <div className={styles.skills_container}>
                    <div className={styles.title}>front-end
                    </div>
                    <div className={styles.skills}> 
                        <Image src={image_front} layout='intrinsic'/></div>
                </div>
                
                <div className={styles.skills_container}>
                    <div className={styles.title}>back-end
                    </div>
                    <div className={styles.skills}>
                        <Image src={image_back} layout='intrinsic'/></div>
                </div>
                
                <div className={styles.skills_container}>
                    <div className={styles.title}>deployment
                    </div>
                    <div>
                      <Image src={image_deployment} layout='intrinsic'/></div>
                </div>

            </div>
        </article>     
    )};

export default Skills;