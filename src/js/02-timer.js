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
  if (selectedDates[0] <= new Date()) {
    refs.button.disabled = true;
    return Notify.failure('Please choose a date in the future');
  } else {
    refs.button.disabled = false;
    return Notify.success('Selected date is correct');
  }
}
