export default {
  computed: {
    post() {
      return this.$store.state.posts.current_post
    }
  },
  methods:{
    editPost(){
      this.$router.push('/posts/'+this.post.id+'/postEdit')
    }
  },
  mounted(){
   this.$store.dispatch('posts/getSinglePost',this.$route.params.id)
  }
}