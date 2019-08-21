const actions = {
    load_data_trends: "LOAD_DATA_TRENDS",
    getDataTrends: () => {
      console.log("recollection called");
      return (dispatch) => {
        console.log("dispatch called");
        dispatch({
          type: "GET_RECOLLECTION"
        })
      }
    }
  
  
  }
  
  export default actions