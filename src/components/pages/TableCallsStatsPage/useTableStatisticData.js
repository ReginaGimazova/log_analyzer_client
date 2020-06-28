import { useEffect, useState } from "react";
import axios from "axios";
import apiUrl from "../../../config";

const useTableStatisticData = () => {
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);

    axios
      .get(`${apiUrl}/tables`)
      .then(({ data }) => {
        const preparedData = data.map(value => ({
          name: value.table_name,
          call_count: value.call_count
        }));
        setTableData(preparedData);
        setError("");
        setLoading(false);
      })
      .catch(e => {
        setTableData([]);
        setError(e.message);
        setLoading(false);
      });
  }, []);

  return { data: tableData, loading, error };
};

export default useTableStatisticData;
