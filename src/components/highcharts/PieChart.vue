<template>
  <highcharts id="allcharts" class="chart" :options="chartOptions" :updateArgs="updateArgs"></highcharts>
</template>


<script>
import Highcharts from "highcharts";
import { EventBus } from "../../event-bus";
import params from "../../CONSTANTS";
import { setTimeout } from "timers";

export default {
  name: "Chart",
  mounted() {
    EventBus.$on("changeSelection", this.updatePie);
  },
  methods: {
    //function to update pie chart
    updatePie: function(value) {
      var data = value == "Domain 1" ? params.domain1 : params.domain2;
      this.chartOptions.series[0].data = [...data];
    }
  },
  data() {
    return {
      updateArgs: [true, true, { duration: 1000 }],
      chartOptions: {
        animation: {
          duration: 1000
        },
        chart: {
          type: "pie"
        },
        title: {
          text: "Pie chart"
        },
        tooltip: {
          valueSuffix: "",
          cursor: "pointer",
          headerFormat:
            "<b>Percentage :</b> {point.name}</b>: {point.percentage:.1f} % - "
        },
        plotOptions: {
          pie: {
            cursor: "pointer",
            dataLabels: {
              enabled: true,
              format: "<b>{point.name}</b>: {point.percentage:.1f} %",
              style: {
                color:
                  (Highcharts.theme && Highcharts.theme.contrastTextColor) ||
                  "black"
              }
            }
          }
        },
        series: [
          {
            name: "Brands",
            animation: {
              duration: 1000
            },
            colorByPoint: true,
            data: [
              {
                name: "Chrome",
                y: 61.41
              },
              {
                name: "Internet Explorer",
                y: 11.84
              },
              {
                name: "Firefox",
                y: 10.85
              }
            ],
            point: {
              events: {
                click: function() {
                  let params = { y: this.y, name: this.name };
                  EventBus.$emit("showtable");
                  setTimeout(function() {
                    EventBus.$emit("updateTable", params);
                  },100);
                }
              }
            }
          }
        ]
      }
    };
  },
  destroyed() {
    EventBus.$off("changeSelection", this.updatePie);
    EventBus.$off("showtable", this.showTable);
  }
};
</script>
<style scoped>
</style>
