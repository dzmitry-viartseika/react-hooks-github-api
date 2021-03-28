import React, { useContext, useState, useReducer } from 'react';
import { AlertContext }  from "../Alert/context/AlertContext";
import { GitHubContext } from "../GitHub/context/GithubContext";
import AlertReducer from "../Alert/context/AlertReducer";

const Search = () => {
    const { show, hide } = useContext(AlertContext);
    const [state, dispatch] = useReducer(AlertReducer, null)
    const [value, setValue] = useState('');
    const github = useContext(GitHubContext)

    const onSubmit = async event => {
        if (event.key !== 'Enter') {
            return
        }

        github.clearUsers();

        if (value.trim()) {
            hide()
            github.search(value.trim());
        } else {
            show('Введите данные пользователя')
        }
    }

    return (
        <div className={'form-group'}>
            <input
                type="text"
                className={'form-control'}
                placeholder={'Введите ник пользователя...'}
                value={value}
                onKeyPress={onSubmit}
                onChange={event => setValue(event.target.value)}
            />
        </div>
    )
};

export default Search;
