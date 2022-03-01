import {
  GET_TASKS_REQUEST,
  GET_TASKS_SUCCESS,
  GET_TASKS_FAILED,
  CREATE_TASK_REQUEST,
  CREATE_TASK_SUCCESS,
  CREATE_TASK_FAILED,
  EDIT_TASK_REQUEST,
  EDIT_TASK_SUCCESS,
  EDIT_TASK_FAILED,
} from "../actions/question";

const initialState = {
  getTaskRequest: false,
  getTaskFailed: false,
  createTaskRequest: false,
  createTaskFailed: false,
  editTaskRequest: false,
  editTaskFailed: false,
  tasks: [],
  totalTasks: {},
  createdTask: {},
};

export const constructorReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TASKS_REQUEST: {
      return {
        ...state,
        getTaskRequest: true,
      };
    }

    case GET_TASKS_SUCCESS: {
      return {
        ...state,
        getTaskRequest: false,
        getTaskFailed: false,
        tasks: action.tasks,
        totalTasks: action.totalTasks,
      };
    }

    case GET_TASKS_FAILED: {
      return {
        ...initialState,
        getTaskRequest: false,
        getTaskFailed: true,
      };
    }

    case CREATE_TASK_REQUEST: {
      return {
        ...state,
        createTaskRequest: true,
      };
    }

    case CREATE_TASK_SUCCESS: {
      return {
        ...state,
        createTaskRequest: false,
        createTaskFailed: false,
        createdTask: action.createdTask,
      };
    }

    case CREATE_TASK_FAILED: {
      return {
        ...initialState,
        createTaskRequest: false,
        createTaskFailed: true,
      };
    }

    case EDIT_TASK_REQUEST: {
      return {
        ...state,
        editTaskRequest: true,
      };
    }

    case EDIT_TASK_SUCCESS: {
      return {
        ...state,
        editTaskRequest: false,
        editTaskFailed: false,
      };
    }

    case EDIT_TASK_FAILED: {
      return {
        ...initialState,
        editTaskRequest: false,
        editTaskFailed: true,
      };
    }

    default: {
      return state;
    }
  }
};
