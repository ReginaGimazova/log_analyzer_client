import { useEffect, useState } from "react";
import { parse } from "query-string";
import axios from "axios";
import types from "./types";

const apiUrl = process.env.REACT_APP_API_URL;

const useStatusesInfoData = (chosenTables = [], analyzeType) => {
  const [statusesData, setStatusesData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const tableParams = JSON.stringify(chosenTables.map(({ label }) => label));
  const { page = 1 } = parse(window.location.search);

  const fetchType = analyzeType === types.EXPLAIN ? "explain" : "profile";

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

  useEffect(() => {
    getStatusesInfo();
  }, [analyzeType, page]);

  return { getStatusesInfo, statusesData, error, loading };
};

export default useStatusesInfoData;
