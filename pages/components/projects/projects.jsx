import React from 'react';
import styles from './projects.module.css'
import Title from '../title/title';
import planDiary from '../../../public/plan-diary.PNG'

import portfolio from '../../../public/portfolio.PNG'
import ProjectCard from './projectCard';
import PlanDiaryText from './planDiaryText';
import PortfolioText from './portfolioText';

const Projects = () => {

    const planDiarySkills = {front:'React',back:'node.js express.js',deployment:''}
    const portfolioSkills = {front:'React, Next.js', deployment:''}

    return (
        <article className={styles.article}>
            <Title name = 'PROJECTS'/>
            <ProjectCard img={planDiary}
                title='Plan-diary'
                when = '2022.12 ~ 2022.01 (개인 프로젝트)'
                text= {<PlanDiaryText/>}
                skills= {planDiarySkills}
                domain = ''
                github = 'https://github.com/keeut/plan-diary'
                />
            <ProjectCard img = {portfolio}
                title='Portfolio'
                when = '2022.01 ~ 2022.02 (개인 프로젝트)'
                text={<PortfolioText/>}
                skills= {portfolioSkills}
                domain = ''
                github = 'https://github.com/keeut/portfolio'
                />

            
        </article>
    );
};

export default Projects;