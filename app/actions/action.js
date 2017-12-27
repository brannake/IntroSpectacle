export const addUser = (user) => {
  return {
    type: 'ADD_USER',
    user: user
  }
}

export const authenticateUser = () => {
    return {
      type: 'AUTHENTICATE_USER',
      authenticated: true
  }
}

export const storeImageData = (data) => {
  return {
    type: 'STORE_IMAGE_DATA',
    imageData: data
  }
}

export const storeImageSrc = (src) => {
  return {
    type: 'STORE_IMAGE_SRC',
    imagSrc: src
  }
}

export const storeCurrentDate = (date) => {
  return {
    type: 'STORE_CURRENT_DATE',
    currentDate: date
  }
}

export const storeSelectedDate = (date) => {
  return {
    type: 'STORE_SELECTED_DATE',
    selectedDate: date
  }
}

export const storeCurrentMonth = (month) => {
  if (month === "January") {
    return {
      type: 'STORE_CURRENT_MONTH',
      currentMonth: month,
      dates: [
        [1, 2, 3, 4, 5, 6, 7], 
        [8, 9, 10, 11, 12, 13, 14],
        [15, 16, 17, 18, 19, 20, 21],
        [22, 23, 24, 25, 26, 27, 28],
        [29, 30, 31]
      ]};
    }

  if (month === "February") {
    return {
      type: 'STORE_CURRENT_MONTH',
      currentMonth: month,
      dates: [
        ["", " ", "  ", 1, 2, 3, 4],
        [5, 6, 7, 8, 9, 10, 11],
        [12, 13, 14, 15, 16, 17, 18],
        [19, 20, 21, 22, 23, 24, 25],
        [26, 27, 28]
      ]};
    }

  if (month === "March") {
    return {
      type: 'STORE_CURRENT_MONTH',
      currentMonth: month,
      dates: [
        ["", " ", "  ", 1, 2, 3, 4],
        [5, 6, 7, 8, 9, 10, 11],
        [12, 13, 14, 15, 16, 17, 18],
        [19, 20, 21, 22, 23, 24, 25],
        [26, 27, 28, 29, 30, 31]
      ]};
    }

  if (month === "April") {
    return {
      type: 'STORE_CURRENT_MONTH',
      currentMonth: month,
      dates: [
        ["", " ", "  ", "   ", "    ", "     ", 1],
        [2, 3, 4, 5, 6, 7, 8],
        [9, 10, 11, 12, 13, 14, 15],
        [16, 17, 18, 19, 20, 21, 22],
        [23, 24, 25, 26, 27, 28, 29]
      ]};
    }

  if (month === "May") {
    return {
      type: 'STORE_CURRENT_MONTH',
      currentMonth: month,
      dates: [
        ["", 1, 2, 3, 4, 5, 6],
        [7, 8, 9, 10, 11, 12, 13],
        [14, 15, 16, 17, 18, 19, 20],
        [21, 22, 23, 24, 25, 26, 27],
        [23, 24, 25, 26, 27, 28, 29],
        [28, 29, 30, 31]
      ]};
    }

  if (month === "May") {
    return {
      type: 'STORE_CURRENT_MONTH',
      currentMonth: month,
      dates: [
        ["", " ", "  ", "   ", 1, 2, 3],
        [4, 5, 6, 7, 8, 9, 10],
        [11, 12, 13, 14, 15, 16, 17],
        [18, 19, 20, 21, 22, 23, 24],
        [25, 26, 27, 28, 29, 30]
        [28, 29, 30, 31]
      ]};
    }

  if (month === "June") {
    return {
      type: 'STORE_CURRENT_MONTH',
      currentMonth: month,
      dates: [
        ["", " ", "  ", "   ", 1, 2, 3],
        [4, 5, 6, 7, 8, 9, 10],
        [11, 12, 13, 14, 15, 16, 17],
        [18, 19, 20, 21, 22, 23, 24],
        [25, 26, 27, 28, 29, 30]
      ]};
    }

  if (month === "July") {
    return {
      type: 'STORE_CURRENT_MONTH',
      currentMonth: month,
      dates: [
        ["", " ", "  ", "   ", "    ", "     ", 1],
        [2, 3, 4, 5, 6, 7, 8],
        [9, 10, 11, 12, 13, 14, 15],
        [16, 17, 18, 19, 20, 21, 22],
        [29, 30, 31]
      ]};
    }

  if (month === "August") {
    return {
      type: 'STORE_CURRENT_MONTH',
      currentMonth: month,
      dates: [
        ["", " ", 1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10, 11, 12],
        [13, 14, 15, 16, 17, 18, 19],
        [20, 21, 22, 23, 24, 25, 26],
        [27, 28, 29, 30, 31]
      ]};
    }

  if (month === "September") {
    return {
      type: 'STORE_CURRENT_MONTH',
      currentMonth: month,
      dates: [
        ["", " ", "  ", "   ", "    ", 1, 2],
        [3, 4, 5, 6, 7, 8, 9],
        [10, 11, 12, 13, 14, 15, 16],
        [17, 18, 19, 20, 21, 22, 23],
        [24, 25, 26, 27, 28, 29, 30]
      ]};
    }

  if (month === "October") {
    return {
      type: 'STORE_CURRENT_MONTH',
      currentMonth: month,
      dates: [
        [1, 2, 3, 4, 5, 6, 7],
        [8, 9, 10, 11, 12, 13, 14],
        [15, 16, 17, 18, 19, 20, 21],
        [22, 23, 24, 25, 26, 27, 28,],
        [29, 30, 31]
      ]};
    }

  if (month === "November") {
    return {
      type: 'STORE_CURRENT_MONTH',
      currentMonth: month,
      dates: [
        ["", " ", "  ", 1, 2, 3, 4],
        [5, 6, 7, 8, 9, 10, 11],
        [12, 13, 14, 15, 16, 17, 18],
        [19, 20, 21, 22, 23, 24, 25],
        [26, 27, 28, 29, 30]
      ]};
    }

  if (month === "December") {
    return {
      type: 'STORE_CURRENT_MONTH',
      currentMonth: month,
      dates: [
        ["", " ", "  ", 1, 2, 3, 4],
        [5, 6, 7, 8, 9, 10, 11],
        [12, 13, 14, 15, 16, 17, 18],
        [19, 20, 21, 22, 23, 24, 25],
        [26, 27, 28, 29, 30]
      ]};
  }
}

export const storeSelectedMonth = (month) => {

  if (month === "January") {
    return {
      type: 'STORE_SELECTED_MONTH',
      selectedMonth: month,
      dates: [
        [1, 2, 3, 4, 5, 6, 7], 
        [8, 9, 10, 11, 12, 13, 14],
        [15, 16, 17, 18, 19, 20, 21],
        [22, 23, 24, 25, 26, 27, 28],
        [29, 30, 31]
      ]};
    }

  if (month === "February") {
    return {
      type: 'STORE_SELECTED_MONTH',
      selectedMonth: month,
      dates: [
        ["", " ", "  ", 1, 2, 3, 4],
        [5, 6, 7, 8, 9, 10, 11],
        [12, 13, 14, 15, 16, 17, 18],
        [19, 20, 21, 22, 23, 24, 25],
        [26, 27, 28]
      ]};
    }

  if (month === "March") {
    return {
      type: 'STORE_SELECTED_MONTH',
      selectedMonth: month,
      dates: [
        ["", " ", "  ", 1, 2, 3, 4],
        [5, 6, 7, 8, 9, 10, 11],
        [12, 13, 14, 15, 16, 17, 18],
        [19, 20, 21, 22, 23, 24, 25],
        [26, 27, 28, 29, 30, 31]
      ]};
    }

  if (month === "April") {
    return {
      type: 'STORE_SELECTED_MONTH',
      selectedMonth: month,
      dates: [
        ["", " ", "  ", "   ", "    ", "     ", 1],
        [2, 3, 4, 5, 6, 7, 8],
        [9, 10, 11, 12, 13, 14, 15],
        [16, 17, 18, 19, 20, 21, 22],
        [23, 24, 25, 26, 27, 28, 29]
      ]};
    }

  if (month === "May") {
    return {
      type: 'STORE_SELECTED_MONTH',
      selectedMonth: month,
      dates: [
        ["", 1, 2, 3, 4, 5, 6],
        [7, 8, 9, 10, 11, 12, 13],
        [14, 15, 16, 17, 18, 19, 20],
        [21, 22, 23, 24, 25, 26, 27],
        [23, 24, 25, 26, 27, 28, 29],
        [28, 29, 30, 31]
      ]};
    }

  if (month === "May") {
    return {
      type: 'STORE_SELECTED_MONTH',
      selectedMonth: month,
      dates: [
        ["", " ", "  ", "   ", 1, 2, 3],
        [4, 5, 6, 7, 8, 9, 10],
        [11, 12, 13, 14, 15, 16, 17],
        [18, 19, 20, 21, 22, 23, 24],
        [25, 26, 27, 28, 29, 30]
        [28, 29, 30, 31]
      ]};
    }

  if (month === "June") {
    return {
      type: 'STORE_SELECTED_MONTH',
      selectedMonth: month,
      dates: [
        ["", " ", "  ", "   ", 1, 2, 3],
        [4, 5, 6, 7, 8, 9, 10],
        [11, 12, 13, 14, 15, 16, 17],
        [18, 19, 20, 21, 22, 23, 24],
        [25, 26, 27, 28, 29, 30]
      ]};
    }

  if (month === "July") {
    return {
      type: 'STORE_SELECTED_MONTH',
      selectedMonth: month,
      dates: [
        ["", " ", "  ", "   ", "    ", "     ", 1],
        [2, 3, 4, 5, 6, 7, 8],
        [9, 10, 11, 12, 13, 14, 15],
        [16, 17, 18, 19, 20, 21, 22],
        [29, 30, 31]
      ]};
    }

  if (month === "August") {
    return {
      type: 'STORE_SELECTED_MONTH',
      selectedMonth: month,
      dates: [
        ["", " ", 1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10, 11, 12],
        [13, 14, 15, 16, 17, 18, 19],
        [20, 21, 22, 23, 24, 25, 26],
        [27, 28, 29, 30, 31]
      ]};
    }

  if (month === "September") {
    return {
      type: 'STORE_SELECTED_MONTH',
      selectedMonth: month,
      dates: [
        ["", " ", "  ", "   ", "    ", 1, 2],
        [3, 4, 5, 6, 7, 8, 9],
        [10, 11, 12, 13, 14, 15, 16],
        [17, 18, 19, 20, 21, 22, 23],
        [24, 25, 26, 27, 28, 29, 30]
      ]};
    }

  if (month === "October") {
    return {
      type: 'STORE_SELECTED_MONTH',
      selectedMonth: month,
      dates: [
        [1, 2, 3, 4, 5, 6, 7],
        [8, 9, 10, 11, 12, 13, 14],
        [15, 16, 17, 18, 19, 20, 21],
        [22, 23, 24, 25, 26, 27, 28,],
        [29, 30, 31]
      ]};
    }

  if (month === "November") {
    return {
      type: 'STORE_SELECTED_MONTH',
      selectedMonth: month,
      dates: [
        ["", " ", "  ", 1, 2, 3, 4],
        [5, 6, 7, 8, 9, 10, 11],
        [12, 13, 14, 15, 16, 17, 18],
        [19, 20, 21, 22, 23, 24, 25],
        [26, 27, 28, 29, 30]
      ]};
    }

  if (month === "December") {
    return {
      type: 'STORE_SELECTED_MONTH',
      selectedMonth: month,
      dates: [
        ["", " ", "  ", 1, 2, 3, 4],
        [5, 6, 7, 8, 9, 10, 11],
        [12, 13, 14, 15, 16, 17, 18],
        [19, 20, 21, 22, 23, 24, 25],
        [26, 27, 28, 29, 30]
      ]};
  }
}

export const storeSelectedView = (view) => {
  return {
    type: 'STORE_SELECTED_VIEW',
    selectedView: view
  }
}

export const storeSelectedEmotion = (emotion) => {
  return {
    type: 'STORE_SELECTED_EMOTION',
    selectedEmotion: emotion
  }
}

export const storeYearlyViewDataJoy = (yearlyViewDataJoy) => {
  return {
    type: 'STORE_YEARLY_VIEW_DATA_JOY',
    yearlyViewDataJoy: yearlyViewDataJoy,
  }
}

export const storeYearlyViewDataFear = (yearlyViewDataFear) => {
  return {
    type: 'STORE_YEARLY_VIEW_DATA_FEAR',
    yearlyViewDataFear: yearlyViewDataFear,
  }
}

export const storeYearlyViewDataAnger = (yearlyViewDataAnger) => {
  return {
    type: 'STORE_YEARLY_VIEW_DATA_ANGER',
    yearlyViewDataAnger: yearlyViewDataAnger,
  }
}

export const storeYearlyViewDataDisgust = (yearlyViewDataDisgust) => {
  return {
    type: 'STORE_YEARLY_VIEW_DATA_DISGUST',
    yearlyViewDataDisgust: yearlyViewDataDisgust,
  }
}

export const storeMonthlyViewDataJoy = (monthlyViewDataJoy) => {
  return {
    type: 'STORE_MONTHLY_VIEW_DATA_JOY',
    monthlyViewDataJoy: monthlyViewDataJoy
  }
}

export const storeMonthlyViewDataFear = (monthlyViewDataFear) => {
  return {
    type: 'STORE_MONTHLY_VIEW_DATA_FEAR',
    monthlyViewDataFear: monthlyViewDataFear
  }
}

export const storeMonthlyViewDataAnger = (monthlyViewDataAnger) => {
  return {
    type: 'STORE_MONTHLY_VIEW_DATA_ANGER',
    monthlyViewDataAnger: monthlyViewDataAnger
  }
}

export const storeMonthlyViewDataDisgust = (monthlyViewDataDisgust) => {
  return {
    type: 'STORE_MONTHLY_VIEW_DATA_DISGUST',
    monthlyViewDataDisgust: monthlyViewDataDisgust
  }
}

export const displayGraph = () => {
  return {
    type: 'DISPLAY_GRAPH',
  }
}