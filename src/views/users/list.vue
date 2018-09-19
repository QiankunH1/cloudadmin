<template>
    <div class="user-manage">
        <div class="breadcrumb">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/layout/index' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>用户管理</el-breadcrumb-item>          
            </el-breadcrumb>
        </div>

        <template>
            <el-table
                :data="tableData"
                stripe
                style="width: 100%">
                <el-table-column
                prop="username"
                label="姓名"
                width="130">    
                </el-table-column>
                <el-table-column
                prop="nickname"
                label="昵称"
                width="130">    
                </el-table-column>
                <el-table-column
                prop="createdTime"
                label="时间" 
                width="130">
                </el-table-column>
                <el-table-column
                prop="desc"
                label="个性签名"
                width="400">
                </el-table-column>

                <el-table-column
            
                label="用户头像"
                width="100">
                <template slot-scope="scope">
                    <img :src="scope.row.avatar" class="avatar">
                </template>
                </el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button type="danger"  @click="handleDelete(scope.row._id)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </template> 
        <el-pagination
            background
            layout="prev, pager, next"
            :total="1000"
            :page-size=5
            :pager-count=7
            @current-change='currentChange'
            >
        </el-pagination>
    </div>
</template>
 
<script>
    export default {
        data(){
            return{
              tableData:[] ,
              page:1,
              count:0

            }
        },
        name:"index",
        methods:{
            getData(){
                this.$axios.get('/user',{pn:this.page,size:5}).then(res=>{
                    console.log(res)
                    if(res.code==200){
                        this.count=res.count
                        this.tableData=res.data
                    }
                })
            },
            handleDelete(id){
               this.$confirm('此操作将删除该管理员, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
                }).then(() => {
                    this.$axios.post('/user/delete',{userIds:[id]}).then(res=>{
                        if(res.code==200){
                            this.$message.success(res.msg)
                            this.getData()
                        }
                    }) 
                })
             },
           currentChange(event){
              this.page=event
              this.getData()
           }
        },
        created(){
            this.getData()
        }  
        }  
  
</script> 

<style scoped>
.avatar{
    width: 60px;
    height: 60px;
}
</style>