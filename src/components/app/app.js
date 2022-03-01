import appStyle from "./app.module.css";
import React, { useState } from "react";
import Question from "../question/question";
import { useEffect } from "react";
import { getTasksAction } from "../../services/actions/question";
import { useDispatch, useSelector } from "react-redux";
import Header from "../header/header";
import Modal from "../modal/modal";
import CreateQestion from "../create-question/create-question";
import Login from "../login/login";
import Pagination from "../pagination/pagination";
import SortTasks from "../sorting-tasks/sorting-tasks";

function App() {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = React.useState(false);
  const { totalTasks } = useSelector((state) => state.constructorReducer);
  const { tasks } = useSelector((state) => state.constructorReducer);
  const [isPages, setIsPages] = React.useState([]);
  const [choosePage, setChoosePage] = React.useState(1);
  const [modalPage, setModalPage] = React.useState(false);
  const [sortTasks, setSortTasks] = React.useState("id");
  const [sortTasksDirection, setSortTasksDirection] = React.useState("desc");
  const [isRefreshStatus, setIsRefreshStatus] = React.useState(false);
  const [isCreateTask, setIsCreateTask] = React.useState(false);

  function openModal() {
    setIsModalOpen(true);
  }

  function openLoginModal() {
    setIsLoginModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
    setIsLoginModalOpen(false);
    setModalPage(false);
    setIsCreateTask(false);
  }

  useEffect(() => {
    let total = Math.ceil(Number(totalTasks) / 3);
    setIsPages([]);
    for (let i = 1; i <= total; i++) {
      setIsPages((isPages) => [...isPages, i]);
    }
  }, [totalTasks]);

  const pageNumber = (item) => {
    setChoosePage(item);
  };

  const sorting = (item) => {
    setSortTasks(item);
  };

  const sortDirection = (item) => {
    if (item === "desc") {
      setSortTasksDirection("asc");
    } else {
      setSortTasksDirection("desc");
    }
  };

  useEffect(() => {
    dispatch(getTasksAction(choosePage, sortTasks, sortTasksDirection));
    setModalPage(true);
    setIsRefreshStatus(false);
  }, [
    dispatch,
    choosePage,
    modalPage,
    sortTasks,
    sortTasksDirection,
    isRefreshStatus,
    isCreateTask,
  ]);

  const statusTasks = (item) => {
    setIsRefreshStatus(item);
  };

  const createTask = (item) => {
    setIsCreateTask(item);
  };

  return (
    <div className={appStyle.page}>
      <Header onOpen={openModal} onOpenLogin={openLoginModal} />
      <div className={appStyle.sorting}>
        <p className={appStyle.sorting__title}>Сортировать</p>
        <SortTasks
          sortItem={sorting}
          direction={sortDirection}
          directionValue={sortTasksDirection}
        />
      </div>
      <div>
        {tasks.map((item, index) => {
          return (
            <Question
              name={item.username}
              email={item.email}
              text={item.text}
              status={item.status}
              id={item.id}
              key={index}
              status={item.status}
              refreshTasks={statusTasks}
            />
          );
        })}
      </div>
      <div className={appStyle.pagination}>
        {isPages.map((item, index) => {
          return <Pagination value={item} key={index} onPage={pageNumber} />;
        })}
      </div>

      <Modal onOpen={isModalOpen} onClose={closeModal}>
        <CreateQestion onClose={closeModal} isCreate={createTask} />
      </Modal>

      <Modal onOpen={isLoginModalOpen} onClose={closeModal}>
        <Login onClose={closeModal} />
      </Modal>
    </div>
  );
}

export default App;
