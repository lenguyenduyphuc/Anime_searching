import React from 'react';

const Filter = ({ value, onChange }) => {
    return (
        <div>
            find anime 
            <input
                value={value}       // Controlled input, value comes from the parent component
                onChange={onChange} // Handles changes to the input field
            />
        </div>
    );
}

export default Filter;
