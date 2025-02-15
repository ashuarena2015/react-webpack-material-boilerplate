import axiosInstance from '../axios';
import { globalSnackbarMessage } from './global';

// Actions types
const FETCH_USERS = 'FETCH_USERS';

// Initial state
const initialState = {
    users: []
};

// Actions
export const fetchUsers = () => async (dispatch) => {
    
    try {
        const res = await axiosInstance.get('/users');
        console.log({res});
        dispatch({
            type: FETCH_USERS,
            payload: {
                users: res?.data
            }
        });
        dispatch(globalSnackbarMessage({
            message: 'Successfully fetched the users data', 
            msgType: 'success'
        }));
    } catch (e) {
        console.log('error users');
        dispatch(globalSnackbarMessage({
            message: 'Something went wrong', 
            msgType: 'error'
        }));
        // throw new Error(e);
    }
};

// Reducer

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS:
            return {
                ...state,
                users: action.payload.users
            }
        default:
            return state;
    }
}

export default usersReducer;
