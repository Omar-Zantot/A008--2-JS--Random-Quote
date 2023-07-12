var quoteContainer = [
  {
    quote: "“Be yourself; everyone else is already taken.”",
    author: "-- Oscar Wilde",
  },
  {
    quote:
      "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    author: "-- Albert Einstein",
  },
  {
    quote: "“So many books, so little time.”",
    author: "-- Frank Zappa",
  },
  {
    quote: "“A room without books is like a body without a soul.”",
    author: "-- Marcus Tullius Cicero",
  },
  {
    quote: "“You only live once, but if you do it right, once is enough.”",
    author: "-- Mae West",
  },
  {
    quote:
      "“In three words I can sum up everything I've learned about life: it goes on.”",
    author: "-- Robert Frost",
  },
  {
    quote: "“If you tell the truth, you don't have to remember anything.”",
    author: "-- Mark Twain",
  },
  {
    quote: "“A friend is someone who knows all about you and still loves you.”",
    author: "-- Elbert Hubbard",
  },
  {
    quote:
      "“Live as if you were to die tomorrow. Learn as if you were to live forever.”",
    author: "-- Mahatma Gandhi",
  },
  {
    quote: "“The only way to do great work is to love what you do.”",
    author: "-- Steve Jobs",
  },
  {
    quote: "“Believe you can and you're halfway there.”",
    author: "-- Theodore Roosevelt",
  },
  {
    quote:
      "“Success is not final, failure is not fatal: It is the courage to continue that counts.”",
    author: "-- Winston Churchill",
  },
  {
    quote: "“The best revenge is massive success.”",
    author: "-- Frank Sinatra",
  },
  {
    quote: "“You miss 100% of the shots you don't take.”",
    author: "-- Wayne Gretzky",
  },
];

var usedIndices = [];

function getRandomNumber() {
  // TODO: 1- generate a random number
  var randomNumber = Math.floor(Math.random() * quoteContainer.length);

  // TODO: 2- Check if the random number is in the usedIndices array
  while (usedIndices.includes(randomNumber)) {
    //^ Generate a new random number
    randomNumber = Math.floor(Math.random() * quoteContainer.length);
  }

  // TODO: 3- Add the current random number to the usedIndices array
  usedIndices.push(randomNumber);

  // TODO: 4- If all quotes have been used, reset the usedIndices array
  if (usedIndices.length === quoteContainer.length) {
    usedIndices = [];
  }

  return randomNumber;
}

function generateRandomQuote() {
  var randomNumber = getRandomNumber();
  console.log(randomNumber);
  var randomQuote = quoteContainer[randomNumber];
  var quote = randomQuote.quote;
  var author = randomQuote.author;

  // TODO:  Update the paragraphs with the generated quote
  document.getElementById("quoteOut").innerHTML = quote;
  document.getElementById("author").innerHTML = author;
}

