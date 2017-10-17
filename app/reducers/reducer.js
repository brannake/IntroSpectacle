const initialState = {
    user: "donk"
  }

const reducer =  (state, action) => {

    if (typeof state === 'undefined') {
        return initialState
    }

    switch (action.type) {
        case "ADD_USER":
            console.log(state);
            console.log(action.user);
            return Object.assign({}, state, {
                user: action.user
            });
        case "AUTHENTICATE_USER":
            console.log(state);
            console.log(action.user);
            return Object.assign({}, state, {
                authenticated: true
            });
        case "STORE_IMAGE_DATA":
        console.log("DIS RENDER")
            return Object.assign({}, state, {
                imageData: action.imageData
            });
        }
    }

  export default reducer;