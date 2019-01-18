// const Year = new Date().getFullYear();
// const Month = new Date().getMonth();
// const date = new Date().getDate(); // notice capital Date is reserved
// const Day = new Date().getDay();
// const Hour = new Date().getHours();
// const Minute = new Date().getMinutes();
// const Seconds = new Date().getSeconds();

// Year;
// Month; // 0: January
// date;
// Day; // 0: Sunday
// Hour;
// Minute;
// Seconds;

// console.log(String(Year) === "2019");

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];
// console.log(typeof Month)
//   console.log(typeof months[Month])

// const string = "Jan 11 2019";
// // const array = string.split(" ");
// // array.pop();
// // const joined = array.join("-");
// // joined;

// // const today = new Date();
// // const tommorow = new Date(new Date().getTime() + 144 * 60 * 60 * 1000);
// // console.log(tommorow.getDate());
// // const m = months[tommorow.getMonth()];
// // const d = String(tommorow.getDate()).padStart(2, "0");
// // const y = tommorow.getFullYear();
// // const dateToday = `${m}${d}${y}`;
// // dateToday;

// const t = Date.parse(today);
// t;
// const n = Date.parse(tommorow);
// n;
// console.log(n - t);

// const b = "09 Jan 2019";
// const l = Date.parse(b);
// l;

// const tday = new Date();
// const thirthestDay = new Date(new Date().getTime() + 696 * 60 * 60 * 1000);

// const today = `${
//   months[tday.getMonth()]
// } ${tday.getDate()} ${tday.getFullYear()}`;
// const tommorow = "Jan 19 2019";
// const thirthiestDay = `${
//   months[thirthestDay.getMonth()]
// } ${thirthestDay.getDate()} ${thirthestDay.getFullYear()}`;

// const x = Date.parse(today);
// const a = Date.parse(tommorow);
// const y = Date.parse(thirthiestDay);
// console.log(tday.getDay());
// x;
// a;
// y;

// console.log(a - x);
// console.log(29 * (a - x));
// console.log(y - x);
