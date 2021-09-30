import React from 'react';

const Celle = ({active}) => {
    return (
        <div className={"column"}>
            <div className={`column_circle ${active ? "active" : ""}`}>

            </div>
        </div>
    );
};

export default Celle;
