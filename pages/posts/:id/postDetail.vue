<template>
  <v-flex xs12>
    <v-card color="blue-grey darken-2" class="white--text">
      <v-card-title primary-title>
        <div>
          <div class="headline">{{ post.title }}</div>
          <span>{{ post.description }}</span>
        </div>
      </v-card-title>
      <v-card-actions>
        <v-btn flat color="green" @click="editPost">Edit</v-btn>
        <v-btn flat color="red" @click="show">Delete</v-btn>
      </v-card-actions>
    </v-card>
    <v-btn
      color="primary"
      nuxt
      flat
      to="/posts/postList"
    >
    Back
    </v-btn>
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <DeleteModal :id="post.id" @closeModal="close" />
    </v-dialog>
  </v-flex>
</template>
<script src="./postDetail.js"></script> 
