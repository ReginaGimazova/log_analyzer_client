import useFetchQueries from "../../../hooks/useFetchQueries";

const useOriginDumpAnalyzeData = (byHost = false, chosenTables = []) => {
  const { queriesData, loading, error, getQueries } = useFetchQueries({
    tables: chosenTables,
    byHost
  });

  const defaultData = {
    page: 1,
    pageCount: undefined,
    queries: []
  };

  return {
    data: queriesData || defaultData,
    loading,
    error,
    getQueries
  };
};

export default useOriginDumpAnalyzeData;
