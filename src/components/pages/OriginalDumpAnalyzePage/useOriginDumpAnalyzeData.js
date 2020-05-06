import { useEffect, useState } from "react";
import axios from "axios";
import useFetchQueries from "../../../hooks/useFetchQueries";

const apiUrl = process.env.API_URL;

const useOriginDumpAnalyzeData = (byHost = false, chosenTables = []) => {
  const [tables, setTables] = useState([]);
  const [tablesError, setTablesError] = useState("");

  const getTables = () => {
    axios
      .get("http://localhost:5000/tables")
      .then(({ data }) => {
        setTables(data);
        setTablesError("");
      })
      .catch(e => {
        setTables([]);
        setTablesError(e.message);
      });
  };

  const { queries, loading, error, getQueries } = useFetchQueries({
    tables: chosenTables,
    byHost
  });

  useEffect(() => {
    getTables();
  }, []);

  return {
    data: queries,
    loading,
    error,
    tables,
    tablesError,
    getQueries,
    getTables
  };
};

export default useOriginDumpAnalyzeData;
