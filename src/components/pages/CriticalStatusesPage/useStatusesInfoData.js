import { useEffect, useState } from "react";
import axios from "axios";

import types from "./types";
const apiUrl = process.env.REACT_APP_API_URL;

const useStatusesInfoData = (chosenTables = [], analyzeType) => {
  const [statuses, setStatuses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const tableParams = JSON.stringify(chosenTables.map(({ label }) => label));

  const fetchString =
    analyzeType === types.EXPLAIN ? `${apiUrl}/explain` : `${apiUrl}/profile`;

  const getStatusesInfo = () => {
    setLoading(true);

    axios
      .get(fetchString)
      .then(({ data }) => {
        setStatuses(data);
        setError("");
        setLoading(false);
      })
      .catch(e => {
        setStatuses([]);
        setError(e.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    getStatusesInfo();
  }, [analyzeType]);

  return { getStatusesInfo, statuses, error, loading };
};

export default useStatusesInfoData;
