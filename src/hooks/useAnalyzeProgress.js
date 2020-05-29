import { useState, useEffect } from "react";
import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

const useAnalyzeProgress = () => {
  const [progress, setProgress] = useState(0);
  const [currentInterval, setCurrentInterval] = useState(0);
  const [progressError, setProgressError] = useState("");

  const fetchProgress = () => {
    const interval = setInterval(() => {
      axios
        .get(`${apiUrl}/progress`)
        .then(({ data }) => {
          setProgress(data);
        })
        .catch(error => {
          setProgressError(error.message);
          clearInterval(currentInterval);
        });
    }, 2000);
    setCurrentInterval(interval);
  };

  const startProgress = () => {
    axios
      .post(`${apiUrl}/start`)
      .then(() => {
        fetchProgress();
      })
      .catch(error => {
        setProgressError(error.message);
      });
  };

  useEffect(() => {
    if (progress === 100 || progressError) {
      clearInterval(currentInterval);
      setProgress(0);
    }
  }, [progress, progressError]);

  return { startProgress, progress, progressError };
};

export default useAnalyzeProgress;
