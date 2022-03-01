import loginStyle from "./login.module.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../../services/actions/login";

function Login({ onClose }) {
  const dispatch = useDispatch();
  const [name, setName] = React.useState(null);
  const [password, setPassword] = React.useState(null);

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginAction(name, password));
    if (name && password) {
      onClose();
    }
  };

  const { login } = useSelector((state) => state.loginReducer);

  return (
    <section className={loginStyle.container}>
      <p className={loginStyle.title}>Войти</p>
      <form className={loginStyle.loginForm}>
        <label className={loginStyle.label}>
          Email
          <input
            className={loginStyle.input}
            type="text"
            required
            placeholder="Введите логин"
            value={name || ""}
            onChange={handleChangeName}
          ></input>
        </label>
        <label className={loginStyle.label}>
          Пароль
          <input
            className={loginStyle.input}
            type="password"
            required
            placeholder="Введите email адрес"
            value={password || ""}
            onChange={handleChangePassword}
          ></input>
        </label>
        <button
          className={loginStyle.button}
          type="submit"
          onClick={handleSubmit}
        >
          Войти
        </button>
      </form>
    </section>
  );
}

export default Login;
