import React from 'react';

const HobbyList = (props) => {
  const { hobbyList, onActiveId, activeId } = props;
  return (
    <div className="hobbyList-container">
      <ul>
        {hobbyList.map((hobby) => (
          <li
            key={hobby.id}
            onClick={() => onActiveId(hobby.id)}
            style={hobby.id === activeId ? { color: 'red' } : null}>
            {hobby.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HobbyList;
