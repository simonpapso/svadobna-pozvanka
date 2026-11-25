"use strict";

const wedding = window.wedding;
const start = new Date(wedding.startsAt);
const end = new Date(wedding.endsAt);
const weddingDate = new Intl.DateTimeFormat("sk-SK", {
  dateStyle: "long",
  timeZone: wedding.timeZone
});
const numericDate = new Intl.DateTimeFormat("sk-SK", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
  timeZone: wedding.timeZone
});
const calendarDate = new Intl.DateTimeFormat("en-CA", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
  timeZone: wedding.timeZone
}).format(start);

function fill(selector, text) {
  document.querySelectorAll(selector).forEach(element => {
    element.textContent = text;
  });
}

function makeElement(tag, text) {
  const element = document.createElement(tag);
  element.textContent = text;
  return element;
}

document.title = `${wedding.firstName} & ${wedding.secondName} — Svadobná pozvánka`;
fill("[data-first]", wedding.firstName);
fill("[data-second]", wedding.secondName);
fill("[data-town]", wedding.town);
fill("[data-date]", weddingDate.format(start));
fill("[data-date-numeric]", numericDate.format(start));
document.querySelector("[data-date]").dateTime = calendarDate;
const deadline = document.querySelector("[data-deadline]");
deadline.dateTime = wedding.replyDeadline;
deadline.textContent = weddingDate.format(new Date(`${wedding.replyDeadline}T12:00:00Z`));

for (const mark of document.querySelectorAll("[data-monogram]")) {
  const first = Array.from(wedding.firstName)[0];
  const second = Array.from(wedding.secondName)[0];
  mark.replaceChildren(`${first} `, makeElement("span", "&"), ` ${second}`);
}

fill("[data-venue]", wedding.venue.name);
fill("[data-location]", wedding.venue.location);
fill("[data-venue-note]", wedding.venue.note);
document.querySelector("[data-map]").href = wedding.venue.mapUrl;
document.querySelectorAll("[data-photo]").forEach(img => {
  const photo = wedding.photos[img.dataset.photo];
  img.alt = photo.alt;
  img.src = photo.src;
});

const schedule = wedding.schedule.map(({ time, title, description }) => {
  const item = document.createElement("li");
  const clock = makeElement("time", time);
  clock.dateTime = time;
  const event = document.createElement("div");
  event.append(makeElement("h3", title), makeElement("p", description));
  item.append(clock, event);
  return item;
});
document.querySelector("#timeline").replaceChildren(...schedule);

const questions = wedding.faq.map(({ question, answer }) => {
  const item = document.createElement("details");
  item.append(makeElement("summary", question), makeElement("p", answer));
  return item;
});
document.querySelector("#faq").replaceChildren(...questions);

const nav = document.querySelector("#navigacia");
const menu = document.querySelector(".menu-toggle");

function toggleMenu(open) {
  menu.setAttribute("aria-expanded", String(open));
  nav.classList.toggle("is-open", open);
}

menu.hidden = false;
menu.addEventListener("click", () => toggleMenu(menu.getAttribute("aria-expanded") === "false"));
nav.addEventListener("click", event => {
  if (event.target.closest("a")) toggleMenu(false);
});
document.querySelector(".site-header").addEventListener("keydown", event => {
  if (event.key === "Escape" && menu.getAttribute("aria-expanded") === "true") {
    toggleMenu(false);
    menu.focus();
  }
});

const countdown = document.querySelector("[data-countdown]");

function updateCountdown() {
  const remaining = start.getTime() - Date.now();
  countdown.hidden = remaining <= 0;
  if (countdown.hidden) return;

  const minutes = Math.floor(remaining / 60000);
  fill("[data-days]", Math.floor(minutes / 1440));
  fill("[data-hours]", Math.floor(minutes / 60) % 24);
  fill("[data-minutes]", minutes % 60);
}

updateCountdown();
if (!countdown.hidden) {
  const clock = setInterval(() => {
    updateCountdown();
    if (countdown.hidden) clearInterval(clock);
  }, 1000);
}

function icsText(text) {
  return text.replaceAll("\\", "\\\\").replace(/\r\n|\r|\n/g, "\\n").replace(/[,;]/g, "\\$&");
}

function calendarTime(date) {
  return date.toISOString().replace(/[-:]|\.\d{3}/g, "");
}

function foldCalendarLine(line) {
  const encoder = new TextEncoder();
  let size = 0;
  let folded = "";
  for (const character of line) {
    const length = encoder.encode(character).length;
    if (size + length > 75) {
      folded += "\r\n ";
      size = 1;
    }
    folded += character;
    size += length;
  }
  return folded;
}

const calendar = document.querySelector("#calendar");
calendar.hidden = false;
calendar.addEventListener("click", () => {
  const content = [
    "BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//Svadobna pozvanka//SK",
    "BEGIN:VEVENT", `UID:svadba-${calendarDate}@${location.host || "local"}`,
    `DTSTAMP:${calendarTime(new Date())}`, `DTSTART:${calendarTime(start)}`,
    `DTEND:${calendarTime(end)}`, `SUMMARY:${icsText(`Svadba • ${wedding.firstName} a ${wedding.secondName}`)}`,
    `LOCATION:${icsText(`${wedding.venue.name}, ${wedding.venue.location}`)}`,
    "END:VEVENT", "END:VCALENDAR", ""
  ].map(foldCalendarLine).join("\r\n");
  const url = URL.createObjectURL(new Blob([content], { type: "text/calendar;charset=utf-8" }));
  const link = document.createElement("a");
  link.href = url;
  link.download = "svadba.ics";
  link.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
});

const form = document.querySelector("#reply-form");
const party = document.querySelector("#party");
const partyField = document.querySelector("#party-field");
const submit = form.querySelector("button[type=submit]");
const status = document.querySelector("#reply-status");
const acceptingReplies = !wedding.rsvp.demo && /^https:\/\//i.test(wedding.rsvp.endpoint);
document.querySelector("#demo-notice").hidden = !wedding.rsvp.demo;

if (acceptingReplies) {
  document.querySelector("#form-note").textContent = "Tieto údaje použijeme na organizáciu svadby.";
  submit.textContent = "Odoslať odpoveď";
} else if (!wedding.rsvp.demo) {
  document.querySelector("#form-note").textContent = "Potvrdenie účasti cez web zatiaľ nie je dostupné.";
  submit.disabled = true;
}

const guests = Array.from({ length: wedding.rsvp.maxGuests }, (_, index) => {
  const number = index + 1;
  const label = number === 1 ? "osoba" : number < 5 ? "osoby" : "osôb";
  return new Option(`${number} ${label}`, number);
});
party.replaceChildren(...guests);
form.hidden = false;

function updatePartyField() {
  const attending = form.elements.attendance.value === "yes";
  partyField.hidden = !attending;
  party.disabled = !attending;
}

updatePartyField();
form.addEventListener("change", updatePartyField);
form.addEventListener("input", () => {
  form.elements.name.setCustomValidity("");
  status.removeAttribute("data-error");
  status.textContent = "";
});

form.addEventListener("submit", async event => {
  event.preventDefault();
  if (submit.disabled) return;
  const values = new FormData(form);
  const name = values.get("name").trim();
  if (!name) {
    form.elements.name.setCustomValidity("Zadajte meno a priezvisko.");
    form.elements.name.reportValidity();
    return;
  }
  status.removeAttribute("data-error");
  if (!acceptingReplies) {
    status.textContent = "Ukážka prebehla úspešne. Odpoveď sa neposlala ani neuložila.";
    form.reset();
    updatePartyField();
    return;
  }

  submit.disabled = true;
  status.textContent = "Odosielame odpoveď…";
  try {
    const response = await fetch(wedding.rsvp.endpoint, {
      method: "POST",
      headers: { Accept: "application/json", "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        attendance: values.get("attendance") === "yes" ? "Áno" : "Nie",
        partySize: Number(values.get("partySize") || 0),
        note: values.get("note").trim()
      }),
      signal: AbortSignal.timeout(15000)
    });
    if (!response.ok) throw new Error("RSVP request failed");
    form.reset();
    updatePartyField();
    status.textContent = "Ďakujeme, vašu odpoveď sme prijali.";
  } catch {
    status.setAttribute("data-error", "");
    status.textContent = "Odoslanie sa nepodarilo. Skúste to znova o chvíľu.";
  } finally {
    submit.disabled = false;
  }
});
