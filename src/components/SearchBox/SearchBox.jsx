import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";

import css from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectNameFilter);

  const onFilterChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };
  return (
    <div className={css.searchForm}>
      <h2 className={css.searchTitle}>Find contacts by name</h2>
      <input
        className={css.searchInput}
        type="text"
        placeholder="Search..."
        value={filters}
        onChange={onFilterChange}
      />
    </div>
  );
};

export default SearchBox;
