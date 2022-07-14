const initState = {
  popular: [],
  newGames: [],
  upComing: [],
  searched: [],
};

const gameReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return {
        ...state,
        popular: action.payload.popular,
        upComing: action.payload.upComing,
        newGames: action.payload.newGames,
      };
    default:
      return { ...state };
  }
};

export default gameReducer;