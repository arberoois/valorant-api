import React, {useState} from 'react'
import styles from './AgentModal.module.css'
export const AgentModal = ({ agent, setModal }) => {

    const { abilities, displayName } = agent

    const [info, setInfo] = useState(agent.description)

    const handleClose = e => {if (e.target.className.includes('modal')) setModal(false)}

    const handleChangeInfo = e => setInfo(abilities[e.target.getAttribute('ability_id')].description)

    return (
        <modal className={styles.modal} onClick={handleClose}>
            <div >
                <div className={styles.container}>
                        <h1>{displayName}</h1>
                        <span className={styles.info}>{info}</span>
                        <div className={styles.abilities}>
                            {
                            abilities.map((ability, index) => {
                                const abilitiesName = ability.displayName.split('/')
                                return(
                                    <div onClick={handleChangeInfo}>
                                        {ability.displayIcon ?
                                            <>
                                                <img ability_id={index} src={ability.displayIcon}/>
                                                <div>
                                                    {abilitiesName.map(name => <p>{name}</p>)}
                                                </div>
                                            </>
                                            : ''}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
            </div>
        </modal>
    )
}