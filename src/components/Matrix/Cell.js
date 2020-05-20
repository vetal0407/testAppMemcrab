import React from 'react';
import classNames from 'classnames'

import style from "./styles.module.css";

const Cell = ({
    cell,
    iRow,
    iColumn,
    similarValues,
    matrixPercent,

    incrementValue,
    findSimilarValues,
    restSimilarValues
}) => {
    //define to show amount or percent
    const value = matrixPercent[iRow][iColumn] ? `${matrixPercent[iRow][iColumn]}%` : cell;

    //define percent
    const percentPixel = matrixPercent[iRow][iColumn] ? (matrixPercent[iRow][iColumn] * 40) / 100 : null;

    //define is this element similar with another
    let isSimilar = false;
    similarValues.forEach((item) => {
        if(iRow === item.i && iColumn === item.j) isSimilar = true;
    });

    //if we need to show percent than set color in red
    const classesCell = classNames(
        {[style.cell]: true},
        {[style.redColor]: percentPixel},
    );

    //if this element similar with another draw background color in deepskyblue
    //else if we need to show percent, visualize the percent in blue
    //otherwise set the background color in white
    const stylesCover = {
        height: percentPixel ? `${percentPixel}px` : '40px',
        backgroundColor: percentPixel ? 'blue' : isSimilar ? 'deepskyblue' : 'white'
    };

    return (
        <div
            className={classesCell}
            onClick={() => incrementValue()}
            onMouseEnter={() => findSimilarValues()}
            onMouseLeave={() => restSimilarValues()}
        >
            <div className={style.cellCover} style={stylesCover}>
                <span className={style.cellValue}>{value}</span>
            </div>
        </div>
    );
};

export default Cell;

