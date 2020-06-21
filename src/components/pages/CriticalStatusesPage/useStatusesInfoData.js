import { useEffect, useState } from "react";
import { parse } from "query-string";
import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

// TODO: statuses data separate for explain and profile
const useStatusesInfoData = (chosenTables = [], analyzeType) => {
  const [statusesData, setStatusesData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const tableParams = JSON.stringify(chosenTables.map(({ label }) => label));
  const { page = 1 } = parse(window.location.search);

  const fetchType = analyzeType.toLowerCase();

  const getStatusesInfo = () => {
    setLoading(true);

    axios
      .get(`${apiUrl}/${fetchType}?page=${page}&search_tables=${tableParams}`)
      .then(({ data }) => {
        setStatusesData(data);
        setError("");
        setLoading(false);
      })
      .catch(e => {
        setStatusesData([]);
        setError(e.message);
        setLoading(false);
      });
  };

  const updateResult = () => {
    setLoading(true);

    axios
      .post(`${apiUrl}/${fetchType}/update`)
      .then(({ data }) => {
        setStatusesData(data);
        setError("");
        setLoading(false);
      })
      .catch(e => {
        setStatusesData(statusesData);
        setError(e.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    getStatusesInfo();
  }, [analyzeType, page]);

  return { getStatusesInfo, updateResult, statusesData, error, loading };
};

export default useStatusesInfoData;
