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
    selectedDay: date
  }
}

export const storeCurrentMonth = (month) => {
  return {
    type: 'STORE_CURRENT_MONTH',
    currentMonth: month
  }
}

export const storeSelectedMonth = (month) => {
  return {
    type: 'STORE_SELECTED_MONTH',
    selectedMonth: month
  }
}

export const storeSelectedView = (view) => {
  return {
    type: 'STORE_SELECTED_VIEW',
    selectedView: view
  }
}