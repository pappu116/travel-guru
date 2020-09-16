import coxsbazzer from "./coxsbazzer";
import sundorbon from "./sundorbon";
import sreemongol from "./sreemongol";

const fakeData = [...coxsbazzer, ...sundorbon, ...sreemongol];

const shuffle = (a) => {
  for (let i = a.length; i; i--) {
    let j = Math.floor(Math.random() * i);
    [a[i - 1], a[j]] = [a[j], a[i - 1]];
  }
};

shuffle(fakeData);

export default fakeData;
