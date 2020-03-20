/*
 * mock
 * */
import mockAdapter from "axios-mock-adapter";
import httpClient from "@/services/lib/httpClient";

import {
    testUrl
} from "@/services/lib/url"


let mock=new mockAdapter(httpClient);

//正常返回
mock.onPost(testUrl()).reply(config=>{
    let {id}=JSON.parse(config.data);
    return new Promise((resolve,reject)=>{
        return resolve(
            [200, {
                users: [
                  { id: 2, name: 'John Smith' }
                ]
            }]
        )
    })
})

//异常返回
mock.onGet(testUrl()).reply(200, {
    users: [
      { id: 1, name: 'John Smith' }
    ]
})

//模拟接参数
mock.onDelete(testUrl()).reply(config=>{
    let {id} = config.params;
    return new Promise((resolve,reject)=>{
        if(true){
            return resolve([200,{message:"1"}])
        }else{
            return reject([400,{message:"2"}])
        }
    })
})