import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import 'react-tabs/style/react-tabs.css';

import './TimeLine.css'

const CustomTab = ({ children, selectedIndex}) => (
  <Tab>
    <section className='timeline-header'>
        <span className={`${selectedIndex === 'true' ? 'active':''}`}>
        {children}
        </span>
    </section>
  </Tab>
);

CustomTab.tabsRole = 'Tab'; 

class TimeLine extends Component {

    constructor(){
        super();
        this.state = { tabIndex: 0 };
    }

  render() {
    return (
    <>
        <Tabs 
            selectedIndex={this.state.tabIndex} 
            onSelect={tabIndex => this.setState({ tabIndex })}>
          <TabList className="timeline-header">
            <CustomTab selectedIndex={`${this.state.tabIndex===0 ? 'true' : 'false'}`}>
                Posts
            </CustomTab>
            <CustomTab selectedIndex={`${this.state.tabIndex===1 ?'true' : 'false'}`}>
                Followers
            </CustomTab>
            <CustomTab selectedIndex={`${this.state.tabIndex===2 ?'true' : 'false'}`}>
                Following
            </CustomTab>
          </TabList>
          <TabPanel>
              <h2>Posts</h2>
          </TabPanel>
          <TabPanel>
            <h2>Followers</h2>
          </TabPanel>
          <TabPanel>
            <h2>Following</h2>
          </TabPanel>
          </Tabs>
    </>
    )
  }
}

export default TimeLine;