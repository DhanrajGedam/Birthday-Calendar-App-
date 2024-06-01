import axios from 'axios';

const getBirthdays = async (date) => {
  const formattedDate = `${date.getMonth() + 1}/${date.getDate()}`;
  const response = await axios.get(`https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/births/${formattedDate}`);
  return response.data.births;
};

export default getBirthdays;
