// Actions types
const FETCH_USERS = 'FETCH_USERS';

// Initial state
const initialState = {
    users: []
};

// Actions
export const fetchUsers = () => async (dispatch) => {
    
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await res.json();
        dispatch({
            type: FETCH_USERS,
            payload: {
                users
            }
        });
    } catch (e) {
        throw new Error(e);
    }

    // type: FETCH_USERS,
    // payload: {
    //     users
    // }
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
