import React from 'react';

const StepColumn = ({imgHref, alt, title, desc}) => {
    return (
            <div className="four-col__col">
                <img src={imgHref} alt={alt} />
                <h2>{title}</h2>
                <hr />
                <p>{desc}</p>
            </div>
    );
};

export default StepColumn;