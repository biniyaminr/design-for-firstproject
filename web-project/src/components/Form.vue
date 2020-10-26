<template>
  <v-content>
    <div class="block">
      <v-container>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            v-model="name"
            :counter="10"
            :rules="nameRules"
            label="Name of the book"
            required
          ></v-text-field>
          <v-file-input
            label="cover image"
            filled
            prepend-icon="mdi-camera"
          ></v-file-input>

          <v-text-field
            v-model="Name"
            :rules="nameRules"
            label="author"
            required
          ></v-text-field>
          <v-text-field
            v-model="date"
            :rules="dateRules"
            label="published date"
            required
          ></v-text-field>
          <v-text-field
            v-model="Name"
            :rules="nameRules"
            label="genre"
            required
          ></v-text-field>
          <v-text-field
            v-model="Name"
            :rules="nameRules"
            label="language"
            required
          ></v-text-field>

          <v-textarea
            v-model="message"
            :rules="messageRules"
            label="description"
            required
          ></v-textarea>

          <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            @click="validate"
          >
            Add
          </v-btn>

          <v-btn color="update" class="mr-4" @click="reset">
            Update
          </v-btn>
        </v-form>
      </v-container>
    </div>
  </v-content>
</template>

<script>
export default {
  name: "Form",

  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      v => !!v || "Name is required",
      v => (v && v.length <= 10) || "Name must be less than 10 characters"
    ],
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ]
  }),
  valid: true,
  message: "",
  messageRules: [
    v => !!v || "Message is required",
    v => (v && v.length >= 10) || "Message must be more than 10 characters"
  ],

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    }
  }
};
</script>
