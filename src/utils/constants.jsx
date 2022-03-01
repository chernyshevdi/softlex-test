const baseUrl = "https://uxcandy.com/~shapoval/test-task-backend/v2/";
const modalRoot = document.getElementById("modals");

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Ошибка: ${res.status}`);
  }
}

export { baseUrl, checkResponse, modalRoot };
