import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import decoration from "../../assets/Decoration.svg";
import React from "react";

const Organizations = () => {
    return (
        <section className="homeOrganizations" id="organizations">
            <h2>Komu pomagamy?</h2>
            <div className="homeFourSteps__decoration">
                <img src={decoration} alt={"decoration"}/>
            </div>
            <Tabs>
                <TabList className="homeOrganizations__tabList">
                    <Tab className="homeOrganizations__tab">Fundacjom</Tab>
                    <Tab className="homeOrganizations__tab">Organizacjom <br/>pozarzadowym</Tab>
                    <Tab className="homeOrganizations__tab">Lokalnym<br/>zbiorkom</Tab>
                </TabList>


                <TabPanel className="tabPanel">
                    <p className="homeOrganizations__text">
                        W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.
                    </p>
                    <div className="tabPanel__wrapper">
                        <div>
                            <h3>Fundacja “Dbam o Zdrowie”</h3>
                            <p>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</p>
                        </div>
                        <p>ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
                    </div>
                    <div className="tabPanel__wrapper">
                        <div>
                            <h3>Fundacja “Dla dzieci”</h3>
                            <p>Cel i misja: Pomoc dzieciom z ubogich rodzin.</p>
                        </div>
                        <p>ubrania, meble, zabawki</p>
                    </div>
                    <div className="tabPanel__wrapper">
                        <div>
                            <h3>Fundacja “Bez domu”</h3>
                            <p>Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.</p>
                        </div>
                        <p>ubrania, jedzenie, ciepłe koce</p>
                    </div>

                </TabPanel>

                <TabPanel className="tabPanel">
                    <p className="homeOrganizations__text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias aspernatur, aut dicta ducimus eum, fugiat in placeat quod temporibus velit voluptas voluptatum? Debitis, doloribus iste suscipit ut voluptas voluptate.
                    </p>
                    <div className="tabPanel__wrapper">
                        <div>
                            <h3>Organizacja "Lorem Ipsum 1"</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                        <p>ubrania, jedzenie</p>
                    </div>
                    <div className="tabPanel__wrapper">
                        <div>
                            <h3>Lorem Ipsum 2</h3>
                            <p>A alias aspernatur, aut dicta ducimus eum, fugiat in placeat quod temporibus velit voluptas voluptatum?</p>
                        </div>
                        <p>ubrania, meble, zabawki</p>
                    </div>
                    <div className="tabPanel__wrapper">
                        <div>
                            <h3>Organizacja "Lorem Ipsum 3</h3>
                            <p>Debitis, doloribus iste suscipit ut voluptas voluptate.</p>
                        </div>
                        <p>ubrania, jedzenie, ciepłe koce</p>
                    </div>
                </TabPanel>

                <TabPanel className="tabPanel">
                    <p className="homeOrganizations__text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias aspernatur, aut dicta ducimus eum, fugiat in placeat quod temporibus velit voluptas voluptatum? Debitis, doloribus iste suscipit ut voluptas voluptate.
                    </p>
                    <div className="tabPanel__wrapper">
                        <div>
                            <h3>Organizacja "Lorem Ipsum 1"</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                        <p>ubrania, jedzenie</p>
                    </div>
                    <div className="tabPanel__wrapper">
                        <div>
                            <h3>Lorem Ipsum 2</h3>
                            <p>A alias aspernatur, aut dicta ducimus eum, fugiat in placeat quod temporibus.</p>
                        </div>
                        <p>ubrania, meble, zabawki</p>
                    </div>
                    <div className="tabPanel__wrapper">
                        <div>
                            <h3>Organizacja "Lorem Ipsum 3</h3>
                            <p>Debitis, doloribus iste suscipit ut voluptas voluptate.</p>
                        </div>
                        <p>ubrania, jedzenie, ciepłe koce</p>
                    </div>
                </TabPanel>
            </Tabs>
        </section>
)
};
export default Organizations;