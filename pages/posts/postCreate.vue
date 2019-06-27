<template>
  <v-container>
    <h1>Create</h1>
    <v-layout row wrap>
      <v-flex xs12>
        <v-text-field
          label="Title"
          v-model="title"
        ></v-text-field>
      </v-flex>

      <v-flex xs12>
        <v-textarea
          label="Description"
          v-model="description"
        ></v-textarea>
      </v-flex>
      <v-btn
        color="primary"
        nuxt
        @click="createPost"
      >
      Create
      </v-btn>
      <v-btn
        color="primary"
        nuxt
        flat
        to="/posts/postList"
      >
      Back
      </v-btn>
    </v-layout>
  </v-container>
</template>
<script src="./postCreate.js"></script>
