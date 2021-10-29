import {usersAPI} from "../api/api";

const ADD_USER = 'ADD_USER';
const DELETE_USER = 'DELETE_USER';
const UPDATE_NEW_USER_NAME = 'UPDATE_NEW_USER_NAME';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [],
    newUserName: '',
}

const employeesReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_USER_NAME: {
            return {
                ...state,
                newUserName: action.text
            }
        }

        case SET_USERS: {
            return {
                ...state,
                users: action.users
            }
        }

        case DELETE_USER: {
            return {
                ...state,
                users: state.users.filter(u => {
                    return u.id !== action.userId
                })
            }
        }

        case ADD_USER: {
            if (state.newUserName === '') {
                return {...state}
            }
            let newUser = [{id: state.users.length + 1, first_name: state.newUserName}];
            return {
                ...state,
                newUserName: '',
                users: [...state.users, ...newUser],
            }
        }

        default:
            return state;
    }

    return state;
}


export const updateNewUserNameActionCreator = (text) => ({type: UPDATE_NEW_USER_NAME, text});
export const setUsersActionCreator = (users) => ({type: SET_USERS, users});
export const onDeleteUser = (userId) => ({type: DELETE_USER, userId});
export const addUserActionCreator = () => ({type: ADD_USER});

export const getUsers = () => {
    return (dispatch) => {
        usersAPI.getUsers().then(data => {
                dispatch(setUsersActionCreator(data.data));
            }
        )
    }
}


export default employeesReducer;