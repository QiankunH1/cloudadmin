<template>
    <div>
        <h3>添加分类</h3>
        <div>分类名：</div>
        <el-input class="input-text" v-model="formData.title" placeholder="请输入内容"></el-input>
        <div>
            <h3>添加分类图标</h3>
            <div>
                <el-upload
                    class="avatar-uploader"
                    action="https://upload-z1.qiniup.com"
                    :data="mydata"
                    :show-file-list="true"
                    :on-success="handleAvatarSuccess"
                    >
                    <img v-if="formData.icon" :src="formData.icon" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
            </div>
            
            <el-button class="btn" type="primary"  @click="sure" >确认</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        name:'addsort',
        data(){
            return{
                input:"",
                
                avatar:'',
                formData:{
                    icon:"",
                    title:"",
                },
                mydata:{
                     token:'',
                }
            }
        },
        methods:{
             handleAvatarSuccess(res, file) {
                 console.log(res)
                 this.formData.icon = res.url

            }, 
             getToken(){
                this.$axios.get("http://upload.yaojunrong.com/getToken",).then(res=>{
                    console.log(res)
                    this.mydata.token=res.data
                    
                })
            },
            sure(){
                this.$axios.post("/category",this.formData).then(res=>{
                    this.$message.success('恭喜你添加成功')
                })
            }
        },
        created(){
            this.getToken()
        }
    }
</script>

<style scoped>
   .avatar-uploader {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    display: inline-block;
  }
  .avatar-uploader:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  .input-text{
      width: 300px;
  }
  .btn{
      margin: 10px 0;
  }
</style>