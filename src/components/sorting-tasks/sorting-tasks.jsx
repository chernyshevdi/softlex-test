import { useEffect, useState } from "react";
import sortingTasksStyle from "./sorting-tasks.module.css";

function SortTasks({ sortItem, direction, directionValue }) {
  function handeIdClick(e) {
    e.preventDefault();
    sortItem("id");
  }

  function handelUsernameClick(e) {
    e.preventDefault();
    sortItem("username");
  }

  function handleEmailClick(e) {
    e.preventDefault();
    sortItem("email");
  }

  function handeStatusClick(e) {
    e.preventDefault();
    sortItem("status");
  }

  function handeSortDirectionClick(e) {
    e.preventDefault();
    direction(directionValue);
  }

  return (
    <div className={sortingTasksStyle.container}>
      <button className={sortingTasksStyle.button} onClick={handeIdClick}>
        id
      </button>
      <button
        className={sortingTasksStyle.button}
        onClick={handelUsernameClick}
      >
        username
      </button>
      <button className={sortingTasksStyle.button} onClick={handleEmailClick}>
        email
      </button>
      <button className={sortingTasksStyle.button} onClick={handeStatusClick}>
        status
      </button>
      <button
        className={sortingTasksStyle.button}
        onClick={handeSortDirectionClick}
      >
        &#8645;
      </button>
    </div>
  );
}

export default SortTasks;
