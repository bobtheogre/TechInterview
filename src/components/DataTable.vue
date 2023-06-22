<template>
  <v-container>
    <v-row>
      <v-card>
        <v-card-title>
          Data Table
        </v-card-title>
        <v-card-subtitle>
          <p>
            Uh oh. There is nothing there. Using the data at <a href="https://random-data-api.com/">https://random-data-api.com/</a>, populate the table
            below with headers and make it searchable. Also, expand the table to full width of the container. Let Bob know when complete.
          </p>
        </v-card-subtitle>
        <v-data-table
          width=100%
          overflow-x="auto"  
          :search="search"
          :items="tableData"
          :headers="headers"
        >
        <template v-slot:top>
          <v-text-field
            v-model="search"
            label="Search"
            class="mx-4"
          ></v-text-field>
        </template>
        </v-data-table> 
      </v-card>
    </v-row>
    <v-row />
  </v-container>
</template>

<script>
import axios from 'axios';

export default {

  data: () => ({
    tableData: [],
    headers: [
      { text: 'First Name', value: 'first_name' },
      { text: 'Last Name', value: 'last_name' },
      { text: 'Email', value: 'email' },
      { text: 'Phone Number', value: 'phone_number'},
      { text: 'Birth Date', value: 'date_of_birth'}
    ],
    search: '',
  }),

    created() {
      axios.get('https://random-data-api.com/api/v2/users/?size=20')
        .then(response => {
          this.tableData = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    },
};
</script>
