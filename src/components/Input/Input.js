import React from 'react';

const Input = ({value, changeValue}) => {
    return (
        <input type='text' value={value} onChange={(e) => changeValue(e.target.value)}/>
    );
};

export default Input;
