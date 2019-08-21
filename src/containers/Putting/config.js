const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

const barSettings = {
  height: 350,
};

const basicData = {
  labels: [
    '12am-3am',
    '3am-6am',
    '6am-9am',
    '9am-12pm',
    '12pm-3pm',
    '3pm-6pm',
    '6pm-9pm',
    '9pm-12am'
  ],

  datasets: [
    {
      title: 'Some Data',
      color: 'light-blue',
      values: [25, 40, 30, 35, 8, 52, 17, -4]
    },
    {
      title: 'Another Set',
      color: 'violet',
      values: [25, 50, -10, 15, 18, 32, 27, 14]
    },
  ]
};

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

const tableData = {

  columns:{
    "table1":[
      {
        title: "Title",
        dataIndex: "title",
        key: "title",
      },
      {
        title: "Last Round",
        dataIndex: "lround",
        key: "lround"
      },
      {
        title: "Last Five",
        dataIndex: "lfive",
        key: "lfive"
      },
    ],
  },

  dataSource:{
    "table1":[
      {
        key: "1",
        title: "Total putts",
        lround: "26",
        lfive: "28.8",
      },
      {
        key: "2",
        title: "Putt per hole",
        lround: "1.4",
        lfive: "1.6",
      },
      {
        key: "3",
        title: "Putt per hole GIR",
        lround: "1.5",
        lfive: "1.7",
      },
      {
        key: "4",
        title: "Putts per hole non GIR ",
        lround: "1.3",
        lfive: "1.3",
      },
      {
        key: "5",
        title: "1-putt",
        lround: "10",
        lfive: "6.2",
      },
      {
        key: "6",
        title: "3-putts and+",
        lround: "0",
        lfive: "0.2",
      }
    ],
  }
};


export {
  data,
  barSettings,
  barChart,
  tableData
}
