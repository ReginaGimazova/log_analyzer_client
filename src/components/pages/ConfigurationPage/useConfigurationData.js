import { useEffect, useState } from "react";
import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

const useConfigurationData = () => {
  const [configData, setConfigData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const updateConfig = ids => {
    setLoading(true);
    axios
      .post(`${apiUrl}/configuration`, { status_ids: ids })
      .then(({ data }) => {
        setConfigData(data);
        setError("");
        setLoading(false);
      })
      .catch(e => {
        setConfigData(configData);
        setError(e.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${apiUrl}/configuration`)
      .then(({ data }) => {
        setConfigData(data);
        setError("");
        setLoading(false);
      })
      .catch(e => {
        setConfigData([]);
        setError(e.message);
        setLoading(false);
      });
  }, []);

  return { data: configData, loading, error, updateConfig };
};

export default useConfigurationData;
