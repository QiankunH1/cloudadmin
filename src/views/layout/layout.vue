<template>
    <div class="layout">
        <div class="header ml-200">
            <h1 class="title">云书后台管理系统</h1>
        </div>
        <div class="side-bar">
            <el-menu
       :router="true"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#409EFF"
      >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>用户管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="add">添加管理员</el-menu-item>
          <el-menu-item index="list">管理员列表</el-menu-item>
          <el-menu-item index="1-3">修改密码</el-menu-item>
          <el-menu-item index="3-4">修改个人信息</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>分类管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1">分类列表</el-menu-item>
          <el-menu-item index="2-2">添加分类</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      
      

      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span>图书管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="3-1">图书列表</el-menu-item>
          <el-menu-item index="3-2">添加图书</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span>轮播图管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="4-1">轮播图列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span>上传文件测试页</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="test">传统表单上传测试</el-menu-item>
          <el-menu-item index="ajax">ajax表单上传测试</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

    </el-menu>

        </div>
        <div class="main-content ml-200">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        name:'layout'
    }
</script>

<style scoped>
.layout .title{
    text-align: center;
    font-weight: 400; 
    line-height: 60px;
    height:60px;
    border-bottom: 1px solid #f1f1f1;
    font-size: 20px;
}
.ml-200{
    margin-left: 200px;
}
.side-bar{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    padding-top: 80px;
    width: 200px;
    border-right: 1px solid #f1f1f1;
    overflow: hidden;
    background-color:#545c64;
    
}

.main-content{
    padding-left: 200px;
}
.el-menu{
      border-right:none;
  }
</style>
