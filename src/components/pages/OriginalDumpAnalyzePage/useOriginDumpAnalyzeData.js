import { useEffect, useState } from "react";
import axios from "axios";
import useFetchQueries from "../../../hooks/useFetchQueries";

const apiUrl = process.env.REACT_APP_API_URL;

const useOriginDumpAnalyzeData = (byHost = false, chosenTables = []) => {
  const [tables, setTables] = useState([]);
  const [tablesError, setTablesError] = useState("");

  const getTables = () => {
    axios
      .get(`${apiUrl}/tables`)
      .then(({ data }) => {
        setTables(data);
        setTablesError("");
      })
      .catch(e => {
        setTables([]);
        setTablesError(e.message);
      });
  };

  const { queriesData, loading, error, getQueries } = useFetchQueries({
    tables: chosenTables,
    byHost
  });

  useEffect(() => {
    getTables();
  }, []);

  const defaultData = {
    page: 1,
    pageCount: undefined,
    queries: []
  };

  return {
    data: queriesData || defaultData,
    loading,
    error,
    tables,
    tablesError,
    getQueries,
    getTables
  };
};

export default useOriginDumpAnalyzeData;
