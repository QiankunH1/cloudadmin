<template>
    <div class="main">
        <h4>上传您的头像</h4>
        <div class="add-img">
            <el-upload
                class="avatar-uploader"
                action="https://upload-z1.qiniup.com"
                :data="mydata"
                :show-file-list="true"
                :on-success="handleAvatarSuccess">
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
        </div>
        <div class="text">
            <h3>昵称:</h3>
            <h3>邮箱:</h3>
            <h3>描述:</h3>
        </div>
        <div class="input">
            <el-input class="input-text" v-model="formData.nickname" placeholder="请输入昵称"></el-input>
            <el-input class="input-text" v-model="formData.email" placeholder="请输入邮箱"></el-input>
            <el-input class="input-text" v-model="formData.desc" placeholder="请输入描述"></el-input>
        </div>
        <div>
            <el-row class="btn">
                <el-button class="sign" type="primary"  @click="amend" >确认修改</el-button>  
            </el-row>
        </div>
</div>
</template>

<script>

    export default {

        name:"amend",
        data(){
            return{
            formData:{
                nickname:"",
                email:"",
                desc:"",
                avatar:""
                },
               
                imageUrl:"",
                mydata:{
                     token:"",
                }
            }
        },
         methods: {
            handleAvatarSuccess(res, file) {
                console.log("hahahhaaaaa")
                console.log(res)
                this.imageUrl =res.url;
                this.formData.avatar =res.url;
            },
         
            amend(){
                this.$axios.put('/user/userInfo',this.formData).then(res=>{
                    console.log("aaa")
                    this.$message("修改成功")
                })
            },
            getToken(){
                this.$axios.get("http://upload.yaojunrong.com/getToken",).then(res=>{
                    console.log(res)
                    this.mydata.token=res.data
                    
                })
            }
        },
        created(){
           this.getToken()
        }
    }
</script>

<style scoped>

.input{
    width: 300px;
    margin: 20px 0;
    display: inline-block;
}
.input-text{
    margin: 5px;
}
.text{
    display: inline-block;
    width: 100px;
    text-align: justify;
}
.text h3{
    font-size: 16px;
    height: 50px;
    line-height: 50px;
    font-weight: 400;
  
}
/* .add-img{
    width:200px;
    height: 200px;
} */
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

</style>