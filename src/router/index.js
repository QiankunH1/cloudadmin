import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)
const components ={
  login: ()=>import("@/views/login/login"),
  layout: ()=>import("@/views/layout/layout"),
  index: ()=>import("@/views/index/index"),
  list: ()=>import("@/views/users/list"),
  add:()=>import("@/views/users/add"),
  test:()=>import("@/views/testUploadDemo/test"),
  ajax:()=>import("@/views/testUploadDemo/ajax"),
}

export default new Router({
  routes: [
    {
      path: '/',
      name: "login",
      component: components.login
    },
    {
      path: '/layout',
      component: components.layout,
      redirect:'/layout/index',
      meta:{
        title:'首页'
      },
      children:[
        {
        path:'index',
        component:components.index
        },
        {
        path:'list',
        meta:{
          title:'管理员列表'
        },
        component:components.list
        },
        {
        path:'add',
        meta:{
          title:'添加管理员'
        },
        component:components.add
        },
        {
          path:'test',
          meta:{
            title:'传统文件上传'
          },
          component:components.test
          },
        {
          path:'ajax',
          meta:{
            title:'ajax文件上传'
          },
          component:components.ajax
          },
    ]
    },

  ]
})
