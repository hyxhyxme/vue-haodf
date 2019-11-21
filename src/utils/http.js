
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)


export const get = function(){
    return axios.get('/api')
        .then(function(result){
            return result.data
        })
        .catch(function(error){
            console.log(error);
        })
}


export const post = function({ facultyId="zonghe", province='', city='', county='', positionText="全国"}){
    return axios({
            url:'/foo',
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