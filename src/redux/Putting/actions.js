const actions = {
    load_data_putting: "LOAD_DATA_PUTTING",
    getDataPutting: () => {
      //console.log("community data called");
      return (dispatch) => {
       // console.log("dispatch called");
        dispatch({
          type: "GET_PUTTING"
        })
      }
    }
  
  
  }
  
  export default actions