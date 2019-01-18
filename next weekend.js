const today = new Date();
const dayNum = today.getDay();
dayNum;
const nextSat = 6 - dayNum;
const nextSun = 7 - dayNum;

const weekend1 = new Date(new Date().getTime() + nextSat * 24 * 60 * 60 * 1000);
weekend1;
const weekend2 = new Date(new Date().getTime() + nextSun * 24 * 60 * 60 * 1000);
weekend2;

const location = { location: "camden, London" };

const split = location.location.split(", ");
split;
const filter = "london";
const filteree = filter[0].toUpperCase() + filter.slice(1);
filteree;

console.log(split.includes(filteree) || split.includes(filter));
