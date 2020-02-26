import {useEffect, useState} from "react";
import axios from 'axios';

const useTableStatisticData = () => {
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);

    if (tableData.length === 0 && !error){
      axios
        .get('http://localhost:5000/tables')
        .then(({data}) => {
          const preparedData = data.map((value ) =>
            ({
              name: value.table_name,
              call_count: value.call_count
            })
          );
          setTableData(preparedData);
          setError('');
          setLoading(false);
        })
        .catch(error => {
          setTableData([]);
          setError(error.message);
          setLoading(false);
        })
    }
  }, [tableData, error]);

  return {data: tableData, loading, error};
};

export default useTableStatisticData;