import Vue from "vue";
import VueRouter from "vue-router"; //https://router.vuejs.org/guide/

import mainPage from "@/views/mainPage";
import page1 from "@/views/page1";
import page2_3 from "@/views/page2_3";

Vue.use(VueRouter);

const router = new VueRouter({  //https://router.vuejs.org/api/
    mode: "history",
    base: "/",
    linkActiveClass: "router-link-active",
    linkExactActiveClass: "router-link-exact-active",
    //scrollBehavior
    //parseQuery/stringifyQuery
    fallback: true,
    routes: [
        {
            path: "/",
            name: "main",
            component: mainPage,
            /*components?: { [name: string]: Component }, // for named views
              redirect?: string | Location | Function,
              props?: boolean | Object | Function,
              alias?: string | Array<string>,*/
              children: [
                  {
                      path: "page1",
                      name: "page1",
                      component: page1
                  },
                  {
                      path: "page2_3",
                      name: "page2_3",
                      component: page2_3
                  }
              ] // for nested routes
              /*beforeEnter?: (to: Route, from: Route, next: Function) => void,
              meta?: any,
              // 2.6.0+
              caseSensitive?: boolean, // use case sensitive match? (default: false)
              pathToRegexpOptions?: Object // path-to-regexp options for compiling regex
             */
        }
    ]
});

export default router;
