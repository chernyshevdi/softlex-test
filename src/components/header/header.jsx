import headerStyle from "./header.module.css";

function Header({ onOpen, onOpenLogin }) {
  let token = localStorage.getItem("admin");

  return (
    <section className={headerStyle.container}>
      <button className={headerStyle.button} onClick={onOpen}>
        Добавить задачу
      </button>
      {token ? (
        <p>Admin</p>
      ) : (
        <button className={headerStyle.button} onClick={onOpenLogin}>
          Войти
        </button>
      )}
    </section>
  );
}

export default Header;
