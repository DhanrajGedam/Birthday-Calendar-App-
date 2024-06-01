import React from 'react';

const FavoriteBirthdays = ({ favorites }) => {
  return (
    <div>
      <h3>Favorite Birthdays</h3>
      <ul>
        {favorites.map((birthday, index) => (
          <li style={{ fontSize: '1.9rem' }} key={index}>{birthday.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default FavoriteBirthdays;
