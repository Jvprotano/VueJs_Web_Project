import Vue from 'vue';
import Router from 'vue-router';
import Home from './pages/Home';
import InfoCourse from './pages/InfoCourse';
import CourseInstructor from './pages/CourseInstructor';
import HistoryFinancial from './pages/HistoryFinancial';
import MySales from './pages/MySales';
import listCourse from './pages/listCourse';
import Embed from 'v-video-embed'

// global register
Vue.use(Embed);

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [

        {
            path: '/',
            component: Home,
        },
        {
            path: '/courseInstructor',
            component: CourseInstructor,
        },
        {
            name: 'infoCourse',
            path: '/infoCourse/:id',
            component: InfoCourse,
        },
        {
            path: '/historyFinancial',
            component: HistoryFinancial,
        },
        {
            path: '/mySales',
            component: MySales,            
        },
        {
            name: 'listCourse',
            path: '/listCourse/:id',
            component: listCourse,
        },
    ]
});

export default router;