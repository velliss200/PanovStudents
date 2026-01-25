const AbtUs = document.getElementById("AboutUs");
const Events = document.getElementById("Events");
const Contacts = document.getElementById("Contacts");
const Main = document.getElementById("main");
const ActivityEventsBtn = document.getElementById("ActivityEventsBtn");
const ActivityEduBtn = document.getElementById("ActivityEduBtn");
const ActivitySportBtn = document.getElementById("ActivitySportBtn");
const ActivityCharityBtn = document.getElementById("ActivityCharityBtn");
const AUText = document.getElementById("AUText");
const FBBtn = document.getElementById("FBBtn");
const YtBtn = document.getElementById("YtBtn");
const InstaBtn = document.getElementById("InstaBtn");

if (FBBtn){
  
FBBtn.addEventListener("click", () => {
  window.location.href =
    "https://www.facebook.com/groups/440153730023022/?locale=ru_RU";
});}
if (YtBtn)
YtBtn.addEventListener("click", () => {
  window.location.href = "https://www.youtube.com/@OLIMPYPANOV";
});}

if(InstaBtn){
InstaBtn.addEventListener("click", () => {
  window.location.href =
    "https://www.instagram.com/olimpypanov?igsh=bGN1bmhjb3NkcjRy&utm_source=qr";
});}
const AUText2 = document.getElementById("AUText2");
Main.addEventListener("click", () => {
  window.location.href = "index.html";
  Main.classList.add("click");
});
if(AbtUs)
{AbtUs.addEventListener("click", () => {
  window.location.href = "AboutUs.html";
  AbtUs.classList.add("click");
});}
if(Events){
Events.addEventListener("click", () => {
  window.location.href = "Events.html";
  Events.classList.add("click");
});}
if(Contacts){
Contacts.addEventListener("click", () => {
  window.location.href = "Contacts.html";
  Contacts.classList.add("click");
});}


if(ActivityEventsBtn){
ActivityEventsBtn.addEventListener("click", () => {
  window.location.href = "Events.html";
  Events.classList.add("click");
});}


if(ActivityEduBtn){
ActivityEduBtn.addEventListener("click", () => {
  window.location.href = "Events.html";
  Events.classList.add("click");
});}





if(ActivitySportBtn){
ActivitySportBtn.addEventListener("click", () => {
  window.location.href = "Events.html";
  Events.classList.add("click");
});}



if(ActivityCharityBtn){
ActivityCharityBtn.addEventListener("click", () => {
  window.location.href = "AboutUs.html";
  Events.classList.add("click");
});

}
