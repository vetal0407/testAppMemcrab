import React, {useEffect} from 'react';
import {connect} from "react-redux";

import {
    changeMatrix,
    changeX,
    incrementValue,
    findSimilarValues,
    resetSimilarValues,
    calculateMatrixPercent,
    resetMatrixPercent,
    deleteRow
} from "./redux/actions/matrix";

import SelectDimensions from "./components/SelectDimensions/SelectDimensions";
import Matrix from "./components/Matrix/Matrix";

import styles from "./App.module.css";

function App({
     n,
     m,
     x,
     matrix,
     sumRows,
     averageColumns,
     similarValues,
     matrixPercent,

     changeMatrix,
     changeX,
     incrementValue,
     findSimilarValues,
     resetSimilarValues,
     calculateMatrixPercent,
     resetMatrixPercent,
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
          x={x}

          changeX={changeX}
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

          incrementValue={(i, j) => incrementValue(matrix, n, m, x, i, j)}
          findSimilarValues={(i, j) => findSimilarValues(matrix, n, m, x, i, j)}
          resetSimilarValues={resetSimilarValues}
          calculateMatrixPercent={calculateMatrixPercent}
          resetMatrixPercent={resetMatrixPercent}
          deleteRow={(i) => deleteRow(matrix, n, m, i)}
      />
    </div>
  );
}

const mapStateToProps = state => ({
  n: state.matrix.n,
  m: state.matrix.m,
  x: state.matrix.x,
  matrix: state.matrix.matrix,
  sumRows: state.matrix.sumRows,
  averageColumns: state.matrix.averageColumns,
  similarValues: state.matrix.similarValues,
  matrixPercent: state.matrix.matrixPercent,
});
const mapDispatchToProps = {
    changeMatrix,
    changeX,
    incrementValue,
    findSimilarValues,
    resetSimilarValues,
    calculateMatrixPercent,
    resetMatrixPercent,
    deleteRow
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
