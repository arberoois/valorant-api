import React, { useState, useEffect } from "react";
import "./index.css";
import Agent from "../Agent";
const Agents = () => {
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    fetch("https://valorant-api.com/v1/agents?isPlayableCharacter=true")
      .then((response) => response.json())
      .then(({ data }) => {
        setAgents(data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <h1>Valorant API</h1>
      <div className="container">
        {agents &&
          agents.map((agent) => {
            return <Agent key={agent.uuid} agent={agent} />;
          })}
      </div>
    </>
  );
};

export default Agents;
