const actions = {
    load_data_friends: "LOAD_DATA_FRIENDS",
    getDataFriends: () => {
      console.log("community data called");
      return (dispatch) => {
       console.log("dispatch called");
        dispatch({
          type: "GET_FRIENDS"
        })
      }
    }
  
  
  }
  
  export default actions