import React, {useState} from 'react';
import "../scss/home/home-who-we-help.scss";
import HelpButton from "./HelpButton";

const HomeWhoWeHelp = () => {

    const [currentOrganization, setCurrentOrganization] = useState("Fundacji");

    const setCurrentHandler = (textToSet) => {
        setCurrentOrganization(textToSet);
    }

    return (
        <section id="who-we-help" className="home__help home__page__wrapper">
            <h1>Komu pomagamy?</h1>
            <hr/>
            <div className="help__type__box">
                <HelpButton setOrganization={setCurrentHandler}
                            currentOrganization={currentOrganization}
                            text="Fundacjom"
                            textToSet="Fundacji"/>

                <HelpButton setOrganization={setCurrentHandler}
                            currentOrganization={currentOrganization}
                            text="Organizacjom pozarządowym"
                            textToSet="Organizacji pozarządowych"/>

                <HelpButton setOrganization={setCurrentHandler}
                            currentOrganization={currentOrganization}
                            text="Lokalnym zbiórkom"
                            textToSet="Lokalnych zbiórek"/>
            </div>
            <p>W naszej bazie znajdziesz listę zweryfikowanych {currentOrganization}, z którymi współpracujemy. Możesz
                sprawdzić
                czym się zajmują, komu pomagają i czego potrzebują.</p>
            <ul>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </section>
    );
};

export default HomeWhoWeHelp;