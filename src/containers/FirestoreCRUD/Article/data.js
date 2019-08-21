// const columns = [
//     {
//       title: 'Ranked',
//       dataIndex: 'title',
//       key: 'title',
//       width: '150px',
//       sorter: (a, b) => {
//         if (a.title < b.title) return -1;
//         if (a.title > b.title) return 1;
//         return 0;
//       },
//       render: (text, row) => {
//         const trimByWord = sentence => {
//           let result = sentence;
//           let resultArray = result.split(' ');
//           if (resultArray.length > 7) {
//             resultArray = resultArray.slice(0, 7);
//             result = resultArray.join(' ') + '...';
//           }
//           return result;
//         };

//         return trimByWord(row.title);
//       },
//     },
//     {
//       title: 'First Name',
//       dataIndex: 'description',
//       key: 'description',
//       width: '260px',
//       sorter: (a, b) => {
//         if (a.description < b.description) return -1;
//         if (a.description > b.description) return 1;
//         return 0;
//       },
//       render: (text, row) => {
//         const trimByWord = sentence => {
//           let result = sentence;
//           let resultArray = result.split(' ');
//           if (resultArray.length > 20) {
//             resultArray = resultArray.slice(0, 20);
//             result = resultArray.join(' ') + '...';
//           }
//           return result;
//         };

//         return trimByWord(row.description);
//       },
//     },
//     {
//       title: 'Last Name',
//       dataIndex: 'excerpt',
//       key: 'excerpt',
//       width: '220px',
//       sorter: (a, b) => {
//         if (a.excerpt < b.excerpt) return -1;
//         if (a.excerpt > b.excerpt) return 1;
//         return 0;
//       },
//       render: (text, row) => {
//         const trimByWord = sentence => {
//           let result = sentence;
//           let resultArray = result.split(' ');
//           if (resultArray.length > 8) {
//             resultArray = resultArray.slice(0, 8);
//             result = resultArray.join(' ') + '...';
//           }
//           return result;
//         };

//         return trimByWord(row.excerpt);
//       },
//     },
//     {
//       title: 'Spider Hcp',
//       dataIndex: 'slug',
//       width: '170px',
//       key: 'slug',
//       sorter: (a, b) => {
//         if (a.slug < b.slug) return -1;
//         if (a.slug > b.slug) return 1;
//         return 0;
//       },
//     },
//     {
//       title: 'Rounds',
//       dataIndex: 'slug',
//       width: '170px',
//       key: 'slug',
//       sorter: (a, b) => {
//         if (a.slug < b.slug) return -1;
//         if (a.slug > b.slug) return 1;
//         return 0;
//       },
//     },
//     {
//       title: 'Tour members',
//       dataIndex: 'slug',
//       width: '170px',
//       key: 'slug',
//       sorter: (a, b) => {
//         if (a.slug < b.slug) return -1;
//         if (a.slug > b.slug) return 1;
//         return 0;
//       },
//     },
//     {
//       title: 'last 10 rounds',
//       dataIndex: 'slug',
//       width: '100px',
//       key: 'slug',
//       sorter: (a, b) => {
//         if (a.slug < b.slug) return -1;
//         if (a.slug > b.slug) return 1;
//         return 0;
//       },
//     },
    
    
//   ];


  let dataSource = [{
    
    Ranked: '1',
    firstName: "Maheut",
    lastName: 'Nicolas ',
    spiderHcp:'+3.8',
    Rounds:'36',
    tourMembers:'',
    last10rounds:'Compare'
  }, 
  {
    
    Ranked: '2',
    firstName: "Maheut",
    lastName: 'Nicolas ',
    spiderHcp:'+3.8',
    Rounds:'36',
    tourMembers:'',
    last10rounds:'Compare'
  }, 
  {
    
    Ranked: '3',
    firstName: "Denis",
    lastName: 'Cedric',
    spiderHcp:'+2.7',
    Rounds:'78',
    tourMembers:'',
    last10rounds:'Compare'
  }, 
  {
    
    Ranked: '4',
    firstName: "Decott",
    lastName: 'Mathieu',
    spiderHcp:'+2.2',
    Rounds:'67',
    tourMembers:'',
    last10rounds:'Compare'
  }, 
];
  
  let columns = [{
    title: 'Ranked',
    dataIndex: 'Ranked',
    key: 'Ranked',
  }, {
    title: 'First Name',
    dataIndex: 'firstName',
    key: 'firstName',
  },
  {
    title: 'Last Name',
    dataIndex: 'lastName',
    key: 'lastName',
  },
  {
    title: 'Spider Hcp',
    dataIndex: 'spiderHcp',
    key: '',
  },
  {
    title: 'Rounds',
    dataIndex: 'Rounds',
    key: 'Rounds',
  },
  {
    title: 'Tour members',
    dataIndex: 'tourMembers',
    key: 'tourMembers',
  },
  {
    title: 'last 5 rounds',
    dataIndex: 'last10rounds',
    key: 'last10rounds',
  },
 ];
  let data = {};
export default data = {
    dataSource:dataSource,columns:columns
};