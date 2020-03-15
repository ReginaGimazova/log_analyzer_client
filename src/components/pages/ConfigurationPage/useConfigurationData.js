const useConfigurationData = () => {
  const configuration = {
    config: [
      {
        id: 0,
        value: "removing tmp table",
        active: true
      },
      {
        id: 1,
        value: "rolling back",
        active: false
      },
      {
        id: 2,
        value: "rename result table",
        active: false
      },
      {
        id: 3,
        value: "opening tables",
        active: true
      }
    ]
  };

  return { data: configuration.config };
};

export default useConfigurationData;
