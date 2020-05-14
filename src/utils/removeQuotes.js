const removeQuotes = text => {
  if (text) {
    return text.replace(/`/g, "");
  }
  return text;
};

export default removeQuotes;
