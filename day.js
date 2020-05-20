// returns the day of the week for the given Date
function dayName(date) {
  const daysOfTheWeek = ["Sunday", "Monday","Tuesday", "Wednesday","Thursday", "Friday","Saturday"];
  return daysOfTheWeek[date.getDay()];
}

// returns a greeting for the given date
function greeting(date) {
  return `Hello, world! Happy ${dayName(date)}!`;
}
