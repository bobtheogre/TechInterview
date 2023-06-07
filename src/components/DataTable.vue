<template>
  <v-container>
    <v-row>
      <v-card
        width="100vw"
        class="mx-4"
      >
        <v-card-title>
          Data Table
        </v-card-title>
        <v-card-subtitle>
          <p>
            Random user data imported from <a href="https://random-data-api.com/">https://random-data-api.com/</a>
          </p>
        </v-card-subtitle>
        <v-data-table
          :headers="headers"
          :items="randomData"
          item-key="first_name"
          :search="search"
          :custom-filter="searchTable"
          class="w-100"
        >
          <template #top>
            <v-text-field
              v-model="search"
              label="Search"
              class="mx-4"
            />
          </template>
        </v-data-table>
      </v-card>
    </v-row>
    <v-row>
      
    </v-row>
  </v-container>
</template>

<script>
// axios used for api call in function getRandomUsers
  import axios from 'axios';

  export default {
    name: "DataTable",
    data() {
      return {
        search: '',
        randomData: [] // will be populated when component mounts
      }
    },
    computed: {
      headers () {
        return [
          {
            text: "First Name",
            align: "start",
            value: "first_name"
          },
          {
            text: "Last Name",
            value: "last_name"
          },
          {
            text: "Email",
            value: "email"
          },
          {
            text: "Password",
            value: "password"
          },
        ]
      }
    },
    mounted: function() {
      this.getRandomUsers();
      //console.log("mounted!"); // debug
    },
    methods: {
      getRandomUsers() {
        let self = this;
        axios.get("https://random-data-api.com/api/v2/users/?size=10")
          .then((data) => {
            //console.log("random data fetched:", data.data); // debug
            // Reducing header count so our table isn't massive
            const filtered = data.data.map((user) => {
              return {
                first_name: user.first_name,
                last_name: user.last_name,
                email: user.email,
                password: user.password
              }
            });
            console.log(`filtered:`, filtered); // debug
            self.randomData = filtered;
          })
          .catch((err) => {
            console.log("error: ", err);
          });
      },
      searchTable (value, search, item) {
        return value != null &&
          search != null &&
          typeof value === 'string' &&
          value.toString().toLowerCase().indexOf(search) !== -1
      }
    }
  };
</script>
