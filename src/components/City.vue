<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="name" label="Name" width="180" />
    <el-table-column prop="id" label="Id" width="180" />
    <el-table-column prop="population" label="Population" />
    <el-table-column prop="countryCode" label="CountryCode" width="180" />
    <el-table-column prop="district" label="District" />
  </el-table>
</template>

<script lang="ts">
import axios from 'axios';

//import axios from 'axios';

export default{
  mounted() {
    axios.get("/cities").then((response)=>{//not function(response)
      this.tableData = response.data
      console.log(response.data)
    })
  },
  data(){
    return{
      tableData : [] //init
    }
  }
};
</script>