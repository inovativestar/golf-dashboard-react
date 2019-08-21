import React, { Component } from "react";
import { Link } from "react-router-dom";
import Checkbox, {
  CheckboxGroup
} from '../../../components/uielements/checkbox';
import Button from '../../../components/uielements/button';

const localGroups = 'localGroups';
const localStudents = 'localStudents';
var tableData = {
  columns:{
    "group":[
      {
        title: "Name of Group",
        dataIndex: "title",
        key: "title"
      },
      {
        title: "Students Count",
        dataIndex: "scount",
        key: "scount"
      },
      {
        title: "Spider Rankings (link)",
        dataIndex: "view",
        key: "view",
        render: (text, record) => {
          return (
            <Link to="/dashboard/coachspiderrankings">Spider Rankings</Link>
          );
        }
      },
      {
        title: "Edit Group",
        dataIndex: "egroup",
        key: "egroup",
        render: (text, record) => {
          return (
            <Link to={record.egroup}>Edit</Link>
          );
        }
      },
    ],
    "students":[
      {
        title: "Name/Firstname",
        dataIndex: "name",
        key: "name"
      },
      {
        title: "Handicap",
        dataIndex: "handicap",
        key: "handicap"
      },
      {
        title: "Scoring Average",
        dataIndex: "scoring",
        key: "scoring"
      },
      {
        title: "Rounds",
        dataIndex: "rounds",
        key: "rounds"
      },
    ],
    "studentsgroup":[
      {
        title: "Name/Firstname",
        dataIndex: "name",
        key: "name"
      },
      {
        title: "Group",
        dataIndex: "groupname",
        key: "groupname",
        render: (text, record) => {
          return (
            <Button type="primary">REMOVE</Button>
          );
        }
      },
    ],
  },

  dataSource:{
    "group":[
      {
        key: "1",
        title: "abcd",
        scount: "2",
        view: "/dashboard/admincommunity/viewgroup/abcd",
        egroup: "/dashboard/admincommunity/editgroup/abcd",
      },
    ],
    "students":[
      {
        key: "1",
        name: "qw",
        handicap: "yes",
        scoring: "10",
        rounds: "1",
        groupname:""
      },
      {
        key: "",
        name: "er",
        handicap: "no",
        scoring: "1",
        rounds: "2",
        groupname:""
      },
      {
        name: "ty",
        handicap: "no",
        scoring: "4",
        rounds: "5",
        groupname:""
      },
      {
        name: "ui",
        handicap: "yes",
        scoring: "7",
        rounds: "8",
        groupname:""
      },
    ],
  }
};

const fakeData = {
  "group":[
    {
      key: "1",
      name: "Spider Group",
      scount: "2",
      view: "",
      egroup: "",
    },
    {
      key: "1",
      name: "Spider Group",
      scount: "2",
      view: "",
      egroup: "",
    },
    {
      key: "1",
      name: "Spider Group",
      scount: "2",
      view: "",
      egroup: "",
    },
  ],
  "student": [
    {
      key: "1",
      ranking: "1",
      name: "Ding",
      groupName: "Spider Group",
      nbrRounds: "8",
      handicap: "-2",

    },
    {
      key: "1",
      ranking: "2",
      name: "Jong",
      groupName: "Spider Group",
      nbrRounds: "8",
      handicap: "-2",

    }
  ]
}

const createDemoGroups = () => {
  const localData = localStorage.getItem(localGroups);
  if (localData) {
    try {
      const groups = JSON.parse(localData);
      if (groups && groups.length > 0) {
        return groups;
      }
    } catch (e) {}
  }
  console.log(fakeData.group);
  return fakeData.group;
};

const createDemoStudents = () => {
  const localData = localStorage.getItem(localStudents);
  if (localData) {
    try {
      const students = JSON.parse(localData);
      if (students && students.length > 0) {
        return students;
      }
    } catch (e) {}
  }
  return fakeData.student;
};

export {
  tableData,
  fakeData,
  createDemoGroups,
  createDemoStudents
}
