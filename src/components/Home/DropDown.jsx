import React, { useState } from 'react';
import '../../styles/home_filters.css';



const DropDown = ({ header, children }) => {

    const [ isOpen, setIsOpen ] = useState(true)

    return (
        <div className={`filter-drop-down ${isOpen ? '' : 'closed'}`}>
            <div className="title__price" onClick={() => setIsOpen(!isOpen)}>
                <span>
                    {header}
                </span>
                <i className="bx bx-chevron-down"></i>
            </div>

            <div className="content">
                {children}
            </div>
        </div>
    );
};

export default DropDown;