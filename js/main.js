const tickerQueue = document.getElementById("ticker").children;
const tickerInterval = 3500;
let tickerIndex = 0;

function tickerChange() {
  tickerQueue[tickerIndex].classList.toggle("on");
  tickerIndex++;
  if (tickerIndex === tickerQueue.length) {
    tickerIndex = 0;
  }
  tickerQueue[tickerIndex].classList.toggle("on");
}

setInterval(tickerChange, tickerInterval);
