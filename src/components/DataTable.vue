<template>
  <v-container>
    <v-row>
        <v-card>
          <v-card-title>
            Data Table
          </v-card-title>
          <v-card-subtitle><p>Uh oh. There is nothing there. Using the data at <a href="https://random-data-api.com/">https://random-data-api.com/</a>, populate the table
          below with headers and make it searchable. Also, expand the table to full width of the container. Let Bob know when complete.</p></v-card-subtitle>
          <v-data-table :headers="headers" :items="items" :search="search" class="elevation-1">
            <template v-slot:items="props">
              <td>{{ props.item.credit_card_number }}</td>
              <td>{{ props.item.credit_card_expiry_date }}</td>
              <td>{{ props.item.credit_card_type }}</td>
            </template>
          </v-data-table>
        </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        { text: 'Credit Card Number', value: 'credit_card_number' },
        { text: 'Expiry Date', value: 'credit_card_expiry_date' },
        { text: 'Card Type', value: 'credit_card_type' }
      ],
      items: [],
      search: ''
    };
  },
  created() {
    fetch('https://random-data-api.com/api/v2/credit_cards?size=100')
      .then(response => response.json())
      .then(data => {
        this.items = data;
      })
      .catch(error => {
        console.error('Error fetching credit card data:', error);
      });
  }
};
</script>
