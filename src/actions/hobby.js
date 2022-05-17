export const addNewHobby = (newHobby) => ({
  type: 'ADD_HOBBY',
  payload: newHobby,
});

export const setActiveHobbyId = (newActiveId) => ({
  type: 'SET_ACTIVE_HOBBY',
  payload: newActiveId,
});
