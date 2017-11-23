const initialState = {
    user: "donk",
  }

const reducer =  (state, action) => {

    console.log(state);

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
                currentDate: action.currentDate,
            });
        case "STORE_CURRENT_MONTH":
            if (!state.selectedMonth) {
                return Object.assign({}, state, {
                    currentMonth: action.currentMonth,
                    selectedMonth: action.currentMonth,
                    dates: action.dates
                })
            } else {
                return Object.assign({}, state, {
                    currentMonth: action.currentMonth,
                    dates: action.dates
                })
            };
        case "STORE_SELECTED_DATE":
            return Object.assign({}, state, {
                selectedDate: action.selectedDate
            });
        case "STORE_SELECTED_MONTH":
            return Object.assign({}, state, {
                selectedMonth: action.selectedMonth,
                dates: action.dates
            });
        case "STORE_SELECTED_VIEW":
            return Object.assign({}, state, {
                selectedView: action.selectedView
            });
        case "STORE_YEARLY_VIEW_DATA":
            return Object.assign({}, state, {
                yearlyViewData: action.yearlyViewData
            });
        case "STORE_MONTHLY_VIEW_DATA":
            return Object.assign({}, state, {
                monthlyViewData: action.monthlyViewData
            });
        }
    }

  export default reducer;