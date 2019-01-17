const array = [
  {
    id: "event-1",
    title: "Halloween Special: 90's EDITION",
    description: " Veritus salutatus no eos, no usu viris offendit.",
    src: 'Event1',
    date: "Jan 11 2019 18:00",
    location: "Camden, London",
    price: "21.00",
    organiser: "The Lorem Ipsum",
    fullPrice: "£21.00 - £36.00",
    refundPolicy: "No refunds",
    categories: ["Parties"]
  }
];

const d = new Date(array[0].date);
d;

console.log(d.getDay());
console.log(d.getMonth());
console.log(d.getDate());
console.log(d.getHours());
console.log(("0" + d.getMinutes()).slice(-2));

const time = ("0" + d.getMinutes()).slice(-2);
time;