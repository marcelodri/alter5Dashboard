<template>
    <div class="chart card-body pt-0">
      <bar-Chart :data="barChartData2" container-class2="chart" :style="{ height: '300px' }" shadow />
    </div>
</template>
<script>
import BarChart from "../../components/Charts/Bar2";
import { barChartData2 } from "../../data/charts";

export default {
  components: {
    "bar-Chart": BarChart
  },
  data() {
    return {
      barChartData2
    };
  }
};
</script>
