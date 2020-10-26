<template>
  <v-container>
    <v-toolbar flat class="mainHeader" color="">
      <v-toolbar-title color="White">BookStore</v-toolbar-title>
 
      <v-toolbar-items class="hidden-xs-only">
        <v-btn text color="#FFFFFF">
          <router-link to="/">Home</router-link>
        </v-btn>

        <v-btn text>
          <router-link to="/addorupd">Add a Book and Update </router-link>
        </v-btn>
        <v-btn text>
          <router-link to="/category">Category</router-link>
        </v-btn>
      </v-toolbar-items>
      <div class="hidden-sm-and-up">
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-app-bar-nav-icon v-on="on"></v-app-bar-nav-icon>
          </template>
          <v-list class="responsiveMenu">
            <v-list-item>
              <v-list-item-title>
                <router-link to="/">Home</router-link></v-list-item-title
              >
            </v-list-item>
            <v-list-item>
              <v-list-item-title>
                <router-link to="/allproduct">All Product</router-link></v-list-item-title
              >
            </v-list-item>
            <v-list-item>
              <v-list-item-title>
                <router-link to="/category"
                  >Category</router-link
                ></v-list-item-title
              >
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-toolbar>
  </v-container>
</template>

<script>
export default {
  name: "Header",
  data: () => ({})
};
</script>
