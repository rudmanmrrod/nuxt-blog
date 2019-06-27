<template>
  <v-flex xs6>
    <v-card color="blue-grey darken-2" class="white--text">
      <v-card-title primary-title>
        <div>
          <div class="headline">{{ post.title }}</div>
          <span>{{ post.description.substr(0,20) }}...</span>
        </div>
      </v-card-title>
      <v-card-actions>
        <v-btn flat dark @click="goTo(post.id)">See More</v-btn>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>
<script>
  export default {
    props: ['post'],
    methods:{
      goTo(id){
        this.$router.push('/posts/'+id+'/postDetail/')
      }
    }
  }
</script>