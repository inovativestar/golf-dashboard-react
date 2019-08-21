export const otherAttributes = [
 
  { title: 'First Name', value: 'firstName', type: 'phoneNumber' },
  { title: 'Last Name', value: 'lastName', type: 'phoneNumber' },
  { title: 'Email', value: 'mobile', type: 'phoneNumber' },
  { title: 'Gender', value: 'home', type: 'phoneNumber' },
  { title: 'Status', value: 'company', type: 'company' },
  { title: 'SG Handicap', value: 'work', type: 'phoneNumber' }
  
];

const contactList = JSON.parse(
  `[{
  "id": 22143,
  "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/dvdwinden/128.jpg",
  "firstName": "Benjamin",
  "lastName": "Jacobi",
  "name": "Benjamin Jacobi",
  "mobile": "8888888888",
  "home": "555555555",
  "company": "Casper Inc",
  "work": "777777777777"
}]`
);

export default class fakeData {
  constructor(size = 10) {
    this.size = size;
    this.datas = [];
  }
  dataModel(index) {
    return contactList[index];
  }
  getObjectAt(index) {
    if (index < 0 || index > this.size) {
      return undefined;
    }
    if (this.datas[index] === undefined) {
      this.datas[index] = this.dataModel(index);
    }
    return this.datas[index];
  }
  getAll() {
    if (this.datas.length < this.size) {
      for (let i = 0; i < this.size; i++) {
        this.getObjectAt(i);
      }
    }
    return this.datas
      .slice()
      .sort(
        (contact1, contact2) =>
          `${contact1.firstName}${contact1.LastName}`.toUpperCase() >
          `${contact2.firstName}${contact2.LastName}`.toUpperCase()
      );
  }

  getSize() {
    return this.size;
  }
}
