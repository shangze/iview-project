import index from "./views/index.vue"
import grid from "./views/grid.vue"
import test from "./views/test.vue"

const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

const routers = [
	{ path: '/', redirect: '/index' },
    {
        path: '/index',
        meta: {
            title: '首页'
        },
        component: test
    },
    { path: '/grid', component: grid },
    { path: '/foo', component: Foo },
  	{ path: '/bar', component: Bar }
];
export default routers;