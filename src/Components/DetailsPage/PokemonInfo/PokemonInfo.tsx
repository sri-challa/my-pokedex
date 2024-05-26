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
import { useDetails } from "../../../Pages/DetailsPage/state/useDetails";

export default function PokemonInfo() {
  const { pokemonData } = useDetails();
  const { types } = pokemonData!;

  return (
    <>
      <Tabs position="relative" variant="unstyled">
        <TabList>
          <Tab>About</Tab>
          <Tab>Breeding</Tab>
          <Tab>Multipliers</Tab>
        </TabList>
        <TabIndicator mt="-1.5px" height="2px" bg={`${types[0]}.500`} />
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
