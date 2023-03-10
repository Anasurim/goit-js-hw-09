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
    console.log(new Date());

    if (selectedDates[0] <= new Date()) {
      return Notify.failure('Please choose a date in the future');
    }
    return Notify.success('Selected date is correct');
  },
};

flatpickr("input[type = 'text']", options);
