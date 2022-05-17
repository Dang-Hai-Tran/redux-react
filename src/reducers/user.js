const initialUser = {};

export const userReducer = (state = initialUser, { type, payload }) => {
  switch (type) {
    case 'ADD_USER':
      return { ...state, ...payload };

    default:
      return state;
  }
};
