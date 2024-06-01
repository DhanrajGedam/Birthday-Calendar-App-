import React from 'react';

const BirthdayList = ({ birthdays, onAddFavorite }) => {
  return (
    <div>
      <h3 style={{ fontSize: '2.5rem' }}>Birthdays</h3>
      <ul>
        {birthdays.map((birthday, index) => (
          <li style={{ fontSize: '1.9rem' }} key={index}>
            {birthday.text} <button className='fs-5 btn btn-info '  onClick={() => onAddFavorite(birthday)}>Add to Favorites</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BirthdayList;
