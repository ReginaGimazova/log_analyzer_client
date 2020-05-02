import { useEffect, useState } from "react";
import axios from "axios";

const apiUrl = process.env.API_URL;

const useOriginDumpAnalyzeData = (byHost = false) => {
  const [queries, setQueries] = useState([]);
  const [tables, setTables] = useState([]);
  const [tablesError, setTablesError] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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

  const getQueries = hostParam => {
    setLoading(true);
    axios
      .get(`http://localhost:5000/queries?host=${hostParam}`)
      .then(({ data }) => {
        setQueries(data);
        setError("");
        setLoading(false);
      })
      .catch(e => {
        setQueries([]);
        setError(e.message);
        setLoading(false);
      });
  };
  useEffect(() => {
    getQueries(byHost);
  }, [byHost]);

  useEffect(() => {
    getTables();
  }, []);

  return { data: queries, loading, error, tables, tablesError };
};

export default useOriginDumpAnalyzeData;
