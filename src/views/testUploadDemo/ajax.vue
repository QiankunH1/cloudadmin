<template>
    <div>
        <h1>上传图片测试页</h1>
        <h2>ajax上图片传</h2>
        <div>
            <input type="file" @change="handleChange">
            <img :src="imgData" >
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
                imgData:''
            }
        },
        methods:{
            getToken(){
               
              axios.get("http://upload.yaojunrong.com/getToken").then(res=>{
                  
            console.log("我是res") 
            this.token=res.data.data
            })
            },
            handleChange(event){
                console.log("我是event")
                let file = event.target.files[0]
                let formData =new FormData()
                formData.append('file',file)
                formData.append('token',this.token)
                axios.post('https://upload-z1.qiniup.com',formData,{
                    headers:{
                        'Content-Type':'multipart/form-data'
                    }
                }).then (res=>{
                    console.log("我是第二个res哈哈")
                    this.imgData=res.data.url
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