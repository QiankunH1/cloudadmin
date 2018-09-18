<template>
    <div>
        <h1>上传图片测试页</h1>
        <h2>传统表单上传</h2>
        <div>
            <form action="https://upload-z1.qiniup.com" method="post" enctype="multipart/form-data">
                <input type="file" name="file" >
                <br>
                <input type="text"  name="token" v-model="token">
                <br>
                <button>
                    提交
                </button>
            </form>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
    export default {
        name:"index",
        data(){
            return{
                token:"",
            }
        },
        methods:{
            getToken(){
                console.log("haha1")
              axios.get("http://upload.yaojunrong.com/getToken").then(res=>{
                  console.log("haha2")
            console.log(res)
            this.token=res.data.data
        })
        }
        },
         created(){
            this.getToken()
        },
    }
</script>

<style scoped>

</style>