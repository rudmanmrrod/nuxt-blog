import DeleteModal from '~/components/DeleteModal.vue'

export default {
  data(){
    return {
      dialog: false
    }
  },
  components:{
    DeleteModal
  },
  computed: {
    post() {
      return this.$store.state.posts.current_post
    }
  },
  methods:{
    editPost(){
      this.$router.push('/posts/'+this.post.id+'/postEdit')
    },
    show(){
      this.dialog = true
    },
    close(){
      this.dialog = false
    }
  },
  mounted(){
   this.$store.dispatch('posts/getSinglePost',this.$route.params.id)
  }
}