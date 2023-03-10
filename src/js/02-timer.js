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
};

refs.button.disabled = true;

function isDateValid(selectedDates) {
  if (selectedDates[0] <= new Date()) {
    return Notify.failure('Please choose a date in the future');
  } else {
    refs.button.disabled = false;
    return Notify.success('Selected date is correct');
  }
}
