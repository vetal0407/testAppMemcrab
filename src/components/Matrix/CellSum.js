import React from 'react';

import styles from "./styles.module.css";

const CellSum = ({
    cell,
    calculateMatrixPercent,
    resetMatrixPercent
}) => {
    return (
        <p
            className={styles.cellSum}
            onMouseEnter={calculateMatrixPercent}
            onMouseLeave={resetMatrixPercent}
        >{cell}</p>
    );
};

export default CellSum;

