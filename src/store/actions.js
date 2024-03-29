import { fetchNewsList,
        fetchAskList,
        fetchJobsList,
        fetchUserInfo,
        fetchItemInfo,
        fetchList } from "../api/index.js";

export default {
  // promise
//   FETCH_NEWS(context) {
//     return fetchNewsList()
//       .then((response) => {
//         // console.log(response.data);
//         context.commit("SET_NEWS", response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   },
//   FETCH_ASK(context) {
//     return fetchAskList()
//       .then((response) => {
//         context.commit("SET_ASK", response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   },
//   FETCH_JOBS(context) {
//     return fetchJobsList()
//       .then((response) => {
//         context.commit("SET_JOBS", response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   },
  FETCH_USER(context, userName) {
    return fetchUserInfo(userName)
      .then((response) => {
        context.commit("SET_USER", response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  FETCH_ITEM(context, itemId) {
    return fetchItemInfo(itemId)
      .then((response) => {
        context.commit("SET_ITEM", response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    },
  // async
  async FETCH_NEWS(context) {
      try {
        const response = await fetchNewsList();
        context.commit('SET_NEWS', response.data);
        return response;
      } catch(error) {
        console.log(error);
      }

  },
  async FETCH_ASK(context) {
      try{
        const response = await fetchAskList();
        context.commit("SET_ASK", response.data);
        return response;
      } catch(error){
        console.log(error);
      }

  },
  async FETCH_JOBS({ commit }) {
      try{
        const response = await fetchJobsList();
        commit("SET_JOBS", response.data);
        return responce;
      } catch(error){
        console.log(error);
      }
  },
  FETCH_USER(context, userName) {
    return fetchUserInfo(userName)
      .then((response) => {
        context.commit("SET_USER", response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  async FETCH_ITEM(context, itemId) {
    const response = await fetchList(pageName);
    console.log(4);
    commit('SET_LIST', response.data);
    return response;
  },

  // 실행순서 #2.
  FETCH_LIST(context, pageName) {
    // 실행순서 #3.
    return fetchList(pageName)
      .then((response) => {
        // 실행순서 #4.
        console.log("4. fetched");
        context.commit("SET_LIST", response.data);
      })
      .catch((error) => console.log(error));
  },
};