import { useEffect, useState } from "react";
import { getAgents } from "../services/getAgents";

const useAgents = () => {
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    getAgents().then((newAgents) => setAgents(newAgents));
  }, [setAgents]);

  return { agents };
};

export default useAgents;
