import {useEffect, useState} from "react";
import axios from 'axios';

const useTableStatisticData = () => {
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);

    axios
      .get('http://localhost:5000/tables')
      .then(({data}) => {
        const preparedData = data.map((value = {}) =>
          ({
            name: value.table_name,
            call_count: value.call_count
          })
        );
        setTableData(preparedData);
        setLoading(false);
        setError('');
      })
      .catch(error => {
        console.log(error);
        setTableData([]);
        setLoading(false);
        setError(error.message)
      })
  }, []);

  return {data: tableData, loading, error};
};

export default useTableStatisticData;