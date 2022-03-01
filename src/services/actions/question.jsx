import { createTask, getTasks, editTask } from "../../utils/api";

export const GET_TASKS_REQUEST = "GET_TASKS_REQUEST";
export const GET_TASKS_SUCCESS = "GET_TASKS_SUCCESS";
export const GET_TASKS_FAILED = "GET_TASKS_FAILED";

export const CREATE_TASK_REQUEST = "CREATE_TASK_REQUEST";
export const CREATE_TASK_SUCCESS = "CREATE_TASK_SUCCESS";
export const CREATE_TASK_FAILED = "CREATE_TASK_FAILED";

export const EDIT_TASK_REQUEST = "EDIT_TASK_REQUEST";
export const EDIT_TASK_SUCCESS = "EDIT_TASK_SUCCESS";
export const EDIT_TASK_FAILED = "EDIT_TASK_FAILED";

export function getTasksAction(page, sort, direction) {
  return function (dispatch) {
    dispatch({
      type: GET_TASKS_REQUEST,
    });
    getTasks(page, sort, direction)
      .then((res) => {
        if (res.status) {
          dispatch({
            type: GET_TASKS_SUCCESS,
            tasks: res.message.tasks,
            totalTasks: res.message.total_task_count,
          });
        } else {
          dispatch({
            type: GET_TASKS_FAILED,
          });
        }
      })
      .catch((err) => {
        dispatch({
          type: GET_TASKS_FAILED,
        });
        console.log(err);
      });
  };
}

export function createTaskAction(username, email, text) {
  return function (dispatch) {
    dispatch({
      type: CREATE_TASK_REQUEST,
    });
    createTask(username, email, text)
      .then((res) => {
        if (res.status) {
          dispatch({
            type: CREATE_TASK_SUCCESS,
            createdTask: res.message,
          });
        } else {
          dispatch({
            type: CREATE_TASK_FAILED,
          });
        }
      })
      .catch((err) => {
        dispatch({
          type: CREATE_TASK_FAILED,
        });
        console.log(err);
      });
  };
}

export function editTaskAction(token, id, text, status) {
  return function (dispatch) {
    dispatch({
      type: EDIT_TASK_REQUEST,
    });
    editTask(token, id, text, status)
      .then((res) => {
        if (res.status) {
          dispatch({
            type: EDIT_TASK_SUCCESS,
          });
        } else {
          dispatch({
            type: EDIT_TASK_FAILED,
          });
        }
      })
      .catch((err) => {
        dispatch({
          type: EDIT_TASK_FAILED,
        });
        console.log(err);
      });
  };
}
