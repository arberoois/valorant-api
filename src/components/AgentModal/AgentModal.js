import React from 'react'
import styles from './AgentModal.module.css'
export const AgentModal = ({ agent, setModal }) => {


    const handleClose = (e) => {
        if (e.target.className.includes('modal')) setModal(false)
    }
    console.log(agent)
    const { abilities, developerName, bustPortrait } = agent

    return (
        <modal className={styles.modal} onClick={handleClose}>
            <div >
                <div className={styles.leftSide}>
                    <img src={bustPortrait} />
                </div>
                <div className={styles.rightSide}>
                </div>
            </div>
            <div className="abilities">
                {/*  <h2>{developerName}</h2>
                {agent.abilities &&
                    agent.abilities.map((ability) => {
                        return (
                            <div key={ability.displayName} className="ability">
                                <p>{ability.displayName}</p>
                                <img src={ability.displayIcon} alt={ability.displayName} />
                                <span> {ability.description}</span>
                            </div>
                        )
                    })} */}
            </div>
        </modal>
    )
}