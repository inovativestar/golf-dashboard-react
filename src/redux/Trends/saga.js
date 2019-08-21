import { put, takeEvery, all } from 'redux-saga/effects';
import { delay } from 'redux-saga';

function* getDataTrends() {
  console.log("fecth recollection called");
  yield delay(4000);
  yield put({
    type: "RECOLLECTION_RECIEVED",
    payload: {
      "data_recollection": [
        {
          key: "1",
          name: "Cédric DENIS trends redux",
          handicap: "+2.7",
          scoring: "68.8",
          rounds: "10",
          ranking: "T12",
          image: "https://s3.amazonaws.com/uifaces/faces/twitter/bluefx_/128.jpg"
        }],
     
   
    }
  })
}


export default function* rootSaga() {
  yield all([
    takeEvery("GET_TRENDS", getDataTrends),
  ]);
}