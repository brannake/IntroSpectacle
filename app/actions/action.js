const action = (user) => {
    console.log(user);
  return {
    type: 'ADD_USER',
    user: user
  }
}

export default action;