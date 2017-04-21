import index from "./views/index.vue"
import grid from "./views/grid.vue"
import form from "./views/form.vue"
import ceshi from "./views/ceshi.vue"
import echarts from './views/charts/echarts.vue'

const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

const routers = [
	{ path: '/', redirect: '/index' },
    {
        path: '/index',
        meta: {
            title: '首页'
        },
        component: form
    },
    { path: '/ceshi', component: ceshi },
    { path: '/grid', component: grid },
    { path: '/foo', component: Foo },
    { path: '/echarts', component: echarts },
  	{ path: '/bar', component: Bar }
];
export default routers;