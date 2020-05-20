import React from 'react';

import Select from "../Select/Select";

import styles from "./styles.module.css";

const SelectDimensions = ({n, m, rowOptions, columnOptions, changeRows, changeColumns}) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.mainWrapper}>
                <div className={styles.wrapperSelect}>
                    <span>The number of rows:</span>
                    <Select
                        options={rowOptions}
                        value={n}
                        changeValue={changeRows}
                    />
                </div>
                <div className={styles.wrapperSelect}>
                    <span>The number of columns:</span>
                    <Select
                        options={columnOptions}
                        value={m}
                        changeValue={changeColumns}
                    />
                </div>
            </div>
        </div>
    );
};

export default SelectDimensions;
