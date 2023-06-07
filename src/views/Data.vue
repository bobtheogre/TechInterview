<template>
  <DataTable />
</template>

<script>
  import DataTable from "../components/DataTable";

  export default {
    name: "DataPage",

    components: {
      "DataTable": DataTable
    }
  };
</script>