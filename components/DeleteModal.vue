<template>
  <v-card>
    <v-card-title
      primary-title
    >
      Delete
    </v-card-title>

    <v-card-text>
      You want to delete this record? 
      This action can not be undone, are you sure?
    </v-card-text>

    <v-divider></v-divider>

    <v-card-actions>
      <v-btn
        color="red"
        flat
        @click="Delete"
      >
        Yes
      </v-btn>
      <v-btn
        color="primary"
        flat
        @click="Close"
      >
        No
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default{
  props:['id'],
  methods:{
    Close(){
      this.$emit('closeModal')
    },
    Delete(){
      this.$store.dispatch('posts/deletePost',this.id)
      this.$router.push('/posts/postList')
    }
  }
}
</script>
