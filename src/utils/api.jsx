import { baseUrl, checkResponse } from "./constants";

function getTasks(page, sort, direction) {
  return fetch(
    baseUrl +
      `?developer=Dmitrii&page=${page}&sort_field=${sort}&sort_direction=${direction}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  ).then(checkResponse);
}

function createTask(username, email, text) {
  const formData = new FormData();

  formData.append("username", username);
  formData.append("email", email);
  formData.append("text", text);

  return fetch(`${baseUrl}create?developer=Dmitrii`, {
    method: "POST",
    body: formData,
  }).then(checkResponse);
}

const login = (name, password) => {
  const formData = new FormData();

  formData.append("username", name);
  formData.append("password", password);

  return fetch(`${baseUrl}login?developer=Dmitrii`, {
    method: "POST",
    body: formData,
  }).then(checkResponse);
};

const editTask = (token, id, text, status) => {
  const formData = new FormData();

  formData.append("token", token);
  formData.append("text", text);
  formData.append("status", status);

  return fetch(`${baseUrl}edit/${id}?developer=Dmitrii`, {
    method: "POST",
    body: formData,
  }).then(checkResponse);
};

export { getTasks, createTask, login, editTask };
