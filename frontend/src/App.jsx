import React, { useState } from 'react';
import Calendar from './components/Calendar';
import BirthdayList from './components/BirthdayList';
import FavoriteBirthdays from './components/FavoriteBirthdays';
import getBirthdays from './services/birthdayService';

const App = () => {
  const [birthdays, setBirthdays] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const handleDateChange = async (date) => {
    if (date) {
      const birthdayList = await getBirthdays(date);
      setBirthdays(birthdayList);
    }
  };

  const handleAddFavorite = (birthday) => {
    setFavorites([...favorites, birthday]);
  };

  return (
    <div>
      <h1>Birthday Calendar</h1>
      <Calendar onDateChange={handleDateChange} />
      <BirthdayList birthdays={birthdays} onAddFavorite={handleAddFavorite} />
      <FavoriteBirthdays favorites={favorites} />
    </div>
  );
};

export default App;
