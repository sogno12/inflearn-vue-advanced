import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
import ItemView from '../views/ItemView.vue';
import UserView from '../views/UserView.vue';
import bus from '../utils/bus.js';
import { store } from '../store/index.js';


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
            component: NewsView,
            beforeEnter: (to, from, next)=> {
                // console.log('to', to);
                // console.log('from',from);
                // console.log(next);

                bus.$emit('start:spinner');
                setTimeout(() => {
                    // 실행순서 #1.
                    store.dispatch('FETCH_LIST', to.name)
                        .then(() => {
                            // 실행순서 #5.
                            console.log('5. fetched');
                            bus.$emit('end:spinner');
                            next(); // 실행함수이므로 넣지않으면 실행되지 않음
                        })
                        .catch((error) => {
                            console.log(error)
                        });
                }, 1000)

            }
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: JobsView,
            beforeEnter: (to, from, next) => {
                bus.$emit('start:spinner');
                setTimeout(() => {
                    // 실행순서 #1.
                    store.dispatch('FETCH_LIST', to.name)
                        .then(() => {
                            // 실행순서 #5.
                            console.log('5. fetched');
                            // bus.$emit('end:spinner');
                            next(); // 실행함수이므로 넣지않으면 실행되지 않음
                        })
                        .catch((error) => {
                            console.log(error)
                        });
                }, 1000)
            }
        },
        {
            path: '/ask',
            name: 'ask',
            component: AskView,
            beforeEnter: (to, from, next) => {
                bus.$emit('start:spinner');
                setTimeout(() => {
                    // 실행순서 #1.
                    store.dispatch('FETCH_LIST', to.name)
                        .then(() => {
                            // 실행순서 #5.
                            console.log('5. fetched');
                            // bus.$emit('end:spinner');
                            next(); // 실행함수이므로 넣지않으면 실행되지 않음
                        })
                        .catch((error) => {
                            console.log(error)
                        });
                }, 1000)
            }
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