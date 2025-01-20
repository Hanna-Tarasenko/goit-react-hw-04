import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import s from "./SearchBar.module.css";
const SearchBar = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (evt) => {
    setInputValue(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (inputValue.trim() === "") {
      toast.error("Please fill in a search query!");
      return;
    }
    onSubmit(inputValue);
    setInputValue("");
  };

  return (
    <header>
      <form className={s.searchForm} onSubmit={handleSubmit}>
        <input
          value={inputValue}
          onChange={handleInputChange}
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
          className={s.searchInput}
        />
        <button className={s.searchBtn} type="submit">
          Search
        </button>
      </form>
      <Toaster />
    </header>
  );
};

export default SearchBar;
