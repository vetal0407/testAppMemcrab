import React from 'react';

import Row from "./Row";
import RowAverage from "./RowAverage";

import styles from "./styles.module.css";

const Matrix = ({
    n,
    m,
    matrix,
    sumRows,
    averageColumns,
    similarValues,
    matrixPercent,

    incrementValue,
    findSimilarValues,
    resetSimilarValues,
    calculateMatrixPercent,
    resetMatrixPercent,
    deleteRow
}) => {
    const renderRow = (row, index) => (
        <Row
            key={index + Math.random()}
            m={m}
            row={row}
            iRow={index}
            sumRow={sumRows[index]}
            similarValues={similarValues}
            matrixPercent={matrixPercent}

            incrementValue={j => incrementValue(index, j)}
            findSimilarValues={j => findSimilarValues(index, j)}
            resetSimilarValues={resetSimilarValues}
            calculateMatrixPercent={(iRow, rowSum) => calculateMatrixPercent(matrix, iRow, rowSum)}
            resetMatrixPercent={resetMatrixPercent}
            deleteRow={() => deleteRow(index)}
        />
    );

    return (
        <div className={styles.wrapper}>
            <div className={styles.matrix}>
                {
                    matrix.map((row, index) => {
                        if(index < n - 1) return renderRow(row, index);
                        else return (
                            <div key={index + Math.random()}>
                                {renderRow(row, index)}
                                <RowAverage row={averageColumns}/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Matrix;
