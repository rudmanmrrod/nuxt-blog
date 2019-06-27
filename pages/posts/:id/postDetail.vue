<template>
  <v-flex xs12>
    <v-card color="blue-grey darken-2" class="white--text">
      <v-card-title primary-title>
        <div>
          <div class="headline">{{ post.title }}</div>
          <span>{{ post.description }}</span>
        </div>
      </v-card-title>
    </v-card>
    <v-btn
      color="primary"
      nuxt
      flat
      to="/posts/postList"
    >
    Back
    </v-btn>
  </v-flex>
</template>
<script src="./postDetail.js"></script> 
