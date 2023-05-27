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
              <div>Posts</div>
          </TabPanel>
          <TabPanel>
            <div>Followers</div>
          </TabPanel>
          <TabPanel>
            <div>Following</div>
          </TabPanel>
          </Tabs>
    </>
    )
  }
}

export default TimeLine;