import React, { useState, useEffect } from "react"
import styles from './Agents.module.css'
import { Agent } from "../Agent/Agent"
import { getAgents } from "../../services/getAgents";
import { AgentModal } from "../AgentModal/AgentModal";

export const Agents = () => {

  const [agents, setAgents] = useState([])
  const [modal, setModal] = useState(
    {
      isOpen: false,
    }
  )

  useEffect(() => 
     getAgents(setAgents)
  , []);

  return (
    <>
      {modal.isOpen ? <AgentModal agent={modal.agent} setModal={setModal} /> : ''}
      <div className={styles.container}>
        {agents &&
          agents.map((agent) => {
            return <Agent key={agent.uuid} agent={agent} setModal={setModal} />
          })}
      </div>
    </>
  );
};

