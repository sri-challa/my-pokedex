import {
  Tabs,
  TabList,
  Tab,
  TabIndicator,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import About from "../About/About";
import Multipliers from "../Multipliers/Multipliers";
import Breeding from "../Breeding/Breeding";

export default function PokemonInfo() {
  return (
    <>
      <Tabs position="relative" variant="unstyled">
        <TabList>
          <Tab>About</Tab>
          <Tab>Breeding</Tab>
          <Tab>Multipliers</Tab>
        </TabList>
        <TabIndicator mt="-1.5px" height="2px" bg="poison.500" />
        <TabPanels>
          <TabPanel>
            <About />
          </TabPanel>
          <TabPanel>
            <Breeding />
          </TabPanel>
          <TabPanel>
            <Multipliers />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
}
