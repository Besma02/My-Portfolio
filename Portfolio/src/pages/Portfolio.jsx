import {  Tab, TabList, Tabs,TabPanels,TabPanel} from "@chakra-ui/react";

import Compétence from "./ProfilItem/Compétence";
import Informatique from "./ProfilItem/Informatique";

export default function Portfolio() {
  return (
    <Tabs variant="enclosed" p="40px" >
    <TabList gap="40px" >
      
      <Tab _selected={{color:"white",bg:"teal.400"}}>Stage & Expérience</Tab>
      <Tab _selected={{color:"white",bg:"teal.400"}}>Compétence</Tab> 
      <Tab _selected={{color:"white",bg:"teal.400"}}>Informatique</Tab>
      
    </TabList>
    <TabPanels>
    <TabPanel></TabPanel>
    <TabPanel>
      <Compétence/>
    </TabPanel>
    <TabPanel>
      <Informatique/>
    </TabPanel>
    </TabPanels>

  </Tabs>
  )
}
