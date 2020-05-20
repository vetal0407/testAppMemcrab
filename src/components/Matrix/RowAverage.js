import React from 'react';

import CellAverage from "./CellAverage";

import styles from "./styles.module.css";

const RowAverage = ({row}) => {
    return (
        <div className={styles.rowAverage}>
            {
                row.map((cell, index) => <CellAverage key={index + Math.random()} cell={cell}/>)
            }
        </div>
    );
};

export default RowAverage;
