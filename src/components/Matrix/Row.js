import React from 'react';

import Cell from "./Cell";
import CellSum from "./CellSum";
import CellDelete from "./CellDelete";

import styles from "./styles.module.css";

const Row = ({
     row,
     m,
     iRow,
     sumRow,
     similarValues,
     matrixPercent,

     incrementValue,
     findSimilarValues,
     resetSimilarValues,
     calculateMatrixPercent,
     resetMatrixPercent,
     deleteRow
}) => {
    const renderCell = (cell, index) => (
        <Cell
            key={index + Math.random()}
            cell={cell}
            iRow={iRow}
            iColumn={index}
            similarValues={similarValues}
            matrixPercent={matrixPercent}

            incrementValue={() => incrementValue(index)}
            findSimilarValues={() => findSimilarValues(index)}
            resetSimilarValues={resetSimilarValues}
        />
    );

    return (
        <div className={styles.row}>
            {
                row.map((cell, index) => {
                    if(index === 0) return (
                        <div className={styles.row}  key={index + Math.random()}>
                            <CellDelete deleteRow={deleteRow}/>
                            {renderCell(cell, index)}
                        </div>
                    );
                    else if(index < m - 1) return renderCell(cell, index);
                    else return (
                        <div className={styles.row}  key={index + Math.random()}>
                            {renderCell(cell, index)}
                            <CellSum
                                cell={sumRow}
                                calculateMatrixPercent={() => calculateMatrixPercent(iRow, sumRow)}
                                resetMatrixPercent={resetMatrixPercent}
                            />
                        </div>
                    );
                })
            }
        </div>
    );
};

export default Row;
