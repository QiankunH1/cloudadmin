import axios from 'axios'


const baseURL='/api/admin'
var instance = axios.create({
    baseURL,
    timeout: 10000,
    });
const xhr ={
    get(url,data,config){
        return new Promise((resolve,reject)=>{
            instance.get(url,{params:data},config).then(res=>{
                resolve(res.data)
            }).catch(err=>{
                reject(err)
            })
        })
    },
    post(url,data,config){
        return new Promise((resolve,reject)=>{
            instance.post(url,data,config).then(res=>{
                resolve(res.data)
            }).catch(err=>{
                reject(err)
            })
        })
    },
    put(url,data,config){
        return new Promise((resolve,reject)=>{
            instance.put(url,data,config).then(res=>{
                resolve(res.data)
            }).catch(err=>{
                reject(err)
            })
        })
    },
    del(url,data,config){
        return new Promise((resolve,reject)=>{
            instance.delete(url,{params:data},config).then(res=>{
                resolve(res.data)
            }).catch(err=>{
                reject(err)
            })
        })
    },
}
export const $axios= xhr;