import React, { memo } from 'react';
import styles from './title.module.css'

const Title = memo( (props) => (
    <div className={styles.title}>{props.name}</div>
    ));

export default Title;