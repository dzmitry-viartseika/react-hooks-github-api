import React from 'react';
import Search from '../components/Search/Search'
import Card from '../components/Card/Card'

const Home = () => {

    return (
        <>
            <Search />
            <div className={'row'}>
                <div className={'col-sm4 mb-4'}>
                    <Card />
                </div>
                <div className={'col-sm4 mb-4'}>
                    <Card />
                </div>
                <div className={'col-sm4 mb-4'}>
                    <Card />
                </div>
            </div>
        </>
    )
}

export default Home;
