function attachEventsListeners() {
    const days = document.getElementById('days');
    const hours = document.getElementById('hours');
    const minutes = document.getElementById('minutes');
    const seconds = document.getElementById('seconds');

    const main = document.querySelector('main');
    main.addEventListener('click', convert);

    function convert(event) {
        if (event.target.value == 'Convert') {
            switch (event.target.id) {
                case 'daysBtn': hours.value = days.value * 24;
                    minutes.value = hours.value * 60;
                    seconds.value = minutes.value * 60;
                    break;
                case 'hoursBtn': days.value = hours.value / 24;
                    minutes.value = hours.value * 60;
                    seconds.value = minutes.value * 60;
                    break;
                case 'minutesBtn': hours.value = minutes.value / 60;
                    days.value = hours.value / 24;
                    seconds.value = minutes.value * 60;
                    break;
                case 'secondsBtn': minutes.value = seconds.value / 60;
                    hours.value = minutes.value / 60;
                    days.value = hours.value / 24;
                    break;
            }
        }
    }
}