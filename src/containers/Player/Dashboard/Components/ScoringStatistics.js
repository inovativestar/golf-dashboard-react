import React, { Component } from 'react';
import { Table } from "antd";

import SpiderStatistics from './SpiderStatistics';
export default class ScoringStatistics extends Component {
    constructor(props) {
        super(props);
    }
    getTestData() {
        return {
            datasource: [
                {
                    name: "Ding",
                    strokesToPar: -2,
                    birdies: 2,
                    par: 5,
                    bogeys: 1,
                    doubleOrWorse: 1,
                    parThree: 0,
                    parFour: 0,
                    parFive: 1,
                    frontNine: 19.2,
                    backNine: 12.3,
                    firstSix: 13.3,
                    middleSix: 15.2,
                    lastSix: 16.3 
                },
                {
                    name: "Jack",
                    strokesToPar: -2,
                    birdies: 2,
                    par: 5,
                    bogeys: 1,
                    doubleOrWorse: 1,
                    parThree: 0,
                    parFour: 0,
                    parFive: 1,
                    frontNine: 19.2,
                    backNine: 12.3,
                    firstSix: 13.3,
                    middleSix: 15.2,
                    lastSix: 16.3 
                }
            ],
            columns : [
                  {
                    title: "Name",
                    dataIndex: "name",
                    key: "name"
                  },
                  {
                    title: "Strokes To Par",
                    dataIndex: "strokesToPar",
                    key: "strokesToPar"
                  },
                  {
                    title: "Birdies",
                    dataIndex: "birdies",
                    key: "birdies",
                  },
                  {
                    title: "Par",
                    dataIndex: "par",
                    key: "par"
                  },
                  {
                    title: "Bogeys",
                    dataIndex: "bogeys",
                    key: "bogeys"
                  },
                  {
                    title:"Double or worse",
                    dataIndex: "doubleOrWorse",
                    key: "doubleOrWorse"
                  },
                  {
                    title:"Par 3 Scoring",
                    dataIndex: "parThree",
                    key: "parThree"
                  },
                  {
                    title:"Par 4 Scoring",
                    dataIndex: "parFour",
                    key: "parFour"
                  },
                  {
                    title:"Par 5 Scoring",
                    dataIndex: "parFive",
                    key: "parFive"
                  },
                  {
                    title:"Front nine",
                    dataIndex: "frontNine",
                    key: "frontNine"
                  },
                  {
                    title:"Back nine",
                    dataIndex: "backNine",
                    key: "backNine"
                  },
                  {
                    title:"First 6",
                    dataIndex: "firstSix",
                    key: "firstSix"
                  },
                  {
                    title:"Middle 6",
                    dataIndex: "middleSix",
                    key: "middleSix"
                  },
                  {
                    title:"Last 6",
                    dataIndex: "lastSix",
                    key: "lastSix"
                  },
            ],
            layout: {
                type: "list",
                sections: [
                    {
                        name: "Section 1",
                        tables: [
                              {
                                title: "Strokes To Par",
                                dataIndex: "strokesToPar",
                                key: "strokesToPar"
                              },
                              {
                                title: "Birdies",
                                dataIndex: "birdies",
                                key: "birdies",
                              },
                              {
                                title: "Par",
                                dataIndex: "par",
                                key: "par"
                              },
                              {
                                title: "Bogeys",
                                dataIndex: "bogeys",
                                key: "bogeys"
                              },
                              {
                                title:"Double or worse",
                                dataIndex: "doubleOrWorse",
                                key: "doubleOrWorse"
                              }
                        ]
                    },
                    {
                        name: "Section 2",
                        tables: [
                              {
                                title:"Par 3 Scoring",
                                dataIndex: "parThree",
                                key: "parThree"
                              },
                              {
                                title:"Par 4 Scoring",
                                dataIndex: "parFour",
                                key: "parFour"
                              },
                              {
                                title:"Par 5 Scoring",
                                dataIndex: "parFive",
                                key: "parFive"
                              },
                        ]
                    },
                    {
                        name: "Section 3",
                        tables: [
                              {
                                title:"Front nine",
                                dataIndex: "frontNine",
                                key: "frontNine"
                              },
                              {
                                title:"Back nine",
                                dataIndex: "backNine",
                                key: "backNine"
                              },
                              {
                                title:"First 6",
                                dataIndex: "firstSix",
                                key: "firstSix"
                              },
                              {
                                title:"Middle 6",
                                dataIndex: "middleSix",
                                key: "middleSix"
                              },
                              {
                                title:"Last 6",
                                dataIndex: "lastSix",
                                key: "lastSix"
                              },
                        ]
                    }
                ]
            },
            partTableData: {
                "strokesToPar": {
                    title: "Strokes To Par",
                    columns: [
                        {
                            title: "Name",
                            dataIndex: "name",
                            key: "name",
                            width: "50%"
                        },
                        {
                            title: "Strokes To Par",
                            dataIndex: "strokesToPar",
                            key: "strokesToPar"
                        },
                    ], 
                    datasource: [
                        {
                            name: "Ding",
                            strokesToPar: -3
                        },
                        {
                            name: "Jack",
                            strokesToPar: -2
                        }
                    ]                
                },
                "birdies": {
                    title: "Birdies",
                    columns: [
                        {
                            title: "Name",
                            dataIndex: "name",
                            key: "name",
                            width: "50%"
                        },
                        {
                            title: "Birdies",
                            dataIndex: "birdies",
                            key: "birdies",
                        },
                    ], 
                    datasource: [
                        {
                            name: "Ding",
                            birdies: -3
                        },
                        {
                            name: "Cedric",
                            birdies: -2
                        }
                    ]                
                },
                "par": {
                    title: "Par",
                    columns: [
                        {
                            title: "Name",
                            dataIndex: "name",
                            key: "name",
                            width: "50%"
                        },
                        {
                            title: "Par",
                            dataIndex: "par",
                            key: "par"
                          },
                    ], 
                    datasource: [
                        {
                            name: "Ding",
                            par: -3
                        },
                        {
                            name: "Cedric",
                            par: -2
                        }
                    ]                
                },
                "bogeys": {
                    title: "Bogeys",
                    columns: [
                        {
                            title: "Name",
                            dataIndex: "name",
                            key: "name",
                            width: "50%"
                        },
                        {
                            title: "Bogeys",
                            dataIndex: "bogeys",
                            key: "bogeys"
                          },
                    ], 
                    datasource: [
                        {
                            name: "Ding",
                            bogeys: -3
                        },
                        {
                            name: "Cedric",
                            bogeys: -2
                        }
                    ]                
                },
                "doubleOrWorse": {
                    title: "Double or worse",
                    columns: [
                        {
                            title: "Name",
                            dataIndex: "name",
                            key: "name",
                            width: "50%"
                        },
                        {
                            title: "Double or worse",
                            dataIndex: "doubleOrWorse",
                            key: "doubleOrWorse",
                        },
                    ], 
                    datasource: [
                        {
                            name: "Ding",
                            doubleOrWorse: -3
                        },
                        {
                            name: "Cedric",
                            doubleOrWorse: -2
                        }
                    ]                
                },
                "parThree": {
                    title: "Par 3 Scoring",
                    columns: [
                        {
                            title: "Name",
                            dataIndex: "name",
                            key: "name",
                            width: "50%"
                        },
                        {
                            title: "Par 3 Scoring",
                            dataIndex: "parThree",
                            key: "parThree",
                        },
                    ], 
                    datasource: [
                        {
                            name: "Ding",
                            parThree: -3
                        },
                        {
                            name: "Cedric",
                            parThree: -2
                        }
                    ]                
                },
                "parFour": {
                    title: "Par 4 Scoring",
                    columns: [
                        {
                            title: "Name",
                            dataIndex: "name",
                            key: "name",
                            width: "50%"
                        },
                        {
                            title: "Par 4 Scoring",
                            dataIndex: "parFour",
                            key: "parFour",
                        },
                    ], 
                    datasource: [
                        {
                            name: "Ding",
                            parFour: -3
                        },
                        {
                            name: "Cedric",
                            parFour: -2
                        }
                    ]                
                },
                "parFive": {
                    title: "Par 5 Scoring",
                    columns: [
                        {
                            title: "Name",
                            dataIndex: "name",
                            key: "name",
                            width: "50%"
                        },
                        {
                            title: "Par 5 Scoring",
                            dataIndex: "parFive",
                            key: "parFive",
                        },
                    ], 
                    datasource: [
                        {
                            name: "Ding",
                            parFive: -3
                        },
                        {
                            name: "Cedric",
                            parFive: -2
                        }
                    ]                
                },
                "frontNine": {
                    title: "Front nine",
                    columns: [
                        {
                            title: "Name",
                            dataIndex: "name",
                            key: "name",
                            width: "50%"
                        },
                        {
                            title: "Front nine",
                            dataIndex: "frontNine",
                            key: "frontNine",
                        },
                    ], 
                    datasource: [
                        {
                            name: "Ding",
                            frontNine: -3
                        },
                        {
                            name: "Cedric",
                            frontNine: -2
                        }
                    ]                
                },
                "backNine": {
                    title: "Back nine",
                    columns: [
                        {
                            title: "Name",
                            dataIndex: "name",
                            key: "name",
                            width: "50%"
                        },
                        {
                            title: "Back nine",
                            dataIndex: "backNine",
                            key: "backNine",
                        },
                    ], 
                    datasource: [
                        {
                            name: "Ding",
                            backNine: -3
                        },
                        {
                            name: "Cedric",
                            backNine: -2
                        }
                    ]                
                },
                "firstSix": {
                    title: "First 6",
                    columns: [
                        {
                            title: "Name",
                            dataIndex: "name",
                            key: "name",
                            width: "50%"
                        },
                        {
                            title: "First 6",
                            dataIndex: "firstSix",
                            key: "firstSix",
                        },
                    ], 
                    datasource: [
                        {
                            name: "Ding",
                            firstSix: -3
                        },
                        {
                            name: "Cedric",
                            firstSix: -2
                        }
                    ]                
                },
                "middleSix": {
                    title: "Middle 6",
                    columns: [
                        {
                            title: "Name",
                            dataIndex: "name",
                            key: "name",
                            width: "50%"
                        },
                        {
                            title: "Middle 6",
                            dataIndex: "middleSix",
                            key: "middleSix",
                        },
                    ], 
                    datasource: [
                        {
                            name: "Ding",
                            middleSix: -3
                        },
                        {
                            name: "Cedric",
                            middleSix: -2
                        }
                    ]                
                },
                "lastSix": {
                    title: "Last 6",
                    columns: [
                        {
                            title: "Name",
                            dataIndex: "name",
                            key: "name",
                            width: "50%"
                        },
                        {
                            title: "Last 6",
                            dataIndex: "lastSix",
                            key: "lastSix",
                        },
                    ], 
                    datasource: [
                        {
                            name: "Ding",
                            lastSix: -3
                        },
                        {
                            name: "Cedric",
                            lastSix: -2
                        }
                    ]                
                }
            }
        }
    }

    render() {
        
        let sampleData = this.getTestData();
        const { columns, datasource, partTableData, layout } = sampleData;
        return (
            <SpiderStatistics
                columns={columns}
                datasource={datasource}
                partTableData={partTableData}
                layout={layout}
            />
        )

    }
}