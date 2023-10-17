import {  Tab, TabList, Tabs,TabPanels,TabPanel} from "@chakra-ui/react";

import Compétence from "./ProfilItem/Compétence";
import Informatique from "./ProfilItem/Informatique";
import { StageExperience } from "./ProfilItem/StageExperience";

export default function Portfolio() {
  return (
    <Tabs variant="enclosed"     mt="20px" width={{base:"100%",md:"80%",lg:"100%"}} className='profil'  >
    <TabList gap="0"  >
      
      <Tab _selected={{color:"white",bg:"teal.400"}}>Stage & Expérience</Tab>
      <Tab _selected={{color:"white",bg:"teal.400"}}>Compétence</Tab> 
      <Tab _selected={{color:"white",bg:"teal.400"}}>Informatique</Tab>
      
    </TabList>
    <TabPanels>
    <TabPanel>
      <StageExperience/>
    </TabPanel>
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
