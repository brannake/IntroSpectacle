const action = (user) => {
  return {
    type: 'ADD_USER',
    user: user
  }
}

export default action;