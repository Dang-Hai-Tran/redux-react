// Initial state
// Reducer = function(state=Initial state, action) => return newState

const initialHobby = {
  list: [],
  activeId: null,
};

export const hobbyReducer = (state = initialHobby, { type, payload }) => {
  switch (type) {
    case 'ADD_HOBBY':
      return { ...state, list: [...state.list, payload] };
    case 'SET_ACTIVE_HOBBY':
      return { ...state, activeId: payload };

    default:
      return state;
  }
};
