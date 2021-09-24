import React, {useEffect, useState} from 'react';
import "../scss/home/home-who-we-help.scss";
import HelpButton from "./HelpButton";
import collections from "../data/collections";
import organizations from "../data/organizations";
import foundations from "../data/foundations";
import HelpList from "./HelpList";
import Pagination from "./Pagination";

const HomeWhoWeHelp = () => {

    const [currentOrganization, setCurrentOrganization] = useState("Fundacji");
    const [currentData, setCurrentData] = useState(foundations);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentItems, setCurrentItems] = useState([]);
    const [itemsPerPage] = useState(3);

    const setCurrentHandler = (textToSet, data) => {
        setCurrentOrganization(textToSet);
        setCurrentData(data);
        setCurrentPage(1);
    }

    useEffect(() => {
        const indexOfLastPost = currentPage * itemsPerPage;
        const indexOfFirstPost = indexOfLastPost - itemsPerPage;
        setCurrentItems(currentData.slice(indexOfFirstPost, indexOfLastPost));
    },[currentData, currentPage]);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <section id="who-we-help" className="home__help home__page__wrapper">
            <h1>Komu pomagamy?</h1>
            <hr/>
            <div className="help__type__box">
                <HelpButton setOrganization={setCurrentHandler}
                            currentOrganization={currentOrganization}
                            text="Fundacjom"
                            textToSet="Fundacji"
                            data={foundations}/>

                <HelpButton setOrganization={setCurrentHandler}
                            currentOrganization={currentOrganization}
                            text="Organizacjom pozarządowym"
                            textToSet="Organizacji pozarządowych"
                            data={organizations}/>

                <HelpButton setOrganization={setCurrentHandler}
                            currentOrganization={currentOrganization}
                            text="Lokalnym zbiórkom"
                            textToSet="Lokalnych zbiórek"
                            data={collections}/>
            </div>
            <p className="help__description">W naszej bazie znajdziesz listę zweryfikowanych {currentOrganization}, z którymi współpracujemy. Możesz
                sprawdzić
                czym się zajmują, komu pomagają i czego potrzebują.</p>
            <HelpList currentItems={currentItems} />
            {
                currentData.length > itemsPerPage ?
                    <Pagination
                        itemsPerPage={itemsPerPage}
                        totalItems={currentData.length}
                        paginate={paginate}
                        currentPage={currentPage}
                    />
                    :
                    <div className="empty-paginate"></div>
            }
        </section>
    );
};

export default HomeWhoWeHelp;