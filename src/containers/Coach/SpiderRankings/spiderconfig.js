const spiderData = {
  labels: ['Total', 'Off The Tee', 'Long Shots and Lay Ups', 'Approach To The Green', 'Greenside', 'Putting'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(72,166,242,0.2)',
      borderColor: 'rgba(72,166,242,1)',
      pointBackgroundColor: 'rgba(72,166,242,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(72,166,242,1)',
      data: [65, 59, 90, 81, 56, 55]
    },
    {
      label: 'My Second dataset',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      pointBackgroundColor: 'rgba(255,99,132,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(255,99,132,1)',
      data: [28, 48, 40, 19, 96, 27]
    }
  ]
};

export {
  spiderData
}
