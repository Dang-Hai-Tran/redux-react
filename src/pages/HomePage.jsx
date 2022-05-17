import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewHobby, setActiveHobbyId } from '../actions/hobby';
import HobbyList from '../components/Home/HobbyList';
import Chance from 'chance';

const HomePage = () => {
  const hobbyList = useSelector((state) => state.hobby.list);
  const activeId = useSelector((state) => state.hobby.activeId);
  const dispatch = useDispatch();
  const handleAddHobbyClick = () => {
    // Random a hobby object: id + title
    const chance = new Chance();
    const newHobby = {
      id: chance.guid(),
      title: chance.sentence(),
    };
    // Dispatch action to add a new hobby to redux store
    const action = addNewHobby(newHobby);
    dispatch(action);
  };
  const handleActiveId = (id) => {
    const newActiveId = id;
    const action = setActiveHobbyId(newActiveId);
    dispatch(action);
  };
  return (
    <div className="homePage-container">
      <h1>My Hobbies</h1>
      <button onClick={handleAddHobbyClick}>Random hobby</button>
      <HobbyList hobbyList={hobbyList} onActiveId={handleActiveId} activeId={activeId} />
    </div>
  );
};

export default HomePage;
