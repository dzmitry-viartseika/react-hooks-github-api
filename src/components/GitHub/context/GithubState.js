import React, { useReducer } from 'react';
import { GitHubContext } from './GithubContext';
import {githubReducer} from "./GitHubReducer";
import {CLEAR_USERS, GET_REPOS, GET_USER, SEARCH_USERS, SET_LOADING} from "../../../constants/types/types";

console.log(process.env.REACT_APP_CLIENT_ID)

export const GithubState = ({children}) => {
    const initialState = {
        user: {},
        users: [],
        loading: false,
        repos: []
    }
    const [state, dispatch] = useReducer(githubReducer, initialState);

    const search = async value => {
        setLoading()
        dispatch({
            type: SEARCH_USERS,
            payload: []
        })
    }

    const getUserById = async name => {
        setLoading()
        dispatch({
            type: GET_USER,
            payload: {}
        })
    }

    const getRepos = async name => {
        setLoading()
        dispatch({
            type: GET_REPOS,
            payload: []
        })
    }

    const clearUsers = () => dispatch({type: CLEAR_USERS});
    const setLoading = () => dispatch({type: SET_LOADING});

    const {user, users, repos, loading} = state;

    return (
        <GitHubContext.Provider value={{
            setLoading,
            search,
            getRepos,
            getUserById,
            clearUsers,
            user,
            users,
            repos,
            loading
        }}>
            {children}
        </GitHubContext.Provider>
    )
}
