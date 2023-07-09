// Array Of Quotes
var quotes = [
  {
    qouteText: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
    src: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1673611182i/3565._UX200_CR0,15,200,200_.jpg",
  },
  {
    qouteText:
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe",
    author: "Albert Einstein",
    src: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1429114964i/9810._UX200_CR0,14,200,200_.jpg",
  },
  {
    qouteText: "So many books, so little time.",
    author: "Frank Zappa",
    src: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1315160559i/22302._UY200_CR2,0,200,200_.jpg",
  },
  {
    qouteText: "A room without books is like a body without a soul.",
    author: "Marcus Tullius Cicero",
    src: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1197881416i/13755._UX200_CR0,47,200,200_.jpg",
  },
  {
    qouteText:
      "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
    author: "Bernard M. Baruch",
    src: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1331977133i/5768330._UX200_CR0,30,200,200_.jpg",
  },
  {
    qouteText: "You only live once, but if you do it right, once is enough.",
    author: "Mae West",
    src: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1198551937i/259666._UX200_CR0,16,200,200_.jpg",
  },
  {
    qouteText: "Be the change that you wish to see in the world.",
    author: "Mahatma Gandhi",
    src: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1356810912i/5810891._UX200_CR0,21,200,200_.jpg",
  },
  {
    qouteText:
      "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals",
    author: " J.K. Rowling",
    src: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1596216614i/1077326._UX200_CR0,15,200,200_.jpg",
  },
  {
    qouteText: "Without music, life would be a mistake",
    author: "Friedrich Nietzsche",
    src: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1596216614i/1077326._UX200_CR0,15,200,200_.jpg",
  },
];
// Variables
var btn = document.getElementById("btn");
var qoute = document.getElementById("qoute-text");
var author = document.getElementById("qoute-author");
var image = document.getElementById("image");
var qouteContainer = document.querySelector(".qoute-container");
var index;
var usedIndex = [];
btn.addEventListener("click", function () {
  index = Math.floor(Math.random() * quotes.length);
  // Actions
  qouteContainer.style.opacity = "1";
  qoute.textContent = ` \“${quotes[index].qouteText}\”`;
  author.textContent = `${quotes[index].author}`;
  image.src = `${quotes[index].src}`;
});
