import { put, takeEvery, all } from 'redux-saga/effects';
import { delay } from 'redux-saga';

function* getDataProfile() {
 // console.log("fecth recollection called");
  yield delay(4000);
  yield put({
    type: "RECOLLECTION_RECIEVED",
    payload: {
      "data_recollection": [
        {
            "id": 22143,
            "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/dvdwinden/128.jpg",
            "firstName": "redux Benjamin",
            "lastName": "Jacobi",
            "name": "Benjamin Jacobi",
            "mobile": "8888888888",
            "home": "555555555",
            "company": "Casper Inc",
            "work": "777777777777"
          }
    
    ],
     
      
    }
  })
}


export default function* rootSaga() {
  yield all([
    takeEvery("GET_PROFILE", getDataProfile),
  ]);
} 