export const generateAmounts = (matrix, n, m) => {
    let newMatrix = [];
    for (let i = 0; i < n; i++){
        newMatrix[i] = [];
        for (let j = 0; j < m; j++){
            if(matrix[i] && matrix[i][j]) newMatrix[i][j] = matrix[i][j];
            else newMatrix[i][j] = Math.floor(Math.random() * 900 + 100);
        }
    }

    return newMatrix;
};

export const calculateSumRows = (matrix) => {
    return matrix.map(row => {
        return row.reduce((previous, current) => previous + current);
    });
};

export const calculateAverageColumns = (matrix, n, m) => {
    let average = [];
    for (let i = 0; i < m; i++){
        let temp = 0;
        for (let j = 0; j < n; j++){
            temp += matrix[j][i];
        }
        average[i] = Math.round(temp / n);
    }
    return average;
};

export const findSimilarValues = (matrix, n, m, iRow, jColumn) => {
    let differenceMatrix = [];
    for (let i = 0; i < n; i++){
        differenceMatrix[i] = [];
        for (let j = 0; j < m; j++){
            if(i === iRow && j === jColumn) differenceMatrix[i][j] = Infinity;
            else differenceMatrix[i][j] = Math.abs(matrix[iRow][jColumn] - matrix[i][j]);
        }
    }


    let similarValues = [];
    let minValue = differenceMatrix[0][0];
    for (let i = 0; i < n; i++){
        for (let j = 0; j < m; j++){
            if(differenceMatrix[i][j] < minValue){
                minValue = differenceMatrix[i][j];
                similarValues = [];
                similarValues.push({i,j});
            }else if(differenceMatrix[i][j] === minValue) similarValues.push({i,j});
        }
    }

    return similarValues;
};

export const calculateMatrixPercent = (matrix, iRow, rowSum) => {
    let matrixPercent = [];
    matrix.forEach((row, i) => {
        matrixPercent[i] = [];
        if(i === iRow) {
            row.forEach((value, j) => {
                matrixPercent[i][j] = Math.round((value / rowSum) * 100);
            });
        }else {
            row.forEach((value, j) => {
                matrixPercent[i][j] = null;
            });
        }
    });

    return matrixPercent;
};
