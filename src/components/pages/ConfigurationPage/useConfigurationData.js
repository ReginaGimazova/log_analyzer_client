import { useEffect, useState } from "react";
import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

const useConfigurationData = () => {
  const [configData, setConfigData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const updateConfig = statuses => {
    setLoading(true);
    axios
      .post(`${apiUrl}/configuration/update`, { statuses })
      .then(() => {
        setError("");
        setLoading(false);
      })
      .catch(e => {
        setConfigData(configData);
        setError(e.message);
        setLoading(false);
      });
  };

  const addNewStatus = statusData => {
    setLoading(true);
    const { value, configType } = statusData;
    axios
      .post(`${apiUrl}/configuration/add`, {
        value,
        type: configType,
        mode: 1
      })
      .then(({ data }) => {
        setConfigData(data);
        setError("");
        setLoading(false);
      })
      .catch(e => {
        setConfigData(configData);
        setLoading(false);
        setError(e.message);
      });
  };

  const removeStatus = statusData => {
    setLoading(true);
    const { value, configType } = statusData;
    axios
      .post(`${apiUrl}/configuration/remove`, {
        value,
        type: configType
      })
      .then(({ data }) => {
        setConfigData(data);
        setLoading(false);
        setError("");
      })
      .catch(e => {
        setConfigData(configData);
        setLoading(false);
        setError(e.message);
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

  return {
    data: configData,
    loading,
    error,
    updateConfig,
    addNewStatus,
    removeStatus
  };
};

export default useConfigurationData;
