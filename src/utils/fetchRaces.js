const racesApi =
  "https://api.neds.com.au/rest/v1/racing/?method=nextraces&count=10";

export default async function fetchRaces() {
  const response = await fetch(racesApi);
  const json = await response.json();
  return json.data;
}
