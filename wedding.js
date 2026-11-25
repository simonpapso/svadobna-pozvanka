// Upravte údaje, fotografie a odkazy pre svoju svadbu.
window.wedding = {
  firstName: "Janka",
  secondName: "Šimon",
  placeSummary: "Sverepec a Nimnica",
  timeZone: "Europe/Bratislava",
  // Pripojte časový posun platný v deň svadby (+02:00 v lete, +01:00 v zime).
  startsAt: "2027-06-19T00:00:00+02:00",
  endsAt: "2027-06-20T00:00:00+02:00",
  allDay: true,
  replyDeadline: "",
  ceremony: {
    name: "Kostol Najsvätejšej Trojice",
    location: "Sverepec, 017 01",
    mapQuery: "Kostol Najsvätejšej Trojice, Sverepec"
  },
  reception: {
    name: "Kursalon",
    location: "Kúpele Nimnica 106, 020 71 Nimnica",
    mapQuery: "Kursalon, Kúpele Nimnica"
  },
  photos: {
    couple: {
      src: "https://images.pexels.com/photos/5086370/pexels-photo-5086370.jpeg?auto=compress&cs=tinysrgb&w=2000",
      alt: "Ilustračná svadobná fotografia páru na lúke"
    },
    venue: {
      src: "https://images.pexels.com/photos/15283448/pexels-photo-15283448.jpeg?auto=compress&cs=tinysrgb&w=1050",
      alt: "Ilustračná fotografia svadobnej hostiny v záhrade"
    }
  },
  schedule: [
    { title: "Svadobný obrad", description: "Stretneme sa v Kostole Najsvätejšej Trojice vo Sverepci." },
    { title: "Presun do Nimnice", description: "Po obrade sa presunieme zo Sverepca do Kursalonu v Kúpeľoch Nimnica." },
    { title: "Svadobná hostina", description: "V Kursalone si spolu pripijeme a oslávime svadbu." }
  ],
  faq: [
    { question: "Kde zaparkujem a kde sa dá ubytovať?", answer: "Podrobnosti o parkovaní a ubytovaní doplníme pred svadbou." },
    { question: "Chcete sa dohodnúť na menu?", answer: "Napíšte nám požiadavku do poznámky pri potvrdení účasti, aby sme ju mohli zohľadniť pri výbere menu." }
  ],
  rsvp: {
    demo: true,
    endpoint: "",
    maxGuests: 4
  }
};
