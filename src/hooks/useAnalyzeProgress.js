import { useState } from "react";
import axios from "axios";
import apiUrl from "../config";

const useAnalyzeProgress = () => {
  const [progress, setProgress] = useState(0);
  const [progressError, setProgressError] = useState("");

  const fetchProgress = () => {
    axios
      .get(`${apiUrl}/progress`)
      .then(({ data }) => {
        setProgress(data.progress);
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

  return { startProgress, fetchProgress, progress, progressError };
};

export default useAnalyzeProgress;
