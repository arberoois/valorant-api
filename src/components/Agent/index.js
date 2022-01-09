import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import "./index.css";

const Agent = ({ agent }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="agent" onClick={handleOpen}>
      <h2>{agent.developerName}</h2>
      <img src={agent.fullPortrait} alt={agent.developerName} />
      <p>{agent.description}</p>
      <Modal open={open} onClose={handleClose}>
        <div className="abilities modal">
          {open && (
            <div className="close" onClick={() => setOpen(false)}>
              <CloseIcon />
            </div>
          )}
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
