import { put, takeEvery, all } from 'redux-saga/effects';
import { delay } from 'redux-saga';

function* getDataPutting() {
  //console.log("fecth recollection called");
  yield delay(4000);
  yield put({
    type: "RECOLLECTION_RECIEVED",
    payload: {
      "data_recollection": [
        {
            key: "3",
            title: "Putt per hole GIR payload redux",
            lround: "1.5",
            lfive: "1.7",
          },
          {
            key: "4",
            title: "Putts per hole non GIR  payload redux",
            lround: "1.3",
            lfive: "1.3",
          }
    
    
    ],
     
      
    }
  })
}


export default function* rootSaga() {
  yield all([
    takeEvery("GET_PUTTING", getDataPutting),
  ]);
}