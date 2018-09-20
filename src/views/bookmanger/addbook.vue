<template>
    <div>
        <h3>添加图书</h3>
        <div class="demo-input-suffix">
            作者：
             <el-input class="input"  v-model="formdata.author" placeholder="请输入内容"></el-input>
     
        </div>
        <div class="text">
            <span>头像：</span>
            <span class="left">
                    <el-switch
                        v-model="value3"
                        active-text="上传图片"
                        inactive-text="上传图片链接">
                        </el-switch>   
            </span>
        </div>
        <div v-if="value3">
            <el-input class="input-img"  v-model="formdata.img" placeholder="请输入内容"></el-input>
            <div class="demo-input-suffix">
            链接：
             <el-input class="input"  v-model="formdata.url" placeholder="请输入内容"></el-input>
           </div>
           <div>
               <span>分类：</span>
               <el-dropdown class="left">
                    <el-button >
                        请选择<i class="el-icon-arrow-down el-icon--right"></i>
                    </el-button>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>黄金糕1</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                

           </div>
        </div>
    </div> 
</template>

<script>
    export default {
        name:'addbook',
        data(){
            return{
                  value3: true, 
                  data:[],
                  
                  formdata:{
                      img:"",
                      url:"",
                      author:"",
                      typeId:''
                  },
            }
        },
        methods:{
            getsort(){
                this.$axios.get('/category').then(res=>{
                    console.log("hahah1111")
                    console.log(res)
                    if(res.code==200){
                        this.count=res.count
                        this.data=res.data
                      
                    }
                })
            },
        },
        created(){
            this.getsort();
        }
    }
</script>

<style scoped>
 h3{
    margin: 20px 0;
 }
.input{
      width: 400px;
      margin-left: 30px;
  }
  .input-img{
      width: 400px;
      margin-left: 82px;
  }
.left{
    margin-left: 60px;
}
</style>