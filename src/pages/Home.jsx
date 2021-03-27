import React, {Fragment, useContext } from 'react';
import Search from '../components/Search/Search'
import Card from '../components/Card/Card'
import {GitHubContext} from "../components/GitHub/context/GithubContext";

export const Home = () => {
    const {loading, users} = useContext(GitHubContext)


    return (
        <Fragment>
            <Search />

            <div className="row">

                {loading
                    ? <p className="text-center">Загрузка...</p>
                    : users.map(user => (
                        <div className="col-sm-4 mb-4" key={user.id}>
                            <Card user={user} />
                        </div>
                    ))
                }

            </div>

        </Fragment>
    )
}


export default Home;
