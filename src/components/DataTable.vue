<template>
  <v-container>
    <v-row>
        <v-card>
            <v-card-title>
                Data Table
            </v-card-title>
            <v-card-subtitle><p>Uh oh. There is nothing there. Using the data at <a href="https://random-data-api.com/">https://random-data-api.com/</a>, populate the table
      below with headers and make it searchable. Also, expand the table to full width of the container. Let Bob know when complete.</p></v-card-subtitle>
      <v-card-title>
      Random Beers
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="beers"
      :search="search"
    ></v-data-table>
    </v-card>
    </v-row>
    <v-row>
      
    </v-row>
  </v-container>
</template>

<script>

  export default {
    data () {
      return {
        search: '',
        headers: [
          {
            text: 'Brand',
            align: 'start',
            sortable: false,
            value: 'brand',
          },
          { text: 'Name', value: 'name' },
          { text: 'Style', value: 'style' },
          { text: 'Hop', value: 'hop' },
          { text: 'Yeast', value: 'yeast' },
          { text: 'Malts', value: 'malts' },
          { text: 'Ibu', value: 'ibu' },
          { text: 'Alcohol', value: 'alcohol' },
          { text: 'Blg', value: 'blg' },
        ],
        beers: [],
      }
    },

    mounted() {
    this.loading = true;
    this.error = null;

    fetch('https://random-data-api.com/api/v2/beers?size=100')
      .then(response => response.json())
      .then(data => {
        this.beers = data;
      })
      .catch(error => {
        this.error = error;
      })
      .finally(() => {
        this.loading = false;
      });
    },

  }
</script>
