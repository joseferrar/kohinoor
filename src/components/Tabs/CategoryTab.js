import React from "react";
import { Tabs, Tab, TabPanel, TabList } from "react-re-super-tabs";
import CustomTab from "./index";

function CategoryTab() {
  return (
    <div>
      <Tabs activeTab="about">
        <TabList>
          <Tab component={CustomTab} label="Info" id="info" />
          <Tab component={CustomTab} label="About" id="about" />
          <Tab component={CustomTab} label="Contact" id="contact" />
        </TabList>
        <TabList>
          <TabPanel component={() => <div>contact</div>} id="info" />
          <TabPanel component={() => <div>contact</div>} id="about" />
          <TabPanel component={() => <p>contact content ...</p>} id="contact" />
        </TabList>
      </Tabs>
    </div>
  );
}

export default CategoryTab;
