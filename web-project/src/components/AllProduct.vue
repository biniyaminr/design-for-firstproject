<template>
  <div class="block latestPostBlock">
    <v-container>
      <h2 class="text-center">All Products</h2>
      <v-row>
        <v-col cols="12" md="4" v-for="item in items" :key="item.id">
          <v-card :loading="loading" class="mx-auto my-12" max-width="374">
            <template slot="progress">
              <v-progress-linear
                color="deep-purple"
                height="10"
                indeterminate
              ></v-progress-linear>
            </template>

            <v-img height="250" :src="item.src"></v-img>
            <v-card-title>{{ item.title }}</v-card-title>
            <v-card-text>
              <v-row align="center" class="mx-0">
                <v-rating
                  :value="4.5"
                  color="amber"
                  dense
                  half-increments
                  readonly
                  size="14"
                ></v-rating>

                <div class="grey--text ml-4">
                  4.5 (413)
                </div>
              </v-row>

              <div class="my-4 subtitle-1">
              {{ item.subtitle }}
              </div>

              <div>
                 <div>{{ item.description }}</div>
              </div>
            </v-card-text>

            <v-divider class="mx-4"></v-divider>

            <v-card-title>{{item.genre}}</v-card-title>

            <v-card-text>
              <v-chip-group
                v-model="selection"
                active-class="deep-purple accent-4 white--text"
                column
              >
                <v-chip>Art</v-chip>

                <v-chip>Fantasy</v-chip>

                <v-chip>Biograpies</v-chip>

                <v-chip>Sicence</v-chip>
                <v-chip>Romantic</v-chip>
              </v-chip-group>
            </v-card-text>

            <v-card-title>
              <v-div color="deep-purple lighten-2" text @click="reserve">
                {{item.publisheddate}}
              </v-div>
            </v-card-title>
          </v-card>
        </v-col>
      </v-row>
      
    </v-container>
  </div>
</template>

<script>
export default {
  name: "AllProducts",
  data() {
    return {
      items: [
        {
          id: 1,
          title: "ሜሎሪና ",
          subtitle: "ናሁሰናይ ፀዳሉ አበራ",
          publisheddate: "1997-12-03",
          genre: "genre",
          description: "this is the desctiption of the boook",
          src: require("../assets/images/book.jpg")
        },
         {
          id: 1,
          title: "ሜሎሪና ",
          subtitle: "ናሁሰናይ ፀዳሉ አበራ",
          publisheddate: "1997-12-03",
          genre: "genre",
          description: "this is the desctiption of the boook",
          src: require("../assets/images/book.jpg")
        },
        
         {
          id: 1,
          title: "ሜሎሪና ",
          subtitle: "ናሁሰናይ ፀዳሉ አበራ",
          publisheddate: "1997-12-03",
          genre: "genre",
          description: "this is the desctiption of the boook",
          src: require("../assets/images/book.jpg")
        },
        
         {
          id: 1,
          title: "ሜሎሪና ",
          subtitle: "ናሁሰናይ ፀዳሉ አበራ",
          publisheddate: "1997-12-03",
          genre: "genre",
          description: "this is the desctiption of the boook",
          src: require("../assets/images/book.jpg")
        },
         {
          id: 1,
          title: "ሜሎሪና ",
          subtitle: "ናሁሰናይ ፀዳሉ አበራ",
          publisheddate: "1997-12-03",
          genre: "genre",
          description: "this is the desctiption of the boook",
          src: require("../assets/images/book.jpg")
        },
         {
          id: 1,
          title: "ሜሎሪና ",
          subtitle: "ናሁሰናይ ፀዳሉ አበራ",
          publisheddate: "1997-12-03",
          genre: "genre",
          description: "this is the desctiption of the boook",
          src: require("../assets/images/book.jpg")
        },
        
        
      ]
    };
  }
};
</script>
