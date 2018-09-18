<template>
    <div class="container">
        <h1 class="title">欢迎来到cloud-book后台管理系统</h1>
        <div class="login-box">
            <h2 class="login-box-title">请登录</h2>
            <el-form :model="formData" class="form"> 
                 <el-form-item label="用户名">
                    <el-input v-model="formData.username" placeholder="请输入用户名"></el-input>
                 </el-form-item>
                 <el-form-item label="密码">
                    <el-input v-model="formData.password" type="password" placeholder="请输入密码"></el-input>
                 </el-form-item>
                 <el-button @click="handlelogin" type="primary" class="login-btn" :loading="isLoading">
                    登录
                </el-button>              
            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        name:"login",
        data(){
            return{
                formData:{
                    username:'',
                    password:'',
                },
                isLoading:false,
            }
        },
        methods:{
            handlelogin(){
               
                this.isLoading=true
                this.$axios.post('/login',this.formData).then(res=>{
                
                  this.isLoading=false
                    console.log(res)
                    if(res.code==200){
                      this.$message.success('恭喜你登录成功') 
                      setTimeout(()=>{
                          this.$router.push('/layout/index') 
                      },1000)
                    }else{
                        this.$message.error(res.msg)
                    }
                })
            }  
        } 
    }
</script> 

<style scoped>
.container{
    overflow: hidden;    
    height: 100vh;
    background:#545c64;
}
.title{
    margin-top: 100px;
    text-align: center;
    color: #fff;
    font-weight: 400;
}
.login-box{
    width: 400px;
    height: 300px;
    border: 1px solid #f1f1f1;
    border-radius: 6px;
    padding: 40px 40px ;
    margin: 20px auto 0;   
    background-color:#fff;
}
.login-box .login-box-title{
    text-align: center;
    font-weight: 400;
    color: #333;
}
.login-box .form{
    margin-top: 20px;
}
.login-btn{
width: 100%;
box-sizing: border-box;
}
</style>