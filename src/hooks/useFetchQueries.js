import { useEffect, useState, useCallback } from "react";

import axios from "axios";

const useFetchQueries = ({ tables, byHost }) => {
  const [queries, setQueries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getQueries = useCallback(() => {
    const tableParams = JSON.stringify(tables.map(({ label }) => label));
    setLoading(true);

    axios
      .get(
        `http://localhost:5000/queries?host=${byHost}&search_tables=${tableParams}`
      )
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
  }, [byHost, tables]);

  useEffect(() => {
    getQueries();
  }, [byHost]);

  return { queries, loading, error, getQueries };
};

export default useFetchQueries;
