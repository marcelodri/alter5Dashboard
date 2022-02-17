<template>
  <b-card class="card-donut">
    <div class="dashboard-donut-chart">
      <doughnut-chart :data="doughnutChartData" shadow />
    </div>
  </b-card>
</template>
<script>
import DoughnutChart from "../../components/Charts/Doughnut";
import { doughnutChartData } from "../../data/charts";

export default {
  components: {
    "doughnut-chart": DoughnutChart
  },
  data() {
    return {
      doughnutChartData
    };
  }
};
</script>
<style scoped>
  .card  {
    box-shadow: none !important;
  }
  .card-donut .card-body{
    padding: 0px 2px 19px;
  }
</style>
