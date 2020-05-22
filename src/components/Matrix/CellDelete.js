import React from 'react';

import styles from "./styles.module.css";

const CellDelete = ({deleteRow}) => {
    return (
        <div
            className={styles.cellDelete}
            onClick={deleteRow}
        >-</div>
    );
};

export default CellDelete;

