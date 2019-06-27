<template>
  <v-container>
    <h1>Post Edit</h1>
    <v-layout row wrap>

      <v-flex xs12>
        <v-text-field
          label="Title"
          v-model="post.title"
        ></v-text-field>
      </v-flex>

      <v-flex xs12>
        <v-textarea
          label="Description"
          v-model="post.description"
        ></v-textarea>
      </v-flex>
      <v-btn
        color="green"
        nuxt
        @click="editPost"
      >
      Edit
      </v-btn>
      <v-btn
        color="primary"
        nuxt
        flat
        @click="goBack"
      >
      Back
      </v-btn>
    </v-layout>
  </v-container>
</template>
<script src="./postEdit.js"></script>