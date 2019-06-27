export default {
  data() {
    return {
      title:'',
      description:''
    }
  },
  methods:{
    createPost(){
      let post = {title: this.title, description: this.description}
      this.$store.dispatch('posts/sendPost',post)
    }
  }
}
