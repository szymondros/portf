import React from 'react';
import "../scss/home/home-four-columns.scss";
import StepColumn from "./StepColumn";
import HomeHeaderButton from "./HomeHeaderButton";

const HomeFourColumns = () => {
    return (
        <section id="four-columns" className="home__four-col home__page__wrapper">
            <h1>Wystarczą 4 proste kroki</h1>
            <hr />
            <div className="four-col__wrapper">
                <StepColumn imgHref="/images/clothes-icon.png"
                            alt="clothes"
                            title="Wybierz rzeczy"
                            desc="ubrania, zabawki, sprzęt i inne" />
                <StepColumn imgHref="/images/package-icon.png"
                            alt="package"
                            title="Spakuj je"
                            desc="skorzystaj z worków na śmieci" />
                <StepColumn imgHref="/images/search-icon.png"
                            alt="search"
                            title="Zdecyduj komu chcesz pomóc"
                            desc="wybierz zaufane miejsce" />
                <StepColumn imgHref="/images/courier-icon.png"
                            alt="courier"
                            title="Zamów kuriera"
                            desc="kurier przyjedzie w dogodnym terminie" />
            </div>
            <HomeHeaderButton text="Oddaj rzeczy" />
        </section>
    );
};

export default HomeFourColumns;