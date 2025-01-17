import s from "./SearchBox.module.css";

const SearchBox = ({ searchParam, handleSearch }) => {
  return (
    <label className={s.searchLabel}>
      <span>Find contacts by name </span>
      <input
        type="text"
        className={s.searchInput}
        value={searchParam}
        onChange={(evt) => handleSearch(evt.target.value)}
      />
    </label>
  );
};

export default SearchBox;
