import Vue from "vue";
import Router from "vue-router";
import { authGuard } from "../auth/index";
import Home from "../views/Home";
import About from "../views/About";

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "home",
            component: Home,
            beforeEnter: authGuard
        },
        {
            path: "/about",
            name: "about",
            component: About,
            beforeEnter: authGuard
        }
    ]
})

