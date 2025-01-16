import userData from "../data/user.json";

const userInitial = {
  user: userData.user[0],
};

const userReducer = (state = userInitial, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default userReducer;
