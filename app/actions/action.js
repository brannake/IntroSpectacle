export const addUser = (user) => {
  console.log("HAHA");
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
  console.log("DIS RENDER")
  return {
    type: 'STORE_IMAGE_DATA',
    imageData: data
  }
}