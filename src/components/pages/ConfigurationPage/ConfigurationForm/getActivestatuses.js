// TODO: rename
// use reduce

const getActiveStatuses = ({ statuses }) =>
  statuses.filter(status => status.status === 1);

export default getActiveStatuses;
