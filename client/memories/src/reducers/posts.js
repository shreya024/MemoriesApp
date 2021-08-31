const posts = (state = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return state;

    case "CREATE":
      return state;

    default:
      return state;
  }
};

export default posts;
