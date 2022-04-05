function isBusinessHours (dayNumber, hourNumber) {
  if (hourNumber >=12 && hourNumber <= 13) {
    return false;
  }else if (hourNumber >= 9 && hourNumber <= 18) {
    return true;
  }
  if (dayNumber === 0 || dayNumber === 6) {
    return false;
  }else {
    return true;
  }
}


function getDayNumber (janFirstDayNumber, yearDayNumber) {
  return (janFirstDayNumber + yearDayNumber) % 7
}

function isBusinessHourByYearDay (janFirstDayNumber, yearDayNumber, hourNumber) {
    let weekOfDay = getDayNumber(janFirstDayNumber, yearDayNumber);
    return isBusinessHours(weekOfDay, hourNumber);
}
