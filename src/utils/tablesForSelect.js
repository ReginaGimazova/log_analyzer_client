const tablesForSelect = tables => {
  if (!tables.length) {
    return [];
  }

  return tables.map(({ table_name: tableName, id }) => {
    return {
      value: id,
      label: tableName
    };
  });
};

export default tablesForSelect;
