<template>
  <div>
    <h1>Posts</h1>
    <v-btn
      color="primary"
      flat
      nuxt
      to="/posts/postCreate"
      >
      Create Post
    </v-btn>
    <v-container grid-list-md>
      <v-layout row wrap>
        <Post
          v-for="post of posts"
          :key="post.id"
          :post="post"
        />
      </v-layout>
    </v-container>
  </div>
</template>
<script src="./postList.js"></script>
