export const addUser = (user) => {
    console.log(user);
  return {
    type: 'ADD_USER',
    user: user
  }
}

export const authenticateUser = () => {
  console.log("Wtf");
    return {
      type: 'AUTHENTICATE_USER',
      authenticated: true
  }
}