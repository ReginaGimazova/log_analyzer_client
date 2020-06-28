import { useEffect, useState } from "react";
import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

// TODO: move to context

const useTables = () => {
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

  useEffect(() => {
    getTables();
  }, []);

  return { tables, tablesError, getTables };
};

export default useTables;
