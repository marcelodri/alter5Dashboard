<template>
  <div :class="containerClass">
    <canvas ref="chart"></canvas>
  </div>
</template>
<script>
import Chart from "chart.js";
// import { doughnutChartOptions } from "./config";
// import { centerTextPlugin } from "./utils";

export default {
  props: {
    data: {
      type: Object
    },
    containerClass: {
      type: String,
      default: "chart-container"
    },
    shadow: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    if (this.shadow) {
      Chart.defaults.doughnutWithShadow = Chart.defaults.doughnut;
      Chart.controllers.doughnutWithShadow = Chart.controllers.doughnut.extend({
        draw(ease) {
          Chart.controllers.doughnut.prototype.draw.call(this, ease);
          const chartCtx = this.chart.chart.ctx;
          chartCtx.save();
          chartCtx.shadowColor = "rgba(0,0,0,0.15)";
          chartCtx.shadowBlur = 10;
          chartCtx.shadowOffsetX = 0;
          chartCtx.shadowOffsetY = 10;
          chartCtx.responsive = true;
          Chart.controllers.doughnut.prototype.draw.apply(this, arguments);
          chartCtx.restore();
        }
      });
    }
    const ctx = this.$refs.chart;
    new Chart(ctx, {
      // type: this.shadow ? "doughnutWithShadow" : "doughnut",
      data: this.data,
      // options: doughnutChartOptions,
      // plugins: [centerTextPlugin]
      type: 'doughnut',
      // data: {
      //     labels: [''],
      //     datasets: [
      //         {
      //             label: 'Your legend label',
      //             data: [155,100],
      //             backgroundColor: '#54ACEF'
      //         }
      //     ]
      // },
      options: {
          maintainAspectRatio: false,
          plugins: {
              legend: false // Hide legend
          },
          scales: {
              y: {
                  display: false // Hide Y axis labels
              },
              x: {
                  display: false // Hide X axis labels
              }
          }   
      }
    });
  }
};
</script>

<style scoped>
.progress-bar-circle {
  height: 60px!important;
}
.progress-bar-circle {
  height: 60px!important;
}
.chart-container canvas {
  width: 50px!important;
}
.progress-bar-circle {
  height: 60px;
}
.dashboard-donut-chart {
  height: 60px!important;
}


</style>