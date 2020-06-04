import { useState, useEffect } from "react";
import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

const useAnalyzeProgress = () => {
  const [progress, setProgress] = useState(0);
  const [progressError, setProgressError] = useState("");

  const fetchProgress = () => {
    axios
      .get(`${apiUrl}/progress`)
      .then(({ data }) => {
        setProgress(data);
      })
      .catch(error => {
        setProgressError(error.message);
      });
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
    if (progress > 0 && progress < 100) {
      fetchProgress();
    }
  }, [progress]);

  return { startProgress, progress, progressError };
};

export default useAnalyzeProgress;
