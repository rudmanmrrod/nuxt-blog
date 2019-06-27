import Post from '~/components/Post.vue'

export default {
  components: {
    Post
  },
  computed: {
    posts() {
      return this.$store.state.posts.list
    }
  },
  mounted(){
    this.$store.dispatch('posts/getPosts')
  }
  /*fetch({store,$axios}){
    $axios.get('posts').then(response => {
      console.log(response)
      store.dispatch('posts/setPost',response.data)
    }).catch(error => {
      console.log(error)
    })
  }*/
}
