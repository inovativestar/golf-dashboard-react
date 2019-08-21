import clone from 'clone';
import React from 'react';

const tableData = {

  columns:{
    "table1":[
      {
        title: "List of selection + filters to generate SPIDER RANKINGS",
        dataIndex: "title",
        key: "title"
      },
      {
        title: "",
        dataIndex: "value",
        key: "value"
      },
    ],
  },

  dataSource:{
    "table1":[
      {
        key: "1",
        title: "All rounds",
        value: "1",
      },
      {
        key: "2",
        title: "Selected round",
        value: "2",
      },
      {
        key: "3",
        title: "Best 5",
        value: "3",
      },
      {
        key: "4",
        title: "Worst 5",
        value: "4",
      },
    ],
  }
};

const defaultOptions = [
  {
    id: 'disabled',
    title: 'Disabled',
    trueValue: true,
    falseValue: false,
    value: false
  },
  {
    id: 'showDefaultInputIcon',
    title: 'Show Defaut Icon',
    trueValue: true,
    falseValue: false,
    value: false
  },
  {
    id: 'isRTL',
    title: 'Enable RTL',
    trueValue: true,
    falseValue: false,
    value: false
  },
  {
    id: 'numberOfMonths',
    title: 'Single Month Enable',
    trueValue: 1,
    falseValue: 2,
    value: 2
  },
  {
    id: 'enableOutsideDays',
    title: 'Enable Outside Days',
    trueValue: true,
    falseValue: false,
    value: false
  },
  {
    id: 'keepOpenOnDateSelect',
    title: 'Keep Open On Date Select',
    trueValue: true,
    falseValue: false,
    value: false
  }
];
const configs = [
  {
    id: 'SingleDatePicker',
    title: 'Single Date Picker',
    options: [
      ...clone(defaultOptions),
      {
        id: 'placeholder',
        title: 'Custom Placeholder',
        trueValue: 'Custom Date',
        falseValue: undefined,
        value: undefined
      }
    ]
  },
  {
    id: 'DateRangePicker',
    title: 'Date Range Picker',
    options: [
      ...clone(defaultOptions),
      {
        id: 'startDatePlaceholderText',
        title: 'Custom Start',
        trueValue: 'C start',
        falseValue: undefined,
        value: undefined
      },
      {
        id: 'endDatePlaceholderText',
        title: 'C end',
        trueValue: 'Custom Date',
        falseValue: undefined,
        value: undefined
      }
    ]
  }
];

const rtl = document.getElementsByTagName('html')[0].getAttribute('dir');
const withDirection = Component => props => {
  return <Component {...props} data-rtl={rtl} />;
};

export default withDirection
export {
  tableData,configs,rtl
}
