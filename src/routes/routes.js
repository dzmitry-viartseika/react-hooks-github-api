import About from '../pages/About';
import Home from '../pages/Home';
import Profile from '../pages/Profile';

const routes = {
    home: {
        url: '/',
        component: Home,
    },
    about: {
        url: '/about',
        component: About
    },
    profile: {
        url: '/profile',
        component: Profile
    },
}

export default routes;
