<template>
  <!-- import { watch } from 'fs'; -->
  <div id="leftbar" class="col-2 fixed-left">
    <div class="row justify-content-end">
      <div class="class">
        <i class="material-icons" id="leftbar-icon" v-on:click="slideLeft">menu</i>
      </div>
    </div>
    <div class="row justify-content-center p-1 leftbar-menu-main">
      <div class="col text-center p-2 dashboard" @click="showDashboard">Dashboard</div>
    </div>
  </div>
</template>

<script>
import { EventBus } from "../event-bus";

export default {
  name: "Leftbar",
    data() {
    return {
     
    };
  },
  methods: {
    slideLeft: function() {
      $("#leftbar").toggleClass("collapse-div");
    },
    showDashboard: function(){
      EventBus.$emit('showDashboard');
    }
  },
};
</script>
<style scoped>
.dashboard{
  background:white;
  border-radius: 10px;
  cursor: pointer;
}
.dashboard:hover{
  background:lightgray;
}
</style>