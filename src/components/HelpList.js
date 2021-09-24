import React from 'react';

const HelpList = ({currentItems}) => {
    return (
        <ul className="help__item-list">
            { currentItems.map((item, index) =>
                <li key={index}>
                    <div className="help__list__title">
                        <h2>{item.title}</h2>
                        <p className="item-list__title">{item.desc}</p>
                    </div>
                    <div className="help__list__tags">
                        {
                            item.items.map((item, index) => <p className="list-tag" key={index}>{item}</p>)
                        }
                    </div>
                </li>
            )}
        </ul>
    );
};

export default HelpList;