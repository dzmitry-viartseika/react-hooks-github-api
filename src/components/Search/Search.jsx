import React, { useContext } from 'react';
import {AlertContext} from "../Alert/context/AlertContext";

const Search = () => {

    const { show } = useContext(AlertContext);

    const onSubmit = event => {
        if (event.key === 'Enter') {
            console.log('show')
            show('this is alert')
        }
    }

    return (
        <div className={'form-group'}>
            <input
                type="text"
                className={'form-control'}
                placeholder={'Введите ник пользователя...'}
                onKeyPress={onSubmit}
            />
        </div>
    )
};

export default Search;
