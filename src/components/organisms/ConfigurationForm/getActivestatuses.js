// TODO: rename
// use reduce

const getActiveStatuses = ({ statuses }) =>
  statuses.filter(status => status.mode === 1);

export default getActiveStatuses;
