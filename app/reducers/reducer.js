const initialState = {
    user: "donk",
  }

const reducer =  (state, action) => {

    if (typeof state === 'undefined') {
        return initialState
    }

    switch (action.type) {
        case "ADD_USER":
            return Object.assign({}, state, {
                user: action.user,
                selectedDate: ' '
            });
        case "AUTHENTICATE_USER":
            return Object.assign({}, state, {
                authenticated: true
            });
        case "STORE_IMAGE_DATA":
            return Object.assign({}, state, {
                imageData: action.imageData
            });
        case "STORE_CURRENT_DATE":
            return Object.assign({}, state, {
                currentDate: action.currentDate
            });
        case "STORE_CURRENT_MONTH":
            return Object.assign({}, state, {
                currentMonth: action.currentMonth
            });
        case "STORE_SELECTED_DATE":
            return Object.assign({}, state, {
                selectedDate: action.selectedDate
            });
        case "STORE_SELECTED_MONTH":
            return Object.assign({}, state, {
                selectedMonth: action.selectedMonth
            });
        case "STORE_SELECTED_VIEW":
            return Object.assign({}, state, {
                selectedView: action.selectedView
            });
        }
    }

  export default reducer;