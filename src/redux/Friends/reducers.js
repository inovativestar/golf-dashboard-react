import actions from './actions';
import data from './fakeData.js';

const initState = {
  ...data
}

export default function reducer(state = initState, { type, payload, newRecord }) {
  //console.log("RECOLLECTION_RECIEVED", payload)
  switch (type) {
    case actions.load_data_friends:
      return {
        ...state,
        data_recollection: payload
      }
    case "RECOLLECTION_RECIEVED":
      //console.log("community reducer called", payload);
      return {
        ...state,
        recollectionData: payload
      }
    default:
      return state
  }
}