"use strict";

// DOM
const username = document.getElementById("username");
const userImg = document.getElementById("userImg");
const selectUser = document.querySelector(".selectUser");
const selectImg = document.querySelector(".selectImg");
const submitUser = document.getElementById("ready");

// global variables
let iconIndex = 0;

// user data
const users = [];

// username arrays
const adj = [
  "cosmic",
  "alien",
  "intergalactic",
  "lunar",
  "starry",
  "solar",
  "celestial",
  "astral",
  "interstellar",
  "planetary",
];

const noun = [
  "bear",
  "cat",
  "dog",
  "elephant",
  "fish",
  "giraffe",
  "horse",
  "insect",
  "jaguar",
  "kangaroo",
  "lion",
  "monkey",
  "ostrich",
  "panda",
  "quail",
  "raccoon",
  "snail",
  "tiger",
  "urial",
  "vulture",
  "whale",
  "xerus",
  "yak",
  "zebra",
  "aardvark",
  "alligator",
  "antelope",
  "badger",
  "bat",
  "beaver",
  "buffalo",
  "camel",
  "cheetah",
  "chimpanzee",
  "crocodile",
  "deer",
  "dolphin",
  "donkey",
  "eagle",
  "eel",
  "elk",
  "emu",
  "falcon",
  "ferret",
  "flamingo",
  "fox",
  "gazelle",
  "gorilla",
  "grasshopper",
  "grizzly",
  "hedgehog",
  "heron",
  "hippopotamus",
  "hyena",
  "ibex",
  "iguana",
  "impala",
  "jackal",
  "jaguarundi",
  "lemur",
  "leopard",
  "lizard",
  "lynx",
  "meerkat",
  "mink",
  "mole",
  "mongoose",
  "otter",
  "owl",
  "pangolin",
  "panther",
  "peccary",
  "pelican",
  "penguin",
  "porcupine",
  "puma",
  "rabbit",
  "reindeer",
  "rhinoceros",
  "sable",
  "seahorse",
  "seal",
  "sheep",
  "skunk",
  "squirrel",
  "tapir",
  "tarsier",
  "thylacine",
  "toucan",
  "turkey",
  "turtle",
  "vicuna",
  "vole",
  "wallaby",
  "wolf",
  "wombat",
  "wren",
  "zorilla",
];

// profile icon classes
const icons = [
  "fa-user-astronaut",
  "fa-earth-oceania",
  "fa-robot",
  "fa-fire",
  "fa-spaghetti-monster-flying",
  "fa-sun",
  "fa-bacteria",
  "fa-meteor",
];

// functions
const increaseIconIndex = () => {
  if (iconIndex === icons.length) {
    iconIndex = 0;
  }
};

// callback function
const randomPick = (array) => array[Math.floor(Math.random() * array.length)];

const generateUser = (adj, noun) => `${randomPick(adj)}-${randomPick(noun)}`;

const generateImg = () => {
  let currentClass = userImg.classList[1];
  let newClass = icons[iconIndex];
  userImg.classList.remove(currentClass);
  userImg.classList.add(newClass);
  iconIndex++;
  increaseIconIndex();
};

const userRefresh = () => {
  username.innerHTML = generateUser(adj, noun);
};

const saveUserWhenReady = () => {
  const user = {
    uniqueID: crypto.randomUUID().slice(0, 6),
    username: username.innerHTML,
    iconClasses: Array.from(userImg.classList),
  };
  return user;
};

// Event Handlers
selectUser.addEventListener("click", () => {
  userRefresh();
});

selectImg.addEventListener("click", () => {
  generateImg();
});

submitUser.addEventListener("click", () => {
  users.push(saveUserWhenReady());
  console.log(users);
});

// refreshes the default username example on page reload
userRefresh();
