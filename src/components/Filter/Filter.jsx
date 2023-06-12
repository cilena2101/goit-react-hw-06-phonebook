import PropTypes from "prop-types";

export const Filter = ({ filter, changeFilterInput }) => (
  <label>
    Find contacts by name
    <input type="text" name={filter} onChange={changeFilterInput} />
  </label>
);

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  changeFilterInput: PropTypes.func.isRequired,
};