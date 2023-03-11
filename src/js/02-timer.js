import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);

    isDateValid(selectedDates);

    updateTimer(selectedDates);
  },
};

flatpickr("input[type = 'text']", options);

const refs = {
  button: document.querySelector('button'),
  seconds: document.querySelector('span[data-seconds]'),
  minutes: document.querySelector('span[data-minutes]'),
  hours: document.querySelector('span[data-hours]'),
  days: document.querySelector('span[data-days]'),
};

refs.button.disabled = true;

function isDateValid(selectedDates) {
  if (selectedDates[0] <= options.defaultDate) {
    refs.button.disabled = true;
    return Notify.failure('Please choose a date in the future');
  } else {
    refs.button.disabled = false;
    return Notify.success('Selected date is correct');
  }
}

function updateTimer(selectedDates) {
  refs.button.addEventListener('click', () => {
    setInterval(() => {
      const selectedDateMs = selectedDates[0];
      const currentDateMs = new Date();
      const delta = selectedDateMs - currentDateMs;
      convertMs(delta);

      console.log(convertMs(delta));

      setTimerTextContent(delta);
    }, 1000);
  });
}

function setTimerTextContent(delta) {
  refs.seconds.textContent = convertMs(delta)
    .seconds.toString()
    .padStart(2, '0');

  refs.minutes.textContent = convertMs(delta)
    .minutes.toString()
    .padStart(2, '0');
  refs.hours.textContent = convertMs(delta).hours.toString().padStart(2, '0');
  refs.days.textContent = convertMs(delta).days.toString().padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
