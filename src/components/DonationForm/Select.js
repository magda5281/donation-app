import React from 'react';
import ReactSelect from "react-select/base";

const Select = ({options,placeholder,onSelectChange,className}) => {

    const customStyles = {
        option: (provided) => ({
            ...provided,
            fontWeight: 300,
            // color: "#3C3C3C",
            cursor: "pointer",
        }),
    }

    return (
        <ReactSelect
            className={className}
            placeholder={placeholder}
            options={options}
            // styles={customStyles}
            // theme={customTheme}
            // isSearchable={false}
            onChange={onSelectChange}
        />
    );
};

export default Select;