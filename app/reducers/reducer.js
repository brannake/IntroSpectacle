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
                    selectedMonthKey: action.selectedMonthKey,
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
                selectedMonthKey: action.selectedMonthKey,
                dates: action.dates
            });
        case "STORE_SELECTED_VIEW":
            return Object.assign({}, state, {
                selectedView: action.selectedView
            });
        case "STORE_SELECTED_EMOTION":
        return Object.assign({}, state, {
            selectedEmotion: action.selectedEmotion
        });
        case "STORE_YEARLY_VIEW_DATA_JOY":
            return Object.assign({}, state, {
                yearlyViewDataJoy: action.yearlyViewDataJoy,
                graphData: action.yearlyViewDataJoy,
                selectedEmotion: "joy",
                selectedView: "yearly"
            });
        case "STORE_YEARLY_VIEW_DATA_FEAR":
            return Object.assign({}, state, {
                yearlyViewDataFear: action.yearlyViewDataFear
            });
        case "STORE_YEARLY_VIEW_DATA_ANGER":
            return Object.assign({}, state, {
                yearlyViewDataAnger: action.yearlyViewDataAnger
            });
        case "STORE_YEARLY_VIEW_DATA_DISGUST":
            return Object.assign({}, state, {
                yearlyViewDataDisgust: action.yearlyViewDataDisgust
            });
        case "STORE_MONTHLY_VIEW_DATA_JOY":
            return Object.assign({}, state, {
                monthlyViewDataJoy: action.monthlyViewDataJoy
            });
        case "STORE_MONTHLY_VIEW_DATA_FEAR":
            return Object.assign({}, state, {
                monthlyViewDataFear: action.monthlyViewDataFear
            });
        case "STORE_MONTHLY_VIEW_DATA_ANGER":
            return Object.assign({}, state, {
                monthlyViewDataAnger: action.monthlyViewDataAnger
            });
        case "STORE_MONTHLY_VIEW_DATA_DISGUST":
            return Object.assign({}, state, {
                monthlyViewDataDisgust: action.monthlyViewDataDisgust
            });
        case "DISPLAY_GRAPH":
            if (state.selectedView === "monthly") {
                switch (state.selectedEmotion) {
                    case "joy":
                        return Object.assign({}, state, {
                            graphData: state.monthlyViewDataJoy[state.selectedMonthKey].scores
                    });
                    case "fear":
                        return Object.assign({}, state, {
                            graphData: state.monthlyViewDataFear[state.selectedMonthKey].scores
                    });
                    case "anger":
                        return Object.assign({}, state, {
                            graphData: state.monthlyViewDataAnger[state.selectedMonthKey].scores
                    });
                    case "disgust":
                        return Object.assign({}, state, {
                            graphData: state.monthlyViewDataDisgust[state.selectedMonthKey].scores
                    });
                }
            } else if (state.selectedView === "yearly") {
                switch (state.selectedEmotion) {
                    case "joy":
                        return Object.assign({}, state, {
                            graphData: state.yearlyViewDataJoy
                    });
                    case "fear":
                        return Object.assign({}, state, {
                            graphData: state.yearlyViewDataFear
                    });
                    case "anger":
                        return Object.assign({}, state, {
                            graphData: state.yearlyViewDataAnger
                    });
                    case "disgust":
                        return Object.assign({}, state, {
                            graphData: state.yearlyViewDataDisgust
                    });
                }
            }
        }
    }

  export default reducer;