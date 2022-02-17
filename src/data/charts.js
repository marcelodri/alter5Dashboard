import { ThemeColors } from '../utils'
const colors = ThemeColors()

export const lineChartData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: '',
      data: [54, 63, 60, 65, 60, 68, 60],
      borderColor: colors.themeColor1,
      pointBackgroundColor: colors.foregroundColor,
      pointBorderColor: colors.themeColor1,
      pointHoverBackgroundColor: colors.themeColor1,
      pointHoverBorderColor: colors.foregroundColor,
      pointRadius: 6,
      pointBorderWidth: 2,
      pointHoverRadius: 8,
      fill: false
    }
  ]
}

export const polarAreaChartData = {
  labels: ['Cakes', 'Desserts', 'Cupcakes'],
  datasets: [
    {
      data: [80, 90, 70],
      borderWidth: 2,
      borderColor: [colors.themeColor1, colors.themeColor2, colors.themeColor3],
      backgroundColor: [
        colors.themeColor1_10,
        colors.themeColor2_10,
        colors.themeColor3_10
      ]
    }
  ]
}

export const areaChartData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: '',
      data: [54, 63, 60, 65, 60, 68, 60],
      borderColor: colors.themeColor1,
      pointBackgroundColor: colors.foregroundColor,
      pointBorderColor: colors.themeColor1,
      pointHoverBackgroundColor: colors.themeColor1,
      pointHoverBorderColor: colors.foregroundColor,
      pointRadius: 4,
      pointBorderWidth: 2,
      pointHoverRadius: 5,
      fill: true,
      borderWidth: 2,
      backgroundColor: colors.themeColor1_10
    }
  ]
}

export const scatterChartData = {
  datasets: [
    {
      borderWidth: 2,
      showLine: false,
      label: 'Cakes',
      borderColor: colors.themeColor1,
      backgroundColor: colors.themeColor1_10,
      data: [
        { x: 62, y: -78 },
        { x: -0, y: 74 },
        { x: -67, y: 45 },
        { x: -26, y: -43 },
        { x: -15, y: -30 },
        { x: 65, y: -68 },
        { x: -28, y: -61 }
      ]
    },
    {
      borderWidth: 2,
      showLine: false,
      label: 'Desserts',
      borderColor: colors.themeColor2,
      backgroundColor: colors.themeColor2_10,
      data: [
        { x: 79, y: 62 },
        { x: 62, y: 0 },
        { x: -76, y: -81 },
        { x: -51, y: 41 },
        { x: -9, y: 9 },
        { x: 72, y: -37 },
        { x: 62, y: -26 }
      ]
    }
  ]
}

export const barChartData = {
  labels: ['2022', '2023', '2024', '2025', '2026', '2027', '2028', '2029', '2030',
  '2031', '2032', '2033', '2034', '2035', '2036', '2037', '2038', '2039', '2040', 
  '2041', '2042', '2043', '2044', '2045'],
  datasets: [
    {
      label: ['Intereses'],
      borderColor: '#004561',
      backgroundColor: '#004561',
      data: [0, 105000, 107000, 101000, 102000, 101000, 103000, 104000, 104500,
      105000, 104500, 104400, 104500, 106000, 107000, 106500, 105500, 105000, 104500, 
      104000, 103500, 103000, 102500, 102000],
      order: 1
    },
    {
      label: ['Principal'],
      borderColor: '#5891AD',
      backgroundColor: '#5891AD',
      data: [0, 0, 49000, 51000, 52000, 53000, 54000, 55000, 56000,
      57000, 60000, 65000, 70000, 73000, 78000, 80000, 85000, 90000, 90000, 
      90000, 90000, 90500, 90000, 90500],
      order: 1
    },
    {
      label: ['Balance Deuda'],
      borderColor: '#D8BE75',
      //backgroundColor: 'transparent',
      data: [50000, 199000, 195000, 190000, 185000, 180000, 175000, 170000, 165000,
        160000, 155000, 150000, 145000, 140000, 135000, 130000, 125000, 120000, 1, 
      1, 1, 1, 1, 1],
      type: 'line',
      order: 0,
      pointRadius: 0,
    }
  ]
}

export const barChartData2 = {
  labels: ['2022', '2023', '2024', '2025', '2026', '2027', '2028', '2029', '2030',
  '2031', '2032', '2033', '2034', '2035', '2036', '2037', '2038', '2039', '2040', 
  '2041', '2042', '2043', '2044', '2045'],
  datasets: [
    {
      label: ['Merchant'],
      borderColor: '#D8BE75',
      backgroundColor: '#D8BE75',
      data: [0, 90000, 320000, 310000, 305000, 306000, 307000, 308000, 310000,
      309000, 310500, 312000, 315000, 318000, 317000, 320000, 325000, 330000, 340000, 
      350000, 380000, 370000, 360000, 350000],
      order: 2
    },
    {
      label: ['PPA'],
      borderColor: '#4CDC8E',
      backgroundColor: '#4CDC8E',
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
      0, 0, 0, 0, 0],
      order: 1
    },
    {
      label: ['RCSD'],
      borderColor: '#004561',
      //backgroundColor: 'transparent',
      data: [0, 399999, 399999, 399999, 399999, 399999, 399999, 399999, 399999,
        399999, 399999, 399999, 399999, 399999, 399999, 399999, 399999, 399999, 1, 
      1, 1, 1, 1, 1],
      type: 'line',
      order: 0
    }
  ]
}

export const radarChartData = {
  datasets: [
    {
      label: 'Stock',
      borderWidth: 2,
      pointBackgroundColor: colors.themeColor1,
      borderColor: colors.themeColor1,
      backgroundColor: colors.themeColor1_10,
      data: [80, 90, 70]
    },
    {
      label: 'Order',
      borderWidth: 2,
      pointBackgroundColor: colors.themeColor2,
      borderColor: colors.themeColor2,
      backgroundColor: colors.themeColor2_10,
      data: [68, 80, 95]
    }
  ],
  labels: ['Cakes', 'Desserts', 'Cupcakes']
}

export const pieChartData = {
  labels: ['Cakes', 'Cupcakes', 'Desserts'],
  datasets: [
    {
      label: '',
      borderColor: [colors.themeColor1, colors.themeColor2, colors.themeColor3],
      backgroundColor: [
        colors.themeColor1_10,
        colors.themeColor2_10,
        colors.themeColor3_10
      ],
      borderWidth: 2,
      data: [15, 25, 20]
    }
  ]
}

export const doughnutChartData = {
  labels: ['Cakes', 'Cupcakes', 'Desserts'],
  datasets: [
    {
      label: '',
      borderColor: [colors.themeColor3, colors.themeColor2, colors.themeColor1],
      backgroundColor: [
        colors.themeColor3_10,
        colors.themeColor2_10,
        colors.themeColor1_10
      ],
      borderWidth: 2,
      data: [15, 25, 20]
    }
  ]
}

export const smallChartData1 = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: 'Total Orders',
      data: [1250, 1300, 1550, 921, 1810, 1106, 1610],
      borderColor: colors.themeColor1,
      pointBorderColor: colors.themeColor1,
      pointHoverBackgroundColor: colors.themeColor1,
      pointHoverBorderColor: colors.themeColor1,
      pointRadius: 2,
      pointBorderWidth: 3,
      pointHoverRadius: 2,
      fill: false,
      borderWidth: 2,
      datalabels: {
        align: 'end',
        anchor: 'end'
      }
    }
  ]
}

export const smallChartData2 = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: 'Pending Orders',
      borderColor: colors.themeColor1,
      pointBorderColor: colors.themeColor1,
      pointHoverBackgroundColor: colors.themeColor1,
      pointHoverBorderColor: colors.themeColor1,
      pointRadius: 2,
      pointBorderWidth: 3,
      pointHoverRadius: 2,
      fill: false,
      borderWidth: 2,
      data: [115, 120, 300, 222, 105, 85, 36],
      datalabels: {
        align: 'end',
        anchor: 'end'
      }
    }
  ]
}

export const smallChartData3 = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: 'Total Orders',
      borderColor: colors.themeColor1,
      pointBorderColor: colors.themeColor1,
      pointHoverBackgroundColor: colors.themeColor1,
      pointHoverBorderColor: colors.themeColor1,
      pointRadius: 2,
      pointBorderWidth: 3,
      pointHoverRadius: 2,
      fill: false,
      borderWidth: 2,
      data: [350, 452, 762, 952, 630, 85, 158],
      datalabels: {
        align: 'end',
        anchor: 'end'
      }
    }
  ]
}

export const smallChartData4 = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: 'Total Orders',
      borderColor: colors.themeColor1,
      pointBorderColor: colors.themeColor1,
      pointHoverBackgroundColor: colors.themeColor1,
      pointHoverBorderColor: colors.themeColor1,
      pointRadius: 2,
      pointBorderWidth: 3,
      pointHoverRadius: 2,
      fill: false,
      borderWidth: 2,
      data: [200, 452, 250, 630, 125, 85, 20],
      datalabels: {
        align: 'end',
        anchor: 'end'
      }
    }
  ]
}

export const conversionChartData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: '',
      data: [65, 60, 68, 60, 58, 63, 60],
      borderColor: colors.themeColor2,
      pointBackgroundColor: colors.foregroundColor,
      pointBorderColor: colors.themeColor2,
      pointHoverBackgroundColor: colors.themeColor2,
      pointHoverBorderColor: colors.foregroundColor,
      pointRadius: 4,
      pointBorderWidth: 2,
      pointHoverRadius: 5,
      fill: true,
      borderWidth: 2,
      backgroundColor: colors.themeColor2_10
    }
  ]
}
