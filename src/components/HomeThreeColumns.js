import React from 'react';
import "../scss/home/home-three-columns.scss";

const HomeThreeColumns = () => {
    return (
        <section id="three-columns" className="home__three-col">
            <div className="three-col__wrapper home__page__wrapper">
                <div className="three-col__box">
                    <h1>10</h1>
                    <h2>oddanych worków</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid, amet autem beatae commodi
                        delectus deleniti dicta doloribus ducimus illo impedit ipsam magnam necessitatibus quibusdam
                        quos repellat sint tempora vero?</p>
                </div>
                <div className="three-col__box">
                    <h1>5</h1>
                    <h2>wspartych organizacji</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid, amet autem beatae commodi
                        delectus deleniti dicta doloribus ducimus illo impedit ipsam magnam necessitatibus quibusdam
                        quos repellat sint tempora vero?</p>
                </div>
                <div className="three-col__box">
                    <h1>7</h1>
                    <h2>zorganizowanych zbiórek</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid, amet autem beatae commodi
                        delectus deleniti dicta doloribus ducimus illo impedit ipsam magnam necessitatibus quibusdam
                        quos repellat sint tempora vero?</p>
                </div>
            </div>
        </section>
    );
};

export default HomeThreeColumns;