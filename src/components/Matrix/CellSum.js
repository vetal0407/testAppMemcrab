import React from 'react';

import styles from "./styles.module.css";

const CellSum = ({
    cell,
    calculateMatrixPercent,
    restMatrixPercent
}) => {
    return (
        <p
            className={styles.cellSum}
            onMouseEnter={() => calculateMatrixPercent()}
            onMouseLeave={() => restMatrixPercent()}
        >{cell}</p>
    );
};

export default CellSum;

