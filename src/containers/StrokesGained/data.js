const tableData = {

  columns:{
      "table1":[
        {
        title: "Title",
        dataIndex: "title",
        key: "title"
      },
      {
        title: "Baseline",
        dataIndex: "baseline",
        key: "baseline"
      },
      {
        title: "Last 5 rounds",
        dataIndex: "fiveRounds",
        key: "fiveRounds"
      },
      {
        title: "Last 10 rounds",
        dataIndex: "tenRounds",
        key: "tenRounds"
      }
    ],
  },
 
  dataSource:{
      "table1":[
      {
        key: "1",
        title: "Putting <1m",
        baseline: "0.234",
        fiveRounds: "0.013",
        tenRounds: "1.143"
      },
      {
        key: "2",
        title: "Putting 1-2m",
        baseline: "-0.123",
        fiveRounds: "-0.345",
        tenRounds: "-0.652"
      },
      {
        key: "3",
        title: "Putting 2-3m",
        baseline: "2.342",
        fiveRounds: "1.234",
        tenRounds: "2.124"
      },
      {
        key: "4",
        title: "60-70m",
        baseline: "-0.985",
        fiveRounds: "-0.231",
        tenRounds: "-0.453"
      },
      {
        key: "5",
        title: "70-80m",
        baseline: "0.342",
        fiveRounds: "0.014",
        tenRounds: "0.012"
      },
    ],
  }
}

export default tableData;
