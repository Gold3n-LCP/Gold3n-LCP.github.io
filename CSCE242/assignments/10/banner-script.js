const switcher = () => {
  const currQuote = document.querySelector("#slideQuotes :not(.hidden)");
  currQuote.classList.add("hidden");

  let nextQuote = currQuote.nextElementSibling;

  if (nextQuote == null) {
    nextQuote = document.querySelector("#slideQuotes :first-child");
  }

  nextQuote.classList.remove("hidden");
};

setInterval(switcher, 2000);
