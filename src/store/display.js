export default {
    state : {
        isdisplay : false,
    },
    mutations: {
        increment(state){
            state.isdisplay = !state.isdisplay
        }
    },
}