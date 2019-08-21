const basicData = {
  labels: [
    'OCT 17',
    'NOV 17',
    'DEC 17',
    'JAN 18',
    'FEB 18',
    'MAR 18',
    'APR 18',
    'MAY 18'
  ],

  datasets: [
    {
      title: 'Waggle Gained Total',
      color: 'light-blue',
      values: [25, 40, 30, 35, 8, 52, 17, -4]
    },
    {
      title: 'Average Performance',
      color: 'violet',
      values: [25, 50, -10, 15, 18, 32, 27, 14]
    },
    {
      title: 'Your Performance',
      color: 'blue',
      values: [15, 20, -3, -15, 58, 12, -17, 37]
    }
  ]
};

const heatMapData = {};
const currentDate = new Date();
const heatMapStart = new Date(new Date().setMonth(1, 1));
let timestamp = currentDate.getTime() / 1000;
timestamp = Math.floor(timestamp - timestamp % 86400).toFixed(1); // convert to midnight
for (let i = 0; i < 375; i++) {
  heatMapData[timestamp] = Math.floor(Math.random() * 6) + 1;
  timestamp = Math.floor(timestamp - 86400).toFixed(1);
}

const basicConfig = {
  height: 250,
  format_tooltip_x: d => (d + '').toUpperCase(),
  format_tooltip_y: d => d + ' pts'
};
const barChart = {
  header: 'Bar Chart',
  title: '',
  parent: '#frappeBarChart',
  parentId: 'frappeBarChart',
  type: 'bar',
  data: basicData,
  ...basicConfig
};



const updatedChart = {
  header: 'Updateable Chart',
  title: '',
  parent: '#frappeupdatedChart',
  parentId: 'frappeupdatedChart',
  data: basicData,
  type: 'line',
  show_dots: 0,
  heatline: 1
};

export {
  barChart,
  updatedChart,
  basicData
};
