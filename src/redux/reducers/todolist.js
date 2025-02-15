import { globalSnackbarMessage } from './global';
// Action Types
const ADD_TASK = 'ADD_TASK';
const DELETE_TASK = 'DELETE_TASK';
const COMPLETE_TASK = 'COMPLETE_TASK';

// Action Creators
let id = 1;
export const addTask = (task) => (dispatch) => {
    dispatch({
        type: ADD_TASK,
        payload: {
            id: id++,
            title: task,
            status: false,
            date: new Date().toLocaleString()
        }
    });
    dispatch(globalSnackbarMessage({
        message: 'A new task added successfully!',
        msgType: 'success'
    }))
};

export const deleteTask = (id) => ({
    type: DELETE_TASK,
    payload: {
        id
    }
});

export const completeTask = (id) => ({
    type: COMPLETE_TASK,
    payload: {
        id
    }
});

// Reducer

const initialState = {
    tasks: []
}

const todoListReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            }
        case DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.payload.id)
            }
        case COMPLETE_TASK:
            return {
                ...state,
                tasks: state.tasks.map(task => {
                    if (task.id === action.payload.id) {
                        return {
                            ...task,
                            status: !task.status
                        }
                    }
                    return task;
                })
            }
        default:
            return state;
    }
}

export default todoListReducer;
