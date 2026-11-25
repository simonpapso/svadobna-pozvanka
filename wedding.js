// Upravte údaje, fotografie a odkazy pre svoju svadbu.
window.wedding = {
  firstName: "Janka",
  secondName: "Šimon",
  town: "Nimnica",
  timeZone: "Europe/Bratislava",
  // Pripojte časový posun platný v deň svadby (+02:00 v lete, +01:00 v zime).
  startsAt: "2027-06-19T00:00:00+02:00",
  endsAt: "2027-06-20T00:00:00+02:00",
  allDay: true,
  replyDeadline: "",
  venue: {
    name: "Kursalon",
    location: "Kúpele Nimnica, 020 71 Nimnica",
    note: "Stretneme sa v Kursalone v areáli Kúpeľov Nimnica.",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Kursalon%2C%20K%C3%BApele%20Nimnica"
  },
  photos: {
    couple: {
      src: "https://images.pexels.com/photos/33363338/pexels-photo-33363338.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "Ilustračná fotografia svadobného páru na kamennom nádvorí"
    },
    venue: {
      src: "https://images.pexels.com/photos/15283448/pexels-photo-15283448.jpeg?auto=compress&cs=tinysrgb&w=1050",
      alt: "Ilustračná fotografia svadobnej hostiny v záhrade"
    }
  },
  schedule: [
    { time: "14:30", title: "Príchod hostí", description: "Stretneme sa pri welcome drinku." },
    { time: "15:30", title: "Svadobný obrad", description: "Povieme si áno." },
    { time: "17:00", title: "Svadobná hostina", description: "Prípitok, večera a chvíľa na rozhovory pri stole." },
    { time: "19:30", title: "Prvý tanec", description: "Potom je parket váš." }
  ],
  faq: [
    { question: "Kde zaparkujem a kde sa dá ubytovať?", answer: "Podrobnosti o parkovaní a ubytovaní doplníme pred svadbou." },
    { question: "Ako sa obliecť?", answer: "Zvoľte slávnostné oblečenie, v ktorom sa cítite pohodlne." },
    { question: "Chcete sa dohodnúť na menu?", answer: "Napíšte nám požiadavku do poznámky pri potvrdení účasti, aby sme ju mohli zohľadniť pri výbere menu." }
  ],
  rsvp: {
    demo: true,
    endpoint: "",
    maxGuests: 4
  }
};
