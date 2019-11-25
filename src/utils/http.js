
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)


export const get = function({keywords=''}){
    return axios({
        url:'/api/nindex/searchAutoword',
        method:'get',
        params:{
            inputValue:keywords,
            randomNumber: '09321104864215122'
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
            _:1574491546145
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
                randomNumber:'07769437581672349',
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