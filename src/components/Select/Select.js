import React from 'react';

const Select = ({value, options, changeValue}) => {
    return (
        <select value={value} onChange={(e) => changeValue(e.target.value)}>
            {
                options.map((option, index) => {
                    return (
                        <option key={index + Math.random()}>{option}</option>
                    )
                })
            }
        </select>
    );
};

export default Select;
