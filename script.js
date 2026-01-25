// ===== NAV ELEMENTS =====
const AbtUs = document.getElementById("AboutUs");
const Events = document.getElementById("Events");
const Contacts = document.getElementById("Contacts");
const Main = document.getElementById("main");

// ===== ACTIVITY BUTTONS =====
const ActivityEventsBtn = document.getElementById("ActivityEventsBtn");
const ActivityEduBtn = document.getElementById("ActivityEduBtn");
const ActivitySportBtn = document.getElementById("ActivitySportBtn");
const ActivityCharityBtn = document.getElementById("ActivityCharityBtn");

// ===== SOCIAL BUTTONS =====
const FBBtn = document.getElementById("FBBtn");
const YtBtn = document.getElementById("YtBtn");
const InstaBtn = document.getElementById("InstaBtn");

// ===== HELPER FUNCTION =====
function go(btn, url, activeEl = null) {
  if (!btn) return;
  btn.addEventListener("click", () => {
    window.location.href = url;
    if (activeEl) activeEl.classList.add("click");
  });
}

// ===== NAVIGATION =====
go(Main, "index.html", Main);
go(AbtUs, "AboutUs.html", AbtUs);
go(Events, "Events.html", Events);
go(Contacts, "Contacts.html", Contacts);

// ===== ACTIVITY NAVIGATION =====
go(ActivityEventsBtn, "Events.html", Events);
go(ActivityEduBtn, "Events.html", Events);
go(ActivitySportBtn, "Events.html", Events);
go(ActivityCharityBtn, "AboutUs.html", AbtUs);

// ===== SOCIAL LINKS =====
if (FBBtn) {
  FBBtn.addEventListener("click", () => {
    window.location.href =
      "https://www.facebook.com/groups/440153730023022/?locale=ru_RU";
  });
}

if (YtBtn) {
  YtBtn.addEventListener("click", () => {
    window.location.href = "https://www.youtube.com/@OLIMPYPANOV";
  });
}

if (InstaBtn) {
  InstaBtn.addEventListener("click", () => {
    window.location.href =
      "https://www.instagram.com/olimpypanov?igsh=bGN1bmhjb3NkcjRy&utm_source=qr";
  });
}
