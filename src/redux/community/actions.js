const actions = {
    load_data_commuinty: "LOAD_DATA_COMMUNITY",
    getDataCommunity: () => {
      //console.log("community data called");
      return (dispatch) => {
       // console.log("dispatch called");
        dispatch({
          type: "GET_COMMUNITY"
        })
      }
    }
  
  
  }
  
  export default actions