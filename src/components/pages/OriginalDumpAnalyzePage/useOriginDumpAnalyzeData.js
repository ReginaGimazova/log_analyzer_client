import { useEffect, useState } from "react";
import axios from "axios";
import useSearchQueries from "../../../hooks/useSearchQueries";

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

  const { queries, loading, error, getQueries } = useSearchQueries({
    tables: chosenTables,
    byHost
  });

  useEffect(() => {
    getTables();
  }, []);

  return { data: queries, loading, error, tables, tablesError, getQueries };
};

export default useOriginDumpAnalyzeData;
