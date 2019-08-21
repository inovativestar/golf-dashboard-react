const actions = {
    load_data_profile: "LOAD_DATA_PROFILE",
    getDataProfile: () => {
      //console.log("community data called");
      return (dispatch) => {
       // console.log("dispatch called");
        dispatch({
          type: "GET_PROFILE"
        })
      }
    }
  
  
  }
  
  export default actions