import React from 'react';

import Input from "../Input/Input";

import styles from "./styles.module.css";

const SelectDimensions = ({n, m, x, changeX, changeRows, changeColumns}) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.mainWrapper}>
                <div className={styles.wrapperSelect}>
                    <span>The number of rows(N):</span>
                    <Input
                        value={n}
                        changeValue={changeRows}
                    />
                </div>
                <div className={styles.wrapperSelect}>
                    <span>The number of columns(M):</span>
                    <Input
                        value={m}
                        changeValue={changeColumns}
                    />
                </div>
                <div className={styles.wrapperSelect}>
                    <span>The number of similar values(X):</span>
                    <Input
                        value={x}
                        changeValue={changeX}
                    />
                </div>
            </div>
        </div>
    );
};

export default SelectDimensions;
