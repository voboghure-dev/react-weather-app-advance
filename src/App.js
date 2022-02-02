import { useState } from 'react';

function App() {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [noData, setNoData] = useState('No Data Yet');
  const [searchTerm, setSearchTerm] = useState('');
  const [weatherData, setWeatherData] = useState([]);
  const [city, setCity] = useState('Unknown Location');
  const [weatherIcon, setWeatherIcon] = useState(
    `${process.env.REACT_APP_ICON_URL}10n@2x.png`
  );

  return (
    <div className='bg-gray-800 flex items-center justify-center w-screen h-screen py-10'>
      Welcome
    </div>
  );
}

export default App;
