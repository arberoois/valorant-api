import React from "react";
import "./index.css";
import Agent from "../Agent";
import useAgents from "../../hooks/useAgents";

const Agents = () => {
  const { agents } = useAgents();

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
