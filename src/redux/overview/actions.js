const actions = {
  load_data_recollection: "LOAD_DATA_RECOLLECTION",
  getDataRecollection: () => {
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