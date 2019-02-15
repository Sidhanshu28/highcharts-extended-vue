<template>
  <div class="row custom">
    <div class="col text-left p-2 mt-2">
      <table class="table text-center table-hover custom-table">
        <thead>
          <tr>
            <th v-for="head in header" :key="head">{{head}}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="col in cols" :key="col.sno" @click="createDataTable">
            <td>{{col.sno}}</td>
            <td>{{col.name}}</td>
            <td>{{col.val}}</td>
          </tr>
        </tbody>
      </table>
      <table class="table text-center table-hover custom-table" v-if="linkedTable">
        <thead>
          <tr>
            <th v-for="head in header" :key="head">{{head}}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="col in colsLinked" :key="col.sno">
            <td>{{col.sno}}</td>
            <td>{{col.name}}</td>
            <td>{{col.val}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { EventBus } from "../event-bus";
export default {
  name: "DataTable",
  beforeMount() {
    EventBus.$on("updateTable", this.updateTable);
  },
  methods: {
    updateTable: function(params) {
      this.cols = [{ sno: 1, name: params.name, val: params.y }];
      this.createDataTable();
    },
    createDataTable: function() {
      this.colsLinked = [];
      this.linkedTable = true;
      for (let i = 0; i < 3; i++) {
        this.colsLinked.push({
          sno: i+1,
          name: this.cols[0].name + "-v" + (i+1),
          val: 'prev val - '+ this.cols[0].val + '/ new value - '+ (Math.random() * 100.0).toFixed(2)
        });
      }
    }
  },
  data() {
    return {
      header: ["S.no.", "Name", "Value"],
      cols: [],
      linkedTable: false,
      colsLinked: []
    };
  },
  destroyed() {
    EventBus.$off("updateTable");
  }
};
</script>
<style scoped>
.custom-table {
  min-width: 100%;
  background: white;
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.14), 0 2px 2px 0 rgba(0, 0, 0, 0.12),
    0 1px 3px 0 rgba(0, 0, 0, 0.2);
  border-radius: 10px;
}
.custom-table tr {
  cursor: pointer;
  border: none;
}
.custom {
  transition: all 1s ease-in;
}
</style>
