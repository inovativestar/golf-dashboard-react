const actions = {
    load_data_strokes_gained: "LOAD_DATA_STROKESGAINED",
    getDataStrokesGained: () => {
     // console.log("recollection called");
      return (dispatch) => {
        //console.log("dispatch called");
        dispatch({
          type: "GET_STROKESGAINED"
        })
      }
    }
  
  
  }
  
  export default actions