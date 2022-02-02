import { useState } from 'react';
import Header from './components/Header';
import DetailCard from './components/DetailCard';
import SummaryCard from './components/SummaryCard';

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
      <div className='flex w-3/4 min-h-full rounded-3x1 shadow-lg m-auto bg-gray-100'>
        {/* form card section */}
        <div className='form-container'>
          <div className='flex items-center justify-center'>
            <h3 className='my-auto mr-auto text-x1 text-pink-800 font-bold shadow-md py-1 px-3 rounded-md bg-white bg-opacity-30'>
              forecast
            </h3>
            <div className='flex p-2 text-gray-100 bg-gray-600 bg-opacity-30 rounded-lg'>
              <i className='fa fa-map my-auto' aria-hidden='true'></i>
              <div className='text-right'>
                <p className='font-semibold text-sm ml-2'>{city}</p>
              </div>
            </div>
          </div>
          <div className='flex flex-col items-center justify-center h-full'>
            <h1 className='text-white text-2x1'>
              The Only Weather Forecast App You Need
            </h1>
            <hr className='h-1 bg-white w-1/4 rounded-full my-5' />
            <form
              noValidate
              onSubmit={handleSubmit}
              className='flex justify-center w-full'
            >
              <input
                type='text'
                className='relative rounded-x1 py-2 px-3 w2/3 bg-gray-300 bg-opacity-60 text-white placeholder-gray-200'
                onChange={handleChange}
                required
              />
              <button className='z-10'>
                <i
                  className='fa fa-search text-white ml-10 border-1 my-auto z10 cursor-pointer p-3'
                  aria-hidden='true'
                  onClick={() => {
                    navigator.geolocation.getCurrentPosition(myIP);
                  }}
                ></i>
              </button>
            </form>
          </div>
        </div>
        {/* info card section */}
        <div className='w-2/3 p5'></div>
        <Header />
        <div className='flex flex-col my-10'>
          {weatherData.length === 0 ? (
            <div className='container p-4 flex items-center justify-center h-1/3 mb-auto'>
              <h1 className='text-gray-300 text-4x1 font-bold uppercase'>
                {noData}
              </h1>
            </div>
          ) : (
            <>
              <h1 className='text-5x text-gray-800 mt-auto mb-4'>Today</h1>
              <DetailCard weather_icon={weatherIcon} data={weatherData} />
              <h1 className='text-3x1 text-gray-600 mb-4 mt-10'>
                More On {city}{' '}
              </h1>
              <ul className='grid grid-cols-2 gap-2'>
                {weatherData.list.map((days, index) => {
                  if (index > 0) {
                    return <SummaryCard key={index} day={days} />;
                  }
                })}
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
