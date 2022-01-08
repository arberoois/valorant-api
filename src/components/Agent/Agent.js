import React, { useState } from "react"
import styles from "./Agent.module.css"

export const Agent = ({ agent, setModal }) => {

  const handleOpen = () => setModal({
    isOpen: true,
    agent
  })

  return (
    <div className={styles.agent} onClick={handleOpen}>
      <h2>{agent.developerName}</h2>
      <img src={agent.fullPortrait} alt={agent.developerName} />
    </div>
  )
}

