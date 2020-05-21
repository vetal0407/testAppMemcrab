import {
    CHANGE_MATRIX,
    CHANGE_X,
    INCREMENT_VALUE,
    FIND_SIMILAR_VALUES,
    RESET_SIMILAR_VALUES,
    CALCULATE_MATRIX_PERCENT,
    RESET_MATRIX_PERCENT,
    DELETE_ROW
} from "../types/matrix";

const initialState = {
    n: 10,
    m: 10,
    x: 4,
    rowOptions: [1, 2, 3, 4, 5, 6],
    columnOptions: [1, 2, 3, 4, 5, 6],
    sumRows: [],
    averageColumns: [],
    similarValues: [],
    matrix: [[]],
    matrixPercent: [[]]
};

const matrixReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_MATRIX:
            return {
                ...state,
                n: action.n,
                m: action.m,
                matrix: action.matrix,
                sumRows: action.sumRows,
                averageColumns: action.averageColumns,
                matrixPercent: action.matrixPercent
            };
        case CHANGE_X:
            return {
                ...state,
                x: action.x,
            };
        case INCREMENT_VALUE:
            return {
                ...state,
                matrix: action.matrix,
                sumRows: action.sumRows,
                averageColumns: action.averageColumns,
                similarValues: action.similarValues
            };
        case FIND_SIMILAR_VALUES:
            return {
                ...state,
                similarValues: action.similarValues
            };
        case RESET_SIMILAR_VALUES:
            return {
                ...state,
                similarValues: []
            };
        case CALCULATE_MATRIX_PERCENT:
            return {
                ...state,
                matrixPercent: action.matrixPercent
            };
        case RESET_MATRIX_PERCENT:
            return {
                ...state,
                matrixPercent: state.matrix.map(row => (row.map(() => null)))
            };
        case DELETE_ROW:
            return {
                ...state,
                n: action.n,
                m: action.m,
                matrix: action.matrix,
                sumRows: action.sumRows,
                averageColumns: action.averageColumns,
                matrixPercent: action.matrixPercent
            };
        default: {
            return state;
        }
    }
};

export default matrixReducer;
