import { useState } from "react";
import axios from "axios";
import apiUrl from "../config";

const useFetchOriginalQuery = () => {
  const [originalQuery, setOriginalQuery] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getOriginalQuery = (id, type) => {
    setLoading(true);
    axios
      .get(
        `${apiUrl}/filteredQueries?statusId=${id}&type=${type.toLowerCase()}`
      )
      .then(({ data }) => {
        setOriginalQuery(data[0].query_text);
        setLoading(false);
        setError("");
      })
      .catch(e => {
        setError(e.message);
        setLoading(false);
      });
  };

  return { originalQuery, error, loading, getOriginalQuery };
};

export default useFetchOriginalQuery;
