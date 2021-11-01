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
import RacesList from "./components/RacesList";
import useAsync from "./hooks/useAsync";

const races =
  "https://api.neds.com.au/rest/v1/racing/?method=nextraces&count=10";

async function fetchRaces() {
  const response = await fetch(races);
  const json = await response.json();
  return json.data;
}

function App() {
  const { status, value, error } = useAsync(fetchRaces);

  return (
    <ChakraProvider>
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
              <RacesList error={error} status={status} value={value} />
            </TabPanel>

            <TabPanel>
              <RacesList
                error={error}
                status={status}
                value={value}
                category="greyhound"
              />
            </TabPanel>

            <TabPanel>
              <RacesList
                error={error}
                status={status}
                value={value}
                category="harness"
              />
            </TabPanel>

            <TabPanel>
              <RacesList
                error={error}
                status={status}
                value={value}
                category="horse"
              />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
    </ChakraProvider>
  );
}

export default App;
