import {
    CHANGE_MATRIX,
    INCREMENT_VALUE,
    FIND_SIMILAR_VALUES,
    RESET_SIMILAR_VALUES,
    CALCULATE_MATRIX_PERCENT,
    RESET_MATRIX_PERCENT,
    DELETE_ROW
} from "../types/matrix";

import * as utils from "../utils";

export const changeMatrix = (matrix, n, m) => {
    const newMatrix = utils.generateAmounts(matrix, n, m);
    const sumRows = utils.calculateSumRows(newMatrix);
    const averageColumns = utils.calculateAverageColumns(newMatrix, n, m);
    const matrixPercent = newMatrix.map(row => (row.map(() => null)));

    return{
        type: CHANGE_MATRIX,
        n,
        m,
        matrix: newMatrix,
        sumRows,
        averageColumns,
        matrixPercent
    }
};

export const incrementValue = (matrix, n, m, i, j) => {
    const newMatrix = matrix.map((row, indexRow) => {
        return row.map((value, indexColumn) => {
            if(i === indexRow && j === indexColumn) return value + 1;
            else return value;
        })
    });
    const sumRows = utils.calculateSumRows(newMatrix);
    const averageColumns = utils.calculateAverageColumns(newMatrix, n, m);

    return{
        type: INCREMENT_VALUE,
        matrix: newMatrix,
        sumRows,
        averageColumns,
        similarValues: utils.findSimilarValues(newMatrix, n, m, i, j),
    }
};

export const findSimilarValues = (matrix, n, m, i, j) => ({
    type: FIND_SIMILAR_VALUES,
    similarValues: utils.findSimilarValues(matrix, n, m, i, j),
});

export const restSimilarValues = () => ({
    type: RESET_SIMILAR_VALUES
});

export const calculateMatrixPercent = (matrix, iRow, rowSum) => ({
    type: CALCULATE_MATRIX_PERCENT,
    matrixPercent: utils.calculateMatrixPercent(matrix, iRow, rowSum)
});

export const restMatrixPercent = () => ({
    type: RESET_MATRIX_PERCENT
});

export const deleteRow = (matrix, n, m, i) => {
    matrix.splice(i, 1);
    const sumRows = utils.calculateSumRows(matrix);
    const averageColumns = utils.calculateAverageColumns(matrix, n - 1, m);
    const matrixPercent = matrix.map(row => (row.map(() => null)));

    return{
        type: DELETE_ROW,
        n: n - 1,
        m,
        matrix,
        sumRows,
        averageColumns,
        matrixPercent
    }
};
