const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const r2 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const r3 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const r4 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const r5 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const r6 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const r7 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



rl.question("What's your name? Nicknames are also acceptable :)", (name) => {
  console.log(`Nice to meet you, ${name}!`);

  rl.close();
});

r2.question("What's an activity you like doing?", (activity) => {
  console.log(`${activity} sounds like fun!`);

  r2.close();
});

r3.question("What do you listen to while doing that?", (listen) => {
  console.log(`Good to know!`);

  r3.close();
});

r4.question("Which meal is your favorite (breakfast, lunch, dinner)", (favMeal) => {
  console.log(`${favMeal} is the most important meal of the day.`);

  r4.close();
});

r5.question("What do you like to eat for that meal?", (meal) => {
  console.log(`${meal} sounds tasty.`);

  r5.close();
});

r6.question("Which sport is your absolute favorite?", (favSport) => {
  console.log(`${favSport} sounds like fun!`);

  r6.close();
});

r7.question("What is your superpower? In a few words, tell us what you're amazing at!", (superpower) => {
  console.log(`${superpower} sounds cool!`);

  r7.close();
});

console.log(`${name} likes to listen to ${listen} while ${activity}. Their favorite thing to eat for ${favMeal} is ${meal}, and their favorite sport is ${favSport}. Don't tell anyone, but they're also secretly good at ${superpower} too!`);

close;