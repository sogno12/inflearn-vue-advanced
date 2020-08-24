import Vue from 'vue';
import VueRouter from 'vue-router';
import ItemView from '../views/ItemView.vue';
import UserView from '../views/UserView.vue';
import createListView from '../views/CreateListView';


Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes : [
        {
            path: '/',
            redirect: '/news'
        },
        {
            // path : url 주소
            path: '/news',
            name: 'news',
            // component : url 주소로 갔을 때 표시될 컴포넌트
            // component: NewsView,
            component: createListView('Newsview'),
        },
        {
            path: '/jobs',
            name: 'jobs',
            // component: JobsView,
            component: createListView('Jobsview'),
        },
        {
            path: '/ask',
            name: 'ask',
            //component: AskView,
            component: createListView('Askview'),
        },
        {
            path: '/item/:id',
            component: ItemView,
        },
        {
            path: '/user/:id',
            component: UserView,
        },
        
    ]
})