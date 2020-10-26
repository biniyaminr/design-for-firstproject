<template>
  <v-container>

    <AllProduct/>


    
  </v-container>
  
</template>

<script>
import AllProduct from "../components/AllProduct";


export default {
  name: "Home",


  components: {
    AllProduct

  },
  data() {
    return {
      items: []
    };
  }

};
</script>
