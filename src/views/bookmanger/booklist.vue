<template>
    <div class="user-manage">
        <h3>图书管理</h3>

        <template>
            <el-table
                :data="tableData"
                stripe
                style="width: 100%">
                 <el-table-column
                    label="头像"
                    width="100">
                    <template slot-scope="scope">
                        <img :src="scope.row.img" class="avatar">
                    </template>
                </el-table-column>
                <el-table-column
                prop="author"
                label="作者"
                width="130">    
                </el-table-column>
                <el-table-column
                prop="createTime"
                label="创建日期"
                width="130">    
                </el-table-column>
                <el-table-column
                prop="index"
                label="index" 
                width="130">
                </el-table-column>

               
                <el-table-column label="操作" class="caozuo">
                    <template slot-scope="scope">
                        <el-button type="primary" size="small">编辑</el-button>
                        <el-button type="danger"  size="small" @click="handleDelete(scope.row._id)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </template> 
        <el-pagination
            background
            layout="prev, pager, next"
            :total="1000"
            :page-size=10
            :pager-count=7
            @current-change='currentChange'
            >
        </el-pagination>
    </div>
</template>
 
<script>
    export default {
        name:"booklist",
        data(){
            return{
              tableData:[] ,
              page:1,
              count:0,
              

            }
        },
        name:"index",
        methods:{
            getData(){
                this.$axios.get('/book',{pn:this.page,size:5}).then(res=>{
                    console.log("hahah2222")
                    console.log(res)
                    if(res.code==200){
                        this.count=res.count
                        this.tableData=res.data
                      
                    }
                })
            },
            // handleDelete(id){
            //    this.$confirm('此操作将删除该管理员, 是否继续?', '提示', {
            //     confirmButtonText: '确定',
            //     cancelButtonText: '取消',
            //     type: 'warning'
            //     }).then(() => {
            //         this.$axios.post('/user/delete',{userIds:[id]}).then(res=>{
            //             if(res.code==200){
            //                 this.$message.success(res.msg)
            //                 this.getData()
            //             }
            //         }) 
            //     })
            //  },
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
.caozuo{
    width:120px;
}
</style>