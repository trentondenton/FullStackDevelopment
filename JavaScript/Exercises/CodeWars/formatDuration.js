function formatDuration(seconds) {
  let response = '';
  const minute = 60; // seconds
  const hour = 60; // minutes
  const day = 12; // hours
  const year = 12; // months

  const years = Math.floor(seconds / (minute * hour * day * year));
  const days = Math.floor(seconds / (minute * hour * day));
  const hours = Math.floor(seconds / (minute * hour));
  const minutes = Math.floor(seconds / minute);
  const mySeconds = seconds % minute;

  const times = [
    { unit: 'year', value: years },
    { unit: 'day', value: days },
    { unit: 'hour', value: hours },
    { unit: 'minute', value: minutes },
    { unit: 'second', value: mySeconds },
  ];

  times.forEach((time) => {
    if (time.value > 0) {
      response += `${time.value} ${time.unit}${time.value > 1 ? 's' : ''}, `;
    }
  });

  return response
    .split(', ')
    .filter((item) => item !== '')
    .join(', ')
    .replace(/, ([^,]*)$/, ' and $1');
}


console.log(formatDuration(1)); // 1 second