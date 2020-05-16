import { useEffect, useState } from "react";
import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

const useExplainInfoData = (chosenTables = []) => {
  const [explainInfo, setExplainInfo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const tableParams = JSON.stringify(chosenTables.map(({ label }) => label));

  const getExplainInfo = () => {
    setLoading(true);

    axios
      .get(`${apiUrl}/explain`)
      .then(({ data }) => {
        setExplainInfo(data);
        setError("");
        setLoading(false);
      })
      .catch(e => {
        setExplainInfo([]);
        setError(e.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    getExplainInfo();
  }, []);

  return { getExplainInfo, explainInfo, error, loading };
};

export default useExplainInfoData;
