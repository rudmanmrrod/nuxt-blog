export default {
  computed: {
    post() {
      return this.$store.state.posts.current_post
    }
  },
  mounted(){
   this.$store.dispatch('posts/getSinglePost',this.$route.params.id)
  }
}