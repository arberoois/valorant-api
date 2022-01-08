import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import "./index.css";

const Agent = ({ agent }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    height: 800,
    overflowY: "scroll",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 10,
    outline: "none",
  };

  return (
    <div className="agent" onClick={handleOpen}>
      <h2>{agent.developerName}</h2>
      <img src={agent.fullPortrait} alt={agent.developerName} />
      <p>{agent.description}</p>
      <Modal open={open} onClose={handleClose}>
        <div className="abilities" style={style}>
          <h2>{agent.developerName}</h2>
          {agent.abilities &&
            agent.abilities.map((ability) => {
              return (
                <div key={ability.displayName} className="ability">
                  <p>{ability.displayName}</p>
                  <img src={ability.displayIcon} alt={ability.displayName} />
                  <span> {ability.description}</span>
                </div>
              );
            })}
        </div>
      </Modal>
    </div>
  );
};

export default Agent;
