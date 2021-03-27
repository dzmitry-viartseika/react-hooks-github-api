import React, { useContext, useState } from 'react';
import { AlertContext }  from "../Alert/context/AlertContext";
import gitHubApi from '../../api/gitHubApi/api';

const Search = () => {
    const { show } = useContext(AlertContext);
    const [value, setValue] = useState('');

    const onSubmit = async event => {
        if (event.key !== 'Enter') {
            return
        }

        if (value.trim()) {
            try {
                // this.setState({
                //     isLoader: true
                // })
                const { data } = await gitHubApi.searchUser(value);
                const quiz = data;

                // this.setState({
                //     isLoader: false,
                //     quiz,
                // })
            } catch (err) {
                // this.setState({
                //     isLoader: false
                // })
                console.error(err);
            }
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
