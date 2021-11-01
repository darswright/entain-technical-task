import {
  ChakraProvider,
  Container,
  Heading,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import RaceList from "./components/RaceList";
import RaceProvider from "./context/RaceContext";

function App() {
  return (
    <ChakraProvider>
      <RaceProvider>
        <Container p={4}>
          <Heading mb={4}>Next to go 🏇</Heading>

          <Tabs>
            <TabList>
              <Tab>All races</Tab>
              <Tab>Greyhound racing</Tab>
              <Tab>Harness racing</Tab>
              <Tab>Horse racing</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <RaceList />
              </TabPanel>
              <TabPanel>
                <RaceList category="greyhound" />
              </TabPanel>
              <TabPanel>
                <RaceList category="harness" />
              </TabPanel>
              <TabPanel>
                <RaceList category="horse" />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Container>
      </RaceProvider>
    </ChakraProvider>
  );
}

export default App;
