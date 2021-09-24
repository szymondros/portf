import React from 'react';

const Pagination = ({itemsPerPage, totalItems, paginate, currentPage}) => {

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <>
            <ul className="help__pagination">
                { pageNumbers.map(number => (
                        <li key={number}>
                            <div onClick={() => paginate(number)} className={currentPage === number ?
                                "pagination__page__link bordered" : "pagination__page__link"}>
                                {number}
                            </div>
                        </li>
                    ))
                }
            </ul>
        </>
    );
};

export default Pagination;