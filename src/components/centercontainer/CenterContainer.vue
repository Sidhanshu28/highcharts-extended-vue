<template>
  <div id="center-container" class="col" v-if="showDropdown" ref="centerc">
    <div class="row justify-content-center m-5">
      <div class="col text-center center-div p-5">
        <div class="row justify-content-center pb-2 mb-4">
          <div class="col dropdown-div">
            Domain : &ensp; &ensp;
            <select
              class="domain-button"
              id="dropdown-domain"
              v-model="selected"
            >Select domain
              <option
                class="dropdown-item"
                v-for="domain in domains"
                :value="domain.text"
                :key="domain.val"
              >{{domain.text}}</option>
            </select>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <keep-alive>
              <component :is="currentView"></component>
            </keep-alive>
          </div>
        </div>
        <div class="row">
          <div class="col" v-if="showtable">
            <DataTable/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PieChart from "../highcharts/PieChart";
import DataTable from "../datatable";
import { EventBus } from "../../event-bus";
import params from "../Leftbar";

export default {
  name: "CenterContainer",
  components: {
    PieChart: PieChart,
    DataTable
  },
  methods: {
    //function to show dashboard
    showDashboard: function() {
      this.showDropdown = true;
    },
    //function to show table
    showTable: function(){
      this.showtable = true;
    }
  },
  watch: {
    //watcher to check for changes in dropdown selection
    selected: function(v) {
      EventBus.$emit("changeSelection", v);
    }
  },
  mounted() {
    //getting calls from left bar and pie chart
    EventBus.$on("showDashboard", this.showDashboard);
    EventBus.$on("showtable", this.showTable);
  },
  destroyed() {
    EventBus.$off("showDashboard");
  },
  data() {
    return {
      showtable: false,
      currentView: "pieChart",
      showDropdown: false,
      domains: [
        { text: "Domain 1", val: "d1" },
        { text: "Domain 2", val: "d2" }
      ],
      selected: "Domain 1"
    };
  }
};
</script>
<<style scoped>
.center-div{
  background:lightgray;
  /* height:80%; */
  border-radius:10px;
  width:75%;
}
#dropdown-domain{
  width:200px;
  text-align:center;
}
</style>
  
</style>

