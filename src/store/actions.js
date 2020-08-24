import { fetchUserInfo,
        fetchItemInfo,
        fetchList } from "../api/index.js";

export default {
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
    },
    FETCH_LIST({ commit }, pageName){
        fetchList(pageName)
        .then(({data}) => commit('SET_LIST', data))
        .catch(error => console.log(error));

    }
}