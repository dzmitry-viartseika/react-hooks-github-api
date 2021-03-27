import React, { useReducer } from 'react';
import { GitHubContext } from './GithubContext';
import {githubReducer} from "./GitHubReducer";
import {CLEAR_USERS, GET_REPOS, GET_USER, SEARCH_USERS, SET_LOADING} from "../../../constants/types/types";
import gitHubApi from "../../../api/gitHubApi/api";

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
        try {
            const { data } = await gitHubApi.searchUser(value);

            dispatch({
                type: SEARCH_USERS,
                payload: data.items
            })
        } catch (err) {
            console.error(err);
        }
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

    console.log('users', users);

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
