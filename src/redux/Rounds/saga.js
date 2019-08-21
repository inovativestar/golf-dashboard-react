import { put, takeEvery, all } from 'redux-saga/effects';
import { delay } from 'redux-saga';

function* getDataRounds() {
 // console.log("fecth recollection called");
  yield delay(4000);
  yield put({
    type: "RECOLLECTION_RECIEVED",
    payload: {
      "data_recollection": [
        {
    
            Ranked: '1',
            firstName: "redux Maheut",
            lastName: 'Nicolas ',
            spiderHcp:'+3.8',
            Rounds:'36',
            tourMembers:'',
            last10rounds:' Compare'
          }, 
          {
            
            Ranked: '2',
            firstName: "redux Maheut",
            lastName: 'Nicolas ',
            spiderHcp:'+3.8',
            Rounds:'36',
            tourMembers:'',
            last10rounds:'Compare'
          },
    
    
    ],
     
      
    }
  })
}


export default function* rootSaga() {
  yield all([
    takeEvery("GET_ROUNDS", getDataRounds),
  ]);
}