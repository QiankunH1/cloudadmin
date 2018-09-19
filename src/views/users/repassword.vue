<template>
    <div>
        <h2>修改密码</h2>
        <div>
            <el-form  label-width="100px" class="demo-ruleForm">
                <el-form-item label="原密码" >
                    <el-input type="password" v-model="formData.password" ></el-input>
                </el-form-item>
                <el-form-item label="新密码" >
                    <el-input type="password" v-model="formData.new_password" ></el-input>
                </el-form-item>
                <el-form-item label="确认密码" >
                    <el-input type="password" v-model="checkPass" ></el-input>
                </el-form-item>
                
             
                <el-form-item>
                    <el-button type="primary" @click="handleRefer">提交</el-button>
                    <el-button @click="handleReset">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        name:"repassword",
         data() {
            return {
                formData:{
                     password:'',
                     new_password:'',
                },
                    checkPass:''
           
        }
        },
        methods: {
            handleRefer(){
                console.log("aaa")
                if(this.formData.new_password==this.checkPass){
                    console.log("heheh")
                    this.$axios.put('/user/password',this.formData).then(res=>{
                        console.log("hahah")
                        console.log(res)
                        this.$message('修改成功')
                    })
                }
            },
            handleReset(){

            }
        }
    }
        
</script>

<style scoped>
.demo-ruleForm{
    width: 400px;
  
}
</style>