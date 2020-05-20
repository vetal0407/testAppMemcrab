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
     restSimilarValues,
     calculateMatrixPercent,
     restMatrixPercent,
     deleteRow
}) => {
    const renderCell = (cell, index) => (
        <Cell
            cell={cell}
            iRow={iRow}
            iColumn={index}
            similarValues={similarValues}
            matrixPercent={matrixPercent}

            incrementValue={() => incrementValue(index)}
            findSimilarValues={() => findSimilarValues(index)}
            restSimilarValues={restSimilarValues}
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
                                restMatrixPercent={restMatrixPercent}
                            />
                        </div>
                    );
                })
            }
        </div>
    );
};

export default Row;
