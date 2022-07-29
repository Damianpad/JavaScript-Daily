const makePhrase = () => {
  const words1 = ["24/7", "Multi-tier", "30,000 foot", "B-to-B", "win-win"];
  const words2 = ["empowered", "value-added", "oriented", "focused", "aligned"];
  const words3 = ["process", "solution", "tipping-point", "strategy", "vision"];

  const chooseRandom = () => {
    return Math.floor(Math.random() * words1.length);
  }

  const phrase = words1[chooseRandom()] + " " + words2[chooseRandom()] + " " + words3[chooseRandom()];
  alert(phrase);
}



makePhrase();