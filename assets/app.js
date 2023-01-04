let date = new Date();

let h;
let m = date.getMinutes();
let s = date.getSeconds();
let ms = date.getMilliseconds();
let ampm;

// am pm
if (h >= 12) {
  ampm = "PM";
} else {
  ampm = "Am";
}

// hour
if (date.getHours() > 12) {
  let realHr = date.getHours() - 12;
  h = "0" + realHr;
} else if (date.getHours() === 0) {
  h = 12;
} else {
  hr = "0" + date.getHours();
}

// minute
if (date.getMinutes() < 10) {
  m = "0" + date.getMinutes();
} else {
  m = date.getMinutes();
}

// sec
if (date.getSeconds() < 10) {
  s = "0" + date.getSeconds();
} else {
  s = date.getSeconds();
}

let timeDiv = document.querySelector(".hms");
timeDiv.innerHTML = `<p> ${h} : ${m} : ${s} <span>${ampm}</span></p>`;

let weekDiv = document.querySelector(".dmy");
weekDiv.innerHTML = `<p>4 1 2023 Wendesday</p>`;
