import About from '../pages/About';
import Home from '../pages/Home';
import Profile from '../pages/Profile';

const routes = {
    home: {
        id: 1,
        url: '/',
        component: Home,
    },
    about: {
        id: 2,
        url: '/about',
        component: About
    },
    profile: {
        id: 3,
        url: '/profile/:name',
        component: Profile
    },
}

export default routes;
