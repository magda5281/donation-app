import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import React from "react";
import PaginatedItems from "./PaginatedItems";
import organizationsList from "../../data/organizationsList";
import fundationsList from "../../data/fundationsList";
import localList from "../../data/local";
import Decoration from "../Decoration";

// to do: create data base storage on firebase for data
//pull that data from firebase db 

const WhoWeHelp = () => {

    return (
        <section className="whoWeHelp" id="organizations">
            <div className='container--medium'>
            <h2>Komu pomagamy?</h2>
            <Decoration marginTop="25px" marginBottom="25px"/>
            <Tabs className='whoWeHelp__Tabs'>
                <TabList className="whoWeHelp__tabList">
                    <Tab className="whoWeHelp__tab" >Fundacjom</Tab>
                    <Tab className="whoWeHelp__tab">Organizacjom <br/>pozarzadowym</Tab>
                    <Tab className="whoWeHelp__tab">Lokalnym<br/>zbiorkom</Tab>
                </TabList>

                <TabPanel className="whoWeHelp__tabPanel" >
                    <p className="whoWeHelp__text">
                        W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.
                    </p>
                    <PaginatedItems itemsPerPage={3} items={fundationsList}/>
                </TabPanel>

                <TabPanel className="whoWeHelp__tabPanel">
                        <p className="whoWeHelp__text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias aspernatur, aut dicta ducimus eum, fugiat in placeat quod temporibus velit voluptas voluptatum?
                        </p>
                    <PaginatedItems itemsPerPage={3} items={organizationsList}/>

                </TabPanel>
                <TabPanel className="whoWeHelp__tabPanel">
                        <p className="whoWeHelp__text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias aspernatur, aut dicta ducimus eum, fugiat in placeat quod temporibus velit voluptas voluptatum?
                        </p>
                    <PaginatedItems itemsPerPage={3} items={localList}/>
                </TabPanel>
                </Tabs>
                </div>
        </section>
)
};
export default WhoWeHelp;