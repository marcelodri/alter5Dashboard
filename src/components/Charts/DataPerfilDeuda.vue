<template>
    <div class="chart2 card-body pt-0">
      <bar-Chart :data="barChartData" container-class="chart" :style="{ height: '300px' }" shadow />
    </div>
</template>
<script>
import BarChart from "../../components/Charts/Bar";
import { barChartData } from "../../data/charts";

export default {
  components: {
    "bar-Chart": BarChart
  },
  data() {
    return {
      barChartData
    };
  }
};
</script>
<style scoped>
::v-deep .chart2 .chartjs-size-monitor .chartjs-render-monitor {
  height: 300px!important;
}
</style>