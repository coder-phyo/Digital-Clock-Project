let date = new Date();

// FOR TIME
let h;
let m = date.getMinutes();
let s = date.getSeconds();
let ms = date.getMilliseconds();
let ampm;

// FOR DATE
let currentDate;
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

// nc -> nc means not calculated
let nc_hour = date.getHours();
let nc_minute = date.getMinutes();
let nc_second = date.getSeconds();
// am pm
if (nc_hour >= 12) {
  ampm = "PM";
} else {
  ampm = "Am";
}

// hour
if (nc_hour > 12) {
  let realHr = nc_hour - 12;
  h = "0" + realHr;
  if (h < 10) {
    h = "0" + nc_hour;
  }
} else if (nc_hour === 0) {
  h = 12;
} else {
  hr = "0" + nc_hour;
}

// minute
if (nc_minute < 10) {
  m = "0" + nc_minute;
} else {
  m = nc_minute;
}

// sec
if (nc_second < 10) {
  s = "0" + nc_second;
} else {
  s = nc_second;
}

// date
if (date.getDate() < 10) {
  currentDate = "0" + date.getDate();
} else {
  currentDate = date.getDate();
}

let timeDiv = document.querySelector(".hms");
timeDiv.innerHTML = `<p> ${h} : ${m} : ${s} <span>${ampm}</span></p>`;

document.querySelector(
  ".dmy"
).innerHTML = `<p>${currentDate} ${month} ${year} ${weekDay}</p>`;
