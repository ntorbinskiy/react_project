import { useState } from "react";
import "./search-panel.css";

const SearchPanel = (props) => {
  const [term, setTerm] = useState("");

  const UpdateSearch = (e) => {
    const term = e.target.value;
    setTerm(term);
    props.onUpdateSearch(term);
  }

  return (
    <input
      type="text"
      className="form-control  search-input"
      placeholder="Найти сотрудника"
      value={term}
      onChange={UpdateSearch}
    />
  );
}

export default SearchPanel;
