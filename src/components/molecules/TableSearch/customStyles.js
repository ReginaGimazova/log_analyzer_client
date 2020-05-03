import { darken } from "polished";

const selectCustomStyles = {
  option: (provided, { isSelected }) => ({
    ...provided,
    color: "#000",
    padding: "1.25rem",
    backgroundColor: isSelected ? darken(0.05, "#fff") : "#fff"
  }),
  control: () => ({
    display: "flex",
    padding: "0.45rem",
    borderRadius: "0.1875rem",
    border: `0.0625rem solid ${darken(0.3, "#fff")}`
  }),
  multiValueLabel: () => ({
    fontSize: "100%",
    padding: "0.25rem"
  })
};

export default selectCustomStyles;
