export default {
  state: () => ({
    list: [],
    current_post: {}
  }),
  mutations: {
    'SET_POST' (state,payload){
      state.list = payload
    },
    'GET_SINGLE_POST' (state, payload){
      state.current_post = payload
    },
    'SEND_POST' (state, payload){
      state.list.push(payload)
    }
  },
  actions: {
    getPosts({commit}){
      this.$axios.get('posts').then(response => {
        commit('SET_POST',response.data)
      }).catch(error => {
        console.log(error)
      })
    },
    getSinglePost({commit},route){
      this.$axios.get('posts/'+route).then(response => {
        commit('GET_SINGLE_POST',response.data) 
      }).catch(error => {
        console.log(error)
      })
    },
    sendPost({commit},data){
      this.$axios.post('posts/',data).then(response => {
        commit('SEND_POST',response.data) 
      }).catch(error => {
        console.log(error)
      })
    },
    updatePost({commit}, data){
      this.$axios.patch('posts/'+data.id, data).then(response => {
        commit('GET_SINGLE_POST',response.data)
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
