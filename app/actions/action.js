const action = (user) => {
    console.log("THIS RAN");
  return {
    type: 'ADD_USER',
    user: user
  }
}

export default action;