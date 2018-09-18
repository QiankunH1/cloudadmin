<template>
    <div class="main">
        <div class="add-img">
            <el-upload
                class="avatar-uploader"
                action="https://upload-z1.qiniup.com"
                :data="mydata"
                :show-file-list="true"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload">
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
        </div>
        <div class="text">
            <h3>姓名:</h3>
            <h3>昵称:</h3>
            <h3>邮箱:</h3>
            <h3>密码:</h3>
            <h3>确认密码:</h3>
            <h3>描述:</h3>
        </div>
        <div class="input">
            <el-input class="input-text" v-model="formData.username" placeholder="请输入姓名"></el-input>
            <el-input class="input-text" v-model="formData.nickname" placeholder="请输入昵称"></el-input>
            <el-input class="input-text" v-model="formData.email" placeholder="请输入邮箱"></el-input>
            <el-input class="input-text" v-model="formData.password" placeholder="请输入密码"></el-input>
            <el-input class="input-text" v-model="formData.repassword" placeholder="请确认密码"></el-input>
            <el-input class="input-text" v-model="formData.desc" placeholder="请输入描述"></el-input>
        </div>
        <div>
            <el-row class="btn">
                <el-button class="sign" type="primary"  @click="sign" >注册</el-button>
                <el-button class="reset">重置</el-button>     
            </el-row>
        </div>
</div>
</template>

<script>
    export default {
        data(){
            return{
            formData:{
                username:"",
                nickname:"",
                email:"",
                password:"",
                repassword:"",
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
            },
            beforeAvatarUpload(file) {
                const isJPG = file.type === 'image/jpeg';
                const isLt2M = file.size / 1024 / 1024 < 2;

                if (!isJPG) {
                this.$message.error('上传头像图片只能是 JPG 格式!');
                }
                if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                return isJPG && isLt2M;
            },
            sign(){
                if(this.formData.password!=this.formData.repassword){
                     this.$message.error('两次输入的密码不一致，请重新输入')
                }else{
                     this.$axios.post('/user',this.formData).then(res=>{
                    if(res.code==200){
                      this.$message.success('恭喜你注册成功')
                    }else{
                        this.$message.error(res.msg)}
                  })  
                }
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