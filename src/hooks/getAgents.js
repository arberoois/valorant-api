export const getAgents = (setAgents) => {

    fetch("https://valorant-api.com/v1/agents?isPlayableCharacter=true")
        .then((response) => response.json())
        .then(({ data }) => {
            setAgents(data)
        })
        .catch((error) => console.log(error))

}