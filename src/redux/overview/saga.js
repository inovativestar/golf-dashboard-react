import { put, takeEvery, all } from 'redux-saga/effects';
import { delay } from 'redux-saga';

function* getDataRecollection() {
  console.log("fecth recollection called");
  yield delay(4000);
  yield put({
    type: "RECOLLECTION_RECIEVED",
    payload: {
      "data_recollection": [
        {
          key: "1",
          name: "Cédric DENIS",
          handicap: "+2.7",
          scoring: "68.8",
          rounds: "10",
          ranking: "T12",
          image: "https://s3.amazonaws.com/uifaces/faces/twitter/bluefx_/128.jpg"
        }],
      "spider_focus": [
        {
          key: "1",
          off: "0.8",
          long: "0.1",
          approach: "0.9",
          green: "0.1",
          putting: "0.2",
          scoring: "0.1",
        }],
      "personal_records": [
        {
          key: "1",
          all: "Lowest Score (from list of rounds)",
          rounds: "64",
        },
        {
          key: "2",
          all: "Birdies (most birdies in one round)",
          rounds: "9",
        },
        {
          key: "3",
          all: "GIR (most greens in regulation in one round)",
          rounds: "15",
        },
        {
          key: "4",
          all: "Fairways (most fairways in one round %)",
          rounds: "71%",
        },
        {
          key: "5",
          all: "least amount of Putts (lowest nbr of putts recorded in a round)",
          rounds: "26",
        },
        {
          key: "6",
          all: "longest putt made (Longest distance single putt made during a round) no flash round",
          rounds: "14m"
        },
        {
          key: "7",
          all: "Best SG putting (best Strokes gained putting in a single full round) no flash round",
          rounds: "2.681"
        }
      ],
    }
  })
}


export default function* rootSaga() {
  yield all([
    takeEvery("GET_RECOLLECTION", getDataRecollection),
  ]);
}