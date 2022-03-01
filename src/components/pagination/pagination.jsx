import paginationStyle from "./pagination.module.css";

function Pagination({ value, onPage }) {
  function handleClick() {
    onPage(value);
  }

  return (
    <div className={paginationStyle.container} onClick={handleClick}>
      {value}
    </div>
  );
}

export default Pagination;
