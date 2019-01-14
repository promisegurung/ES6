const allEvents = [
  {
    id: "event-1",
    title: "Halloween Special: 90's EDITION",
    description:
      "Lorem ipsum dolor sit amet, dicit deterruisset in est, no atqui viderer deterruisset sea. Albucius accusata no vim, ne per epicuri interpretaris, id placerat conceptam eam. Nam id stet atqui, vel an duis tollit convenire. Quo ut denique recteque. No iudico animal constituto vim, ius te verear accusamus. Per cu causae apeirian. Pri ei ubique electram, ei est vidit porro mundi. Cu eum causae alienum, sed ad dico velit.Tation omittam salutandi eos id, vis odio dicit ex, natum modus lorem cum ei. Ius te blandit fabellas volutpat. Id sea nihil labitur sensibus, tota idque ceteros at nam. Sea verterem moderatius ex, mei at deleniti imperdiet theophrastus. Veritus salutatus no eos, no usu viris offendit.",
    date: { date: "11/01/2019", day: "Fri", time: "18:00" },
    location: "Camden, London",
    price: "21.00",
    organiser: "The Lorem Ipsum",
    fullPrice: "£21.00 - £36.00",
    refundPolicy: "No refunds",
    categories: ["Parties"]
  },
  {
    id: "event-1",
    title: "Halloween Special: 90's EDITION",
    description:
      "Lorem ipsum dolor sit amet, dicit deterruisset in est, no atqui viderer deterruisset sea. Albucius accusata no vim, ne per epicuri interpretaris, id placerat conceptam eam. Nam id stet atqui, vel an duis tollit convenire. Quo ut denique recteque. No iudico animal constituto vim, ius te verear accusamus. Per cu causae apeirian. Pri ei ubique electram, ei est vidit porro mundi. Cu eum causae alienum, sed ad dico velit.Tation omittam salutandi eos id, vis odio dicit ex, natum modus lorem cum ei. Ius te blandit fabellas volutpat. Id sea nihil labitur sensibus, tota idque ceteros at nam. Sea verterem moderatius ex, mei at deleniti imperdiet theophrastus. Veritus salutatus no eos, no usu viris offendit.",
    date: { date: "11/01/2019", day: "Fri", time: "18:00" },
    location: "Camden, London",
    price: "21.00",
    organiser: "The Lorem Ipsum",
    fullPrice: "£21.00 - £36.00",
    refundPolicy: "No refunds",
    categories: ["Parties"]
  }
];

const uniqueAllEvents = [
  {
    id: "event-1",
    title: "Halloween Special: 90's EDITION",
    description:
      "Lorem ipsum dolor sit amet, dicit deterruisset in est, no atqui viderer deterruisset sea. Albucius accusata no vim, ne per epicuri interpretaris, id placerat conceptam eam. Nam id stet atqui, vel an duis tollit convenire. Quo ut denique recteque. No iudico animal constituto vim, ius te verear accusamus. Per cu causae apeirian. Pri ei ubique electram, ei est vidit porro mundi. Cu eum causae alienum, sed ad dico velit.Tation omittam salutandi eos id, vis odio dicit ex, natum modus lorem cum ei. Ius te blandit fabellas volutpat. Id sea nihil labitur sensibus, tota idque ceteros at nam. Sea verterem moderatius ex, mei at deleniti imperdiet theophrastus. Veritus salutatus no eos, no usu viris offendit.",
    date: { date: "11/01/2019", day: "Fri", time: "18:00" },
    location: "Camden, London",
    price: "21.00",
    organiser: "The Lorem Ipsum",
    fullPrice: "£21.00 - £36.00",
    refundPolicy: "No refunds",
    categories: ["Parties"]
  }
];

const noDuplication = Object.values(
  allEvents.reduce((acc, cur) => Object.assign(acc, { [cur.id]: cur }), {})
);

noDuplication;
console.log(allEvents.length === uniqueAllEvents.length);
console.log(uniqueAllEvents.length === noDuplication.length);
