import { useContext } from "react";
import { render } from "@testing-library/react";
import RaceProvider, { RaceContext } from "./__mocks__/mockRaces.json";

const TestComponentWithAppContext = () => {
  const { error, categoriseRaces } = useContext(RaceContext);
  const races = categoriseRaces();
  if (error) return <div>error!</div>;
  return <div>Races: {races.length}</div>;
};

it("TestComponentWithAppContext", async () => {
  const { container } = render(
    <RaceProvider>
      <TestComponentWithAppContext />
    </RaceProvider>
  );

  expect(container).toMatchSnapshot();
});
