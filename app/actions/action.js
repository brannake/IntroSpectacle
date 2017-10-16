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