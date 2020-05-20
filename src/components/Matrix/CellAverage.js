import React from 'react';

import styles from "./styles.module.css";

const CellAverage = ({cell}) => {
    return (
        <p className={styles.cellAverage}>{cell}</p>
    );
};

export default CellAverage;

