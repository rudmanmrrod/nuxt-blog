export default{
  data(){
    return {
      post: {}
    }
  },
  methods:{
    goBack(){
      this.$router.push('/posts/'+this.post.id+'/postDetail')
    },
    editPost(){
      this.$store.dispatch('posts/updatePost', this.post)
      this.$router.push('/posts/'+this.post.id+'/postDetail')
    }
  },
  mounted(){
    this.$axios.get('posts/'+this.$route.params.id).then(response => {
      this.post = response.data 
    }).catch(error => {
      console.log(error)
    })
  }
}