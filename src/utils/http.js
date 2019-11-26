
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

const getRandomNumber = function(){
    let str = String(Math.random())
    return str.substr(2)
}

export const get = function({keywords=''}){
    getRandomNumber()
    return axios({
        url:'/api/nindex/searchAutoword',
        method:'get',
        params:{
            inputValue:keywords,
            randomNumber: getRandomNumber()
        }
        }) .then(function(result){
            return result.data
        }) .catch(function(error){
            console.log(error);
        })
}

export const search = function({key='',page=1,size=10}){
    return axios({
        url:'/api/touch/search/getsearchdata',
        params:{
            key,
            flowTitle:'',
            page,
            size,
            _:new Date().getTime()
        }
    }).then((result)=>{
        return result
    }).catch((error)=>{
        console.log(error); 
    })
}


export const post = function({ facultyId="zonghe", province='', city='', county='', positionText="全国"}){
    return axios({
            url:'/foo/nindex/ajaxGetDoctorList',
            method:'post',
           /*  headers:{
                'Content-Type' : 'application/x-www-form-urlencoded',
            }, */
            data :{
                'facultyId':facultyId,
                randomNumber:getRandomNumber,
                'params':{
                    'province':province,
                    'city' : city,
                    'county' : county,
                    'positionText': positionText,
                    'from': 'node',
                }
            },
           
        })
        .then(function(result){
            return result.data
        })
        .catch(function(error){
            console.log(error);
        })
}