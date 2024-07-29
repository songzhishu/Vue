//路由组件

//导入组件
import Vue from 'vue';
import VueRouter from 'vue-router'

/* import My from '../views/My.vue'
import Friend from '../views/Friend.vue'
import Find from '../views/Find.vue'; */


/* @相当于src */
import My from '@/views/My.vue'
import Friend from '@/views/Friend.vue'
import Find from '@/views/Find.vue';

Vue.use(VueRouter)


const router = new VueRouter({
    routes: [
        { path: '/my', component: My },
        { path: '/friend', component: Friend },
        { path: '/find', component: Find },
    ]
})


export default router