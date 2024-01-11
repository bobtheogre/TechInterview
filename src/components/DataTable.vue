<template>
  <v-container>
    <v-row>
      <v-layout child-flex>
        <v-card>
          <v-card-title>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              :loading="loading"
              loading-text="Loading... Please wait"
              single-line
              hide-details
            ></v-text-field>
          </v-card-title>
          <v-data-table :headers="headers" :items="items" :search="search"></v-data-table>
        </v-card>
      </v-layout>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";

const URL = "https://random-data-api.com/api/v2/";
const size = 100;

export default {
  created() {
    this.fetchData();
  },
  data: () => ({
    search: "",
    headers: [
      { text: "ID", value: "id" },
      { text: "User Name", value: "username" },
      { text: "First Name", value: "first_name" },
      { text: "Last Name", value: "last_name" },
      { text: "Email", value: "email" },
      { text: "Gender", value: "gender" },
      { text: "Phone Number", value: "phone_number" },
      { text: "SSN", value: "social_insurance_number" },
    ],
    items: [],
    loading: false,
  }),
  methods: {
    fetchData() {
      this.loading = true;
      axios
        .get(`${URL}/users?size=${size}`)
        .then((res) => {
          this.loading = false;
          this.items = res.data;
        })
        .catch((err) => alert("Error!" + err));
    },
  },
};
</script>
