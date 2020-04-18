import { useEffect, useState } from "react";
import axios from "axios";

const apiUrl = process.env.API_URL;

const useOriginDumpAnalyzeData = () => {
  const [queries, setQueries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5000/queries`)
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
  }, []);

  return { data: queries, loading, error };
};

export default useOriginDumpAnalyzeData;
