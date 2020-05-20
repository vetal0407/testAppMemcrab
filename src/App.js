import React, {useEffect} from 'react';
import {connect} from "react-redux";

import {
    changeMatrix,
    incrementValue,
    findSimilarValues,
    restSimilarValues,
    calculateMatrixPercent,
    restMatrixPercent,
    deleteRow
} from "./redux/actions/matrix";

import SelectDimensions from "./components/SelectDimensions/SelectDimensions";
import Matrix from "./components/Matrix/Matrix";

import styles from "./App.module.css";

function App({
     n,
     m,
     matrix,
     rowOptions,
     columnOptions,
     sumRows,
     averageColumns,
     similarValues,
     matrixPercent,

     changeMatrix,
     incrementValue,
     findSimilarValues,
     restSimilarValues,
     calculateMatrixPercent,
     restMatrixPercent,
     deleteRow
}) {

  //define the initial state of the matrix
  useEffect(() => {
      changeMatrix(matrix, n, m);
  }, []);

  return (
    <div className={styles.wrapper}>
      <SelectDimensions
          n={n}
          m={m}
          rowOptions={rowOptions}
          columnOptions={columnOptions}

          changeRows={(n) => changeMatrix(matrix, n, m)}
          changeColumns={(m) => changeMatrix(matrix, n, m)}
      />
      <Matrix
          n={n}
          m={m}
          matrix={matrix}
          sumRows={sumRows}
          averageColumns={averageColumns}
          similarValues={similarValues}
          matrixPercent={matrixPercent}

          incrementValue={(i, j) => incrementValue(matrix, n, m, i, j)}
          findSimilarValues={(i, j) => findSimilarValues(matrix, n, m, i, j)}
          restSimilarValues={restSimilarValues}
          calculateMatrixPercent={calculateMatrixPercent}
          restMatrixPercent={restMatrixPercent}
          deleteRow={(i) => deleteRow(matrix, n, m, i)}
      />
    </div>
  );
}

const mapStateToProps = state => ({
  n: state.matrix.n,
  m: state.matrix.m,
  matrix: state.matrix.matrix,
  rowOptions: state.matrix.rowOptions,
  columnOptions: state.matrix.columnOptions,
  sumRows: state.matrix.sumRows,
  averageColumns: state.matrix.averageColumns,
  similarValues: state.matrix.similarValues,
  matrixPercent: state.matrix.matrixPercent,
});
const mapDispatchToProps = {
    changeMatrix,
    incrementValue,
    findSimilarValues,
    restSimilarValues,
    calculateMatrixPercent,
    restMatrixPercent,
    deleteRow
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
