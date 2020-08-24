import { fetchNewsList,
        fetchAskList,
        fetchJobsList,
        fetchUserInfo,
        fetchItemInfo } from "../api/index.js";

export default {
    FETCH_NEWS(context) {
        fetchNewsList().then(response => {
            // console.log(response.data);
            context.commit("SET_NEWS", response.data);
        }).catch(error => {
            console.log(error);
        })
    },
    FETCH_ASK(context){
        fetchAskList()
        .then(response => {
            context.commit("SET_ASK", response.data)
        }).catch(error => {
            console.log(error);
        })
    },
    FETCH_JOBS(context){
        fetchJobsList().then(response => {
            context.commit("SET_JOBS", response.data)
        }).catch(error => {
            console.log(error);
        })
    },
    FETCH_USER(context, userName){
        fetchUserInfo(userName)
        .then((response) => {
            context.commit('SET_USER', response.data);
        })
        .catch(error => {
            console.log(error);
        });
    },
    FETCH_ITEM(context, itemId){
        fetchItemInfo(itemId)
        .then((response)=>{
            context.commit('SET_ITEM', response.data);
        })
        .catch(error => {
            console.log(error);
        })
    }
}