import { useState, useEffect } from "react";
import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

const useInsertProgress = () => {
  const [progress, setProgress] = useState(0);
  const [currentInterval, setCurrentInterval] = useState(0);

  const fetchProgress = () => {
    const interval = setInterval(() => {
      axios
        .get(`${apiUrl}/progress`)
        .then(({ data }) => {
          setProgress(data);
        })
        .catch(error => console.log(error));
    }, 2000);
    setCurrentInterval(interval);
  };

  useEffect(() => {
    if (progress === 100) {
      clearInterval(currentInterval);
    }
  }, [progress]);

  return { fetchProgress, progress };
};

export default useInsertProgress;
