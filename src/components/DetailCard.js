import moment from 'moment';

export default function DetailCard({ weather_icon, data }) {
  const { clouds, main, weather } = data.list[0];

  return (
    <div className='container p-4 flex items-center justify-center shadow-lg roundedfd-ld bg-white h-1/3 mb-auto'>
      <div className='my-auto'>
        <p className='font-bold text-5x1 text-pink-800 mb-2'>
          {Math.round(main.temp)}&deg;C
        </p>
        <p className='text-4x1 text-gray-800 tracking-widest'>
          {weather[0].main}
          <img src={weather_icon} alt='' className='w-1/4 inline' />
        </p>
        <p className='text-gray-400 text-xs uppercase tracking-widest'>
          {weather[0].description}
        </p>
        <p className='tracking-wider'>{moment().format('dddd MMM YYYY')}</p>
      </div>
      <div className='my-2 border-l-2 border-gray-100 p-2'>
        <p className='text-gray-400 text-lg'>
          Feel Like: {Math.round(main.feel_like)}&deg;C
        </p>
        <p className='text-gray-400 text-lg'>Humidity: {main.humidity}%</p>
        <p className='text-gray-400 text-lg'>Cloud Cover: {clouds.all}</p>
        <p className='text-gray-400 text-lg'>
          Min. Temp: {Math.round(main.temp_min)}&deg;C
        </p>
        <p className='text-gray-400 text-lg'>
          Max. Temp: {Math.round(main.temp_max)}&deg;C
        </p>
      </div>
    </div>
  );
}
