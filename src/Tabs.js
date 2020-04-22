import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import NewMap from "./MyMap";

class NewTab extends React.Component {
  render() {
    return (
      <Tabs>
        <TabList>
          <Tab>Current Location</Tab>
          <Tab>Born in</Tab>
          <Tab>Future Location</Tab>
          <Tab>Would love to see</Tab>
        </TabList>
        <TabPanel>
          <NewMap
            info={{ lng: 47.61497, lat: 7.66457, text: "current", zoom: 13 }}
          />
        </TabPanel>
        <TabPanel>
          <NewMap
            info={{
              lng: 46.91667,
              lat: 26.33333,
              text: "Birth Place",
              zoom: 13
            }}
          />
        </TabPanel>
        <TabPanel>
          <NewMap
            info={{
              lng: 47.3686498,
              lat: 8.5391825,
              text: "Future Location",
              zoom: 17
            }}
          />
        </TabPanel>
        <TabPanel>
          <NewMap
            info={{ lng: 44.120556, lat: 9.722866, text: "Wanabe", zoom: 19 }}
          />
        </TabPanel>
      </Tabs>
    );
  }
}

export default NewTab;
