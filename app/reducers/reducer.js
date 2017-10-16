const reducer =  (state = [], action) => {
    switch (action.type) {
      case "ADD_USER":
        return [
            ...state,
            {
              user: action.user
            }
          ]
    }
  }

  export default reducer;