function updateDynamic() {
  let date = new Date();

  // nc -> nc means not calculated
  let nc_hour = date.getHours();
  let nc_minute = date.getMinutes();
  let nc_second = date.getSeconds();

  // FOR TIME
  let h;
  let m = nc_minute < 10 ? "0" + nc_minute : nc_minute;
  let s = nc_second < 10 ? "0" + nc_second : nc_second;
  let ampm = nc_hour >= 12 ? "AM" : "PM";

  // hour
  if (nc_hour > 12) {
    let realHr = nc_hour - 12;
    h = "0" + realHr;
    if (h < 10) {
      h = "0" + nc_hour;
    } else {
      h = nc_hour - 12;
    }
  } else if (nc_hour === 0) {
    h = 12;
  } else {
    hr = "0" + nc_hour;
  }

  // FOR DATE
  let currentDate = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
  let year = date.getFullYear();
  let month_arr = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let month = month_arr[date.getMonth()];
  let day_arr = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let weekDay = day_arr[date.getDay()];

  let timeDiv = document.querySelector(".hms");
  timeDiv.innerHTML = `<p> ${h} : ${m} : ${s} <span>${ampm}</span></p>`;

  document.querySelector(
    ".dmy"
  ).innerHTML = `<p>${currentDate} ${month} ${year} ${weekDay}</p>`;
}

setInterval(updateDynamic, 1000);
