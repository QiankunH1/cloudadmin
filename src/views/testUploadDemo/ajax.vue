<template>
    <div>
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
            this.token=res.data.data
            })
            },
            handleChange(event){
                let file = event.target.files[0]
                let formData =new FormData()
                formData.append('file',file)
                formData.append('token',this.token)
                axios.post('https://upload-z1.qiniup.com',formData,{
                    headers:{
                        'Content-Type':'multipart/form-data'
                    }
                }).then (res=>{
               
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