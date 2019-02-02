import React from 'react';
import styles from './Spinner.module.css';

const spinner = () => (
    <div className={styles['lds-ring']+ ' align-self-center'}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default spinner;