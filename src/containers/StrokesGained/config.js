const basicConfig = {
  height: 250,
  format_tooltip_x: d => (d + '').toUpperCase(),
  format_tooltip_y: d => d + ' pts'
};

const data=[
  {  
    labels:[
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
  },
  {  labels: [
      '12am-3am',
      '3am-6am',
      '6am-9am',
      '9am-12pm',
      '12pm-3pm',
      '3pm-6pm',
      '6pm-9pm',
      '9pm-12am'],
      datasets: [
      {
        title: 'Some Data',
        color: 'light-blue',
        values: [2, 4, 3, 35, 8, 52, 17, -4]
      },
      {
        title: 'Another Set',
        color: 'violet',
        values: [2, 5, -1, 15, 18, 32, 27, 14]
      },]
  },
  {  labels: [
      '12am-3am',
      '3am-6am',
      '6am-9am',
      '9am-12pm',
      '12pm-3pm',
      '3pm-6pm',
      '6pm-9pm',
      '9pm-12am'],
      datasets: [
      {
        title: 'Some Data',
        color: 'light-blue',
        values: [5, 0, 0, 35, 8, 52, 17, -4]
      },
      {
        title: 'Another Set',
        color: 'violet',
        values: [5, 0, 0, 15, 18, 32, 27, 14]
      },]
  },
  {  
    labels:[
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
          values: [2, 40, 3, 5, 80, 59, 7, -14]
        },
        {
          title: 'Another Set',
          color: 'violet',
          values: [25, 90, -10, 10, 18, 32, 27, 1]
        },
    ]
  },
  {  
    labels:[
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
          values: [25, 40, 90, 35, 8, 59, 17, -1]
        },
        {
          title: 'Another Set',
          color: 'violet',
          values: [75, 59, -10, 15, 68, 32, 27, 14]
        },
    ]
  },
  {  
    labels:[
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
          values: [95, 4, 0, 35, 81, 52, 17, 28]
        },
        {
          title: 'Another Set',
          color: 'violet',
          values: [25, 24, -1, 15, 1, 39, 27, 14]
        },
    ]
  },
  {  
    labels:[
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
          values: [2, 20, 30, 40, 8, 52, 17, -4]
        },
        {
          title: 'Another Set',
          color: 'violet',
          values: [25, 50, -10, 15, 80, 30, 77, 29]
        },
    ]
  },
  {  
    labels:[
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
          values: [25, 4, 3, 35, 8, 52, 17, -4]
        },
        {
          title: 'Another Set',
          color: 'violet',
          values: [85, 50, -10, 78, 18, 32, 97, 1]
        },
    ]
  },

]

const barChart = {
  header: 'Bar Chart',
  title: '',
  parent: '#frappeBarChart',
  parentId: 'frappeBarChart',
  type: 'bar',
  data: data[0],
  ...basicConfig
};


export {
  barChart,
  data
}
