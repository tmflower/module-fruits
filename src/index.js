import items from "./foods";
import { choice, remove } from "./helpers";

const RANDOMFRUIT = choice(items);

console.log(`I'd like one ${RANDOMFRUIT} please.`);
console.log(`Here you go: ${RANDOMFRUIT}`);
console.log(`Delicious, may I have another?`);

remove(items, RANDOMFRUIT);
const FRUITSLEFT = items.length;
console.log(`I'm sorry, we're all out. We have ${FRUITSLEFT} left.`)