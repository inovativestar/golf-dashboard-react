const actions = {
    load_data_rounds: "LOAD_DATA_rounds",
    getDataRounds: () => {
      //console.log("community data called");
      return (dispatch) => {
       // console.log("dispatch called");
        dispatch({
          type: "GET_ROUNDS"
        })
      }
    }
  
  
  }
  
  export default actions