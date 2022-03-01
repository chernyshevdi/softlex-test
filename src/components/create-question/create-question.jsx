import React from "react";
import { useDispatch } from "react-redux";
import createQestionStyle from "./create-question.module.css";
import { createTaskAction } from "../../services/actions/question";

function CreateQestion({ onClose, isCreate }) {
  const dispatch = useDispatch();
  const [name, setName] = React.useState(null);
  const [email, setEmail] = React.useState(null);
  const [text, setText] = React.useState(null);

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeText(e) {
    setText(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createTaskAction(name, email, text));
    isCreate(true);
    if (name && email && text) {
      onClose();
    }
  };

  return (
    <div>
      <p className={createQestionStyle.title}>Создать задачу</p>
      <form className={createQestionStyle.modalForm}>
        <label className={createQestionStyle.modalForm__label}>
          Имя пользователя
          <input
            className={createQestionStyle.modalInput}
            type="text"
            required
            placeholder="Введите имя пользователя"
            value={name || ""}
            onChange={handleChangeName}
          ></input>
        </label>
        <label className={createQestionStyle.modalForm__label}>
          Email-адрес
          <input
            className={createQestionStyle.modalInput}
            type="email"
            required
            placeholder="Введите email"
            value={email || ""}
            onChange={handleChangeEmail}
          ></input>
        </label>
        <label className={createQestionStyle.modalForm__label}>
          Текст задачи
          <input
            className={createQestionStyle.modalInput}
            type="text"
            required
            placeholder="Введите текст задачи"
            value={text || ""}
            onChange={handleChangeText}
          ></input>
        </label>
        <button
          className={createQestionStyle.button}
          type="submit"
          onClick={handleSubmit}
        >
          Принять
        </button>
      </form>
    </div>
  );
}

export default CreateQestion;
