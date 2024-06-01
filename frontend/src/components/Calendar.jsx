import React, { useState } from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

const Calendar = ({ onDateChange }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        value={selectedDate}
        onChange={(newValue) => {
          setSelectedDate(newValue);
          onDateChange(newValue);
        }}
        textField={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
};

export default Calendar;
