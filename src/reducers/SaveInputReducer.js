const saveInput = (state = initialState, action) => {
    switch (action.type) {
      case 'SAVE_LOCATION':
        fetch("http://localhost:3000/locations", {
          method: "post",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(action.data) 
        })
        return Object.assign({}, state, {
          data: state.data.concat(action.data),
        });
      default:
          return state;      
    }
  }

  export default saveInput;