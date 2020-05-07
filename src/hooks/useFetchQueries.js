import { useEffect, useState, useCallback } from "react";
import { parse } from "query-string";
import axios from "axios";

const useFetchQueries = ({ tables, byHost }) => {
  const [queriesData, setQueriesData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const apiUrl = process.env.REACT_APP_API_URL;
  const { page } = parse(window.location.search);

  const getQueries = useCallback(() => {
    const tableParams = JSON.stringify(tables.map(({ label }) => label));
    setLoading(true);

    axios
      .get(
        `${apiUrl}/queries?host=${byHost}&search_tables=${tableParams}&page=${page}`
      )
      .then(({ data }) => {
        setQueriesData(data);
        setError("");
        setLoading(false);
      })
      .catch(e => {
        setQueriesData([]);
        setError(e.message);
        setLoading(false);
      });
  }, [byHost, tables, page]);

  useEffect(() => {
    getQueries();
  }, [byHost, page]);

  return { queriesData, loading, error, getQueries };
};

export default useFetchQueries;
