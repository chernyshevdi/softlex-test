import questionStyle from "./question.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { editTaskAction } from "../../services/actions/question";

function Question({ name, email, text, id, status, refreshTasks }) {
  const [isName, setIsName] = useState("");
  const [isEmail, setIsEmail] = useState("");
  const [isText, setIsText] = useState("");
  const [isChange, setIsChange] = useState(false);
  const dispatch = useDispatch();
  let token = localStorage.getItem("admin");
  const [isChangeStatus, setIsChangeStatus] = useState(status);

  function handleChangeEmail(e) {
    setIsEmail(e.target.value);
  }

  function handleChangeName(e) {
    setIsName(e.target.value);
  }

  function handleChangeText(e) {
    setIsText(e.target.value);
  }

  useEffect(() => {
    setIsName(name);
    setIsEmail(email);
    setIsText(text);
  }, [name, email, text]);

  useEffect(() => {
    if (name && isName) {
      if (name !== isName || email !== isEmail || text !== isText) {
        setIsChange(true);
      } else {
        setIsChange(false);
      }
    }
  }, [isName, isEmail, isText]);

  const handeClick = (e) => {
    e.preventDefault();
    dispatch(editTaskAction(token, id, isText, isChangeStatus));
    setIsChange(false);
  };

  useEffect(() => {
    dispatch(editTaskAction(token, id, isText, isChangeStatus));
  }, [isChangeStatus]);

  function handleChangeStatusSuccess(e) {
    e.preventDefault(e);
    setIsChangeStatus(11);
    refreshTasks(true);
  }

  function handleChangeStatusFailed(e) {
    e.preventDefault(e);
    setIsChangeStatus(1);
    refreshTasks(true);
  }

  useEffect(() => {
    status = isChangeStatus;
  }, [isChangeStatus]);

  return (
    <section className={questionStyle.container}>
      <div className={questionStyle.head}>
        <input
          type="text"
          value={isName}
          className={questionStyle.input__name}
          onChange={handleChangeName}
          disabled
        ></input>
        <input
          type="email"
          value={isEmail}
          className={questionStyle.input__email}
          onChange={handleChangeEmail}
          disabled
        ></input>
      </div>
      <textarea
        value={isText}
        className={questionStyle.input__text}
        onChange={handleChangeText}
        disabled={!token}
      ></textarea>
      <div
        className={
          isChange ? questionStyle.changeData_active : questionStyle.changeData
        }
      >
        <button className={questionStyle.button} onClick={handeClick}>
          Сохранить
        </button>
      </div>
      <div className={questionStyle.status}>
        <label>
          {" "}
          Выполнено
          <input
            type="checkbox"
            checked={status === 10 || status === 11}
            readOnly
          ></input>
        </label>
        <span
          className={
            status === 1 || status === 11
              ? questionStyle.edit_active
              : questionStyle.edit
          }
        >
          редактировалось
        </span>
      </div>
      <div
        className={
          token
            ? questionStyle.changeStatus__active
            : questionStyle.changeStatus
        }
      >
        <button
          className={questionStyle.changeStatus__button}
          onClick={handleChangeStatusFailed}
        >
          задача не выполнена
        </button>
        <button
          className={questionStyle.changeStatus__button}
          onClick={handleChangeStatusSuccess}
        >
          задача выполнена
        </button>
      </div>
    </section>
  );
}

export default Question;
