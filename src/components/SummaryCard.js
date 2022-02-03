import moment from 'moment';

export default function SummaryCard({ day }) {
  let day_icon = `${
    process.env.REACT_APP_ICON_URL + day.weather[0]['icon']
  }@2x.png`;

  return (
    <li className='container p-4 flex items-center justify-center bg-gray-200 rounded-lg my-auto mr-1'>
      <div className='my-auto'>
        <p className='font-bold text-3x1 text-ping-600 mb-2'>
          {Math.round(day.main.temp)}&deg;C
        </p>
        <p className='text-2x1 text-gray-800 tracking-widest'>
          {day.weather[0].main}
          <img src={day_icon} alt='' className='w-1 inline' />
        </p>
        <p className='text-gray-400 text-xs uppercase tracking-widest'>
          {day.weather[0].description}
        </p>
        <p className='tracking-wider'>
          {moment(day.dt_txt).format('ddd hh:mm')}am
        </p>
      </div>
    </li>
  );
}
