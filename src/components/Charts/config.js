import { chartTooltip } from './utils'

export const lineChartOptions = {
  legend: {
    display: false
  },
  responsive: true,
  maintainAspectRatio: false,
  tooltips: chartTooltip,
  plugins: {
    datalabels: {
      display: false
    }
  },
  scales: {
    yAxes: [
      {
        gridLines: {
          display: true,
          lineWidth: 1,
          color: 'rgba(0,0,0,0.1)',
          drawBorder: false
        },
        ticks: {
          beginAtZero: true,
          stepSize: 5,
          min: 50,
          max: 70,
          padding: 20
        }
      }
    ],
    xAxes: [
      {
        gridLines: {
          display: false
        }
      }
    ]
  }
}
export const polarAreaChartOptions = {
  legend: {
    position: 'bottom',
    labels: {
      padding: 30,
      usePointStyle: true,
      fontSize: 12
    }
  },
  responsive: true,
  maintainAspectRatio: false,
  scale: {
    ticks: {
      display: false
    }
  },
  plugins: {
    datalabels: {
      display: false
    }
  },
  tooltips: chartTooltip
}

export const areaChartOptions = {
  legend: {
    display: false
  },
  responsive: true,
  maintainAspectRatio: false,
  tooltips: chartTooltip,
  scales: {
    yAxes: [
      {
        gridLines: {
          display: true,
          lineWidth: 1,
          color: 'rgba(0,0,0,0.1)',
          drawBorder: false
        },
        ticks: {
          beginAtZero: true,
          stepSize: 5,
          min: 50,
          max: 70,
          padding: 20
        }
      }
    ],
    xAxes: [
      {
        gridLines: {
          display: false
        }
      }
    ]
  }
}

export const scatterChartOptions = {
  legend: {
    position: 'bottom',
    labels: {
      padding: 30,
      usePointStyle: true,
      fontSize: 12
    }
  },
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    yAxes: [
      {
        gridLines: {
          display: true,
          lineWidth: 1,
          color: 'rgba(0,0,0,0.1)',
          drawBorder: false
        },
        ticks: {
          beginAtZero: true,
          stepSize: 20,
          min: -80,
          max: 80,
          padding: 20
        }
      }
    ],
    xAxes: [
      {
        gridLines: {
          display: true,
          lineWidth: 1,
          color: 'rgba(0,0,0,0.1)'
        }
      }
    ]
  },
  tooltips: chartTooltip
}

export const barChartOptions = {
  legend: {
    position: 'top',
    labels: {
      padding: 30,
      usePointStyle: true,
      fontSize: 12
    }
  },
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    yAxes: [
      {
        display: true,
        position: 'right',
        stacked: true,
        ticks: {
          beginAtZero: true,
          stepSize: 50000,
          min: 0,
          max: 200000,
          padding: 20,
          callback: function(value) {
            if (parseInt(value) >= 1000) {
               return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+ ' €';
            } else {
               return value+ ' €';
            }
         }
          
        }
       }, 
       {
        display: true,
        position: 'left',
        gridLines: {
          display: true,
          lineWidth: 1,
          color: 'rgba(0,0,0,0.1)',
          drawBorder: false
        },
        ticks: {
          beginAtZero: true,
          stepSize: 50000,
          min: 0,
          max: 200000,
          padding: 20,
          callback: function(value) {
            if (parseInt(value) >= 1000) {
               return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+ ' €';
            } else {
               return value+ ' €';
            }
         }
        },
        stacked: true
    }],
    xAxes: [{
        gridLines: {
          display: false
        },
        stacked: true,
      }]
  },
  tooltips: chartTooltip
}

export const barChartOptions2 = {
  legend: {
    position: 'top',
    labels: {
      padding: 30,
      usePointStyle: true,
      fontSize: 12
    }
  },
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    yAxes: [
      {
        display: true,
        position: 'right',
        ticks: {
          beginAtZero: true,
          stepSize: 100000,
          min: 0,
          max: 400000,
          padding: 20,
          callback: function(value) {
            if (parseInt(value) >= 1000) {
               return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+ ' €';
            } else {
               return value+ ' €';
            }
         }
          
        }
       }, 
       {
        display: true,
        position: 'left',
        gridLines: {
          display: true,
          lineWidth: 1,
          color: 'rgba(0,0,0,0.1)',
          drawBorder: false
        },
        ticks: {
          beginAtZero: true,
          stepSize: 100000,
          min: 0,
          max: 400000,
          padding: 20,
          callback: function(value) {
            if (parseInt(value) >= 1000) {
               return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+ ' €';
            } else {
               return value+ ' €';
            }
         }
        },
        stacked: true
    }],
    xAxes: [{
        gridLines: {
          display: false
        },
        stacked: true,
      }]
  },
  tooltips: chartTooltip
}

export const radarChartOptions = {
  legend: {
    position: 'bottom',
    labels: {
      padding: 30,
      usePointStyle: true,
      fontSize: 12
    }
  },
  responsive: true,
  maintainAspectRatio: false,
  scale: {
    ticks: {
      display: false
    }
  },
  tooltips: chartTooltip
}

export const pieChartOptions = {
  legend: {
    position: 'bottom',
    labels: {
      padding: 30,
      usePointStyle: true,
      fontSize: 12
    }
  },
  responsive: true,
  maintainAspectRatio: false,
  title: {
    display: false
  },
  layout: {
    padding: {
      bottom: 20
    }
  },
  tooltips: chartTooltip
}

export const doughnutChartOptions = {
  legend: {
    display: false
  },
  //aspectRatio: 1,
  responsive: false,
  maintainAspectRatio: false,
  title: {
    display: false
  },
  cutoutPercentage: 80,
  layout: {
    padding: {
      bottom: 0
    }
  },
  tooltips: {
    display: false
  },
  mounted () {
    this.fillData()
  },
  
}

export const smallLineChartOptions = {
  layout: {
    padding: {
      left: 5,
      right: 5,
      top: 10,
      bottom: 10
    }
  },
  responsive: true,
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true
        },
        display: false
      }
    ],
    xAxes: [
      {
        display: false
      }
    ]
  }
  // tooltips: {
  //   intersect: false,
  //   enabled: false,
  //   custom: function(tooltipModel) {
  //     if (tooltipModel && tooltipModel.dataPoints) {
  //       var yLabel = tooltipModel.dataPoints[0].yLabel;
  //       var xLabel = tooltipModel.dataPoints[0].xLabel;
  //       var label = tooltipModel.body[0].lines[0].split(":")[0];
  //     //  changeState("$" + addCommas(yLabel), label + "-" + xLabel);
  //     }
  //   }
  // },
  // plugins:{[
  //   {
  //     afterInit: function(chart, options) {
  //       var yLabel = chart.data.datasets[0].data[0];
  //       var xLabel = chart.data.labels[0];
  //       var label = chart.data.datasets[0].label;
  //       changeState("$" + addCommas(yLabel), label + "-" + xLabel);
  //     }
  //   }
  // ]}
}
