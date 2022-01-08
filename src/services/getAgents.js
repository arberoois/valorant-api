export function getAgents() {
  const apiURL = "https://valorant-api.com/v1/agents?isPlayableCharacter=true";

  return fetch(apiURL)
    .then((response) => response.json())
    .then(({ data }) => {
      return data;
    })
    .catch((error) => console.log(error));
}
