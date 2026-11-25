// Upravte údaje, fotografie a odkazy pre svoju svadbu.
window.wedding = {
  firstName: "Laura",
  secondName: "Adam",
  town: "Modra",
  timeZone: "Europe/Bratislava",
  // Pripojte časový posun platný v deň svadby (+02:00 v lete, +01:00 v zime).
  startsAt: "2027-09-18T15:30:00+02:00",
  endsAt: "2027-09-19T01:00:00+02:00",
  replyDeadline: "2027-08-31",
  venue: {
    name: "Záhrada pod lipami",
    location: "Modra, Malé Karpaty",
    note: "Obrad aj hostina budú na jednom mieste. Na obrad sa stretneme v záhrade a večer sa presunieme pod strechu.",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Modra%2C%20Slovensko"
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
    { time: "14:30", title: "Príchod hostí", description: "Stretneme sa v záhrade pri welcome drinku." },
    { time: "15:30", title: "Svadobný obrad", description: "Svoje áno si povieme pod lipami." },
    { time: "17:00", title: "Svadobná hostina", description: "Prípitok, večera a chvíľa na rozhovory pri stole." },
    { time: "19:30", title: "Prvý tanec", description: "Potom je parket váš." }
  ],
  faq: [
    { question: "Kde zaparkujem a kde sa dá ubytovať?", answer: "Parkovať budeme pri vstupe do areálu. Ak ostávate na noc, ubytovanie hľadajte v Modre alebo v neďalekom Pezinku." },
    { question: "Ako sa obliecť?", answer: "Zvoľte slávnostné oblečenie, v ktorom sa cítite pohodlne. Obrad bude na tráve a večer sa môže ochladiť." },
    { question: "Čo ak bude pršať?", answer: "Obrad presunieme pod strechu v rovnakom areáli. Čas aj miesto príchodu ostanú rovnaké." },
    { question: "Chcete sa dohodnúť na menu?", answer: "Napíšte nám požiadavku do poznámky pri potvrdení účasti, aby sme ju mohli zohľadniť pri výbere menu." }
  ],
  rsvp: {
    demo: true,
    endpoint: "",
    maxGuests: 4
  }
};
